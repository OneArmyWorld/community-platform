import 'cypress-file-upload'

import { createClient } from '@supabase/supabase-js'
import { deleteDB } from 'idb'

import { Auth, TestDB } from './db/firebase'

import type { ILibrary, IQuestionDB, IResearchDB } from 'oa-shared'
import type { IUserSignUpDetails } from '../utils/TestUtils'

type SeedData = {
  [tableName: string]: Array<Record<string, any>>
}

declare global {
  namespace Cypress {
    interface Chainable {
      checkCommentInViewport()
      checkCommentItem(comment: string, length: number): Chainable<void>
      clearServiceWorkers(): Promise<void>
      deleteCurrentUser(): Promise<void>
      deleteIDB(name: string): Promise<boolean>
      interceptAddressSearchFetch(addressResponse): Chainable<void>
      interceptAddressReverseFetch(addressResponse): Chainable<void>
      queryDocuments(
        collectionName: string,
        fieldPath: string,
        opStr: any,
        value: string,
      ): Chainable<any[]>
      addProject(
        project: ILibrary.DB,
        user: IUserSignUpDetails,
      ): Chainable<void>
      addQuestion(
        question: IQuestionDB,
        user: IUserSignUpDetails,
      ): Chainable<void>
      addResearch(
        research: IResearchDB,
        user: IUserSignUpDetails,
      ): Chainable<void>
      step(message: string)
      setSessionStorage(key: string, value: string): Promise<void>
    }
  }
}

/**
 * Create custom commands that can be used within cypress chaining and namespace
 * @remark - any called functions should be 'wrapped' in a cy.wrap('some name') statement to allow chaining
 * @remark - async code should be wrapped in a Cypress.promise block to allow the resolved promise to be
 * used in chained results
 */
const firestore = TestDB
/** Delete an indexeddb - resolving true on success and false if blocked (open connections) */
Cypress.Commands.add('deleteIDB', (name: string) => {
  cy.wrap('Delete Firebase IDB: ' + name)
    .then(() => {
      return new Cypress.Promise<boolean>((resolve) => {
        // Ensure DB exists - NOTE - only supported in chrome
        // ;(indexedDB as any).databases().then((names: string[]) => {
        //   if (names.includes(name)) {
        deleteDB(name, {
          // blocked implies active connection; for now just resolve false but in the
          // future may want to find better resolution
          blocked: () => resolve(false),
        })
          .then(() => resolve(true))
          .catch(() => resolve(false))
      })
    })
    .then((deleted) => cy.log('deleted?', deleted))
})

Cypress.Commands.add('setSessionStorage', (key: string, value: string) => {
  cy.wrap(`setSessionStorage - ${key}:${value}`).then(() => {
    cy.window().its('sessionStorage').invoke('setItem', key, value)
    cy.window().its('sessionStorage').invoke('getItem', key).should('eq', value)
  })
})

Cypress.Commands.add('clearServiceWorkers', () => {
  cy.window().then((w) => {
    cy.wrap('Clearing service workers').then(() => {
      return new Cypress.Promise((resolve) => {
        // if running production builds locally may also need to remove service workers between runs
        if (w.navigator && navigator.serviceWorker) {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            registrations.forEach((registration) => {
              registration.unregister()
            })
            resolve()
          })
        } else {
          resolve()
        }
      })
    })
  })
})

Cypress.Commands.add('deleteCurrentUser', () => {
  return new Cypress.Promise((resolve, reject) => {
    if (Auth.currentUser) {
      Auth.currentUser
        .delete()
        .then(() => resolve(null))
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    } else {
      resolve(null)
    }
  })
})

Cypress.Commands.add(
  'queryDocuments',
  (collectionName: string, fieldPath: string, opStr: any, value: string) => {
    Cypress.log({
      displayName: 'queryDocuments',
      consoleProps: () => {
        return { collectionName, fieldPath, opStr, value }
      },
    })
    return firestore.queryDocuments(collectionName, fieldPath, opStr, value)
  },
)

Cypress.Commands.add('addProject', (project, user) => {
  const slug = `${project.slug}-${user.username}`

  return firestore.addDocument('library', {
    ...project,
    slug,
  })
})

Cypress.Commands.add('addQuestion', (question, user) => {
  const slug = `${question.slug}-for-${user.username}`

  return firestore.addDocument('questions', {
    ...question,
    slug,
  })
})

Cypress.Commands.add('addResearch', (research, user) => {
  const slug = `${user.username}-in-${research.slug}`

  return firestore.addDocument('research', {
    ...research,
    slug,
  })
})

Cypress.Commands.add('step', (message: string) => {
  Cypress.log({
    displayName: 'step',
    message: [`**${message}**`],
  })
})

Cypress.Commands.add('interceptAddressSearchFetch', (addressResponse) => {
  cy.intercept('GET', 'https://nominatim.openstreetmap.org/search*', {
    body: addressResponse,
  }).as('fetchAddress')
})

Cypress.Commands.add('interceptAddressReverseFetch', (addressResponse) => {
  cy.intercept('GET', 'https://nominatim.openstreetmap.org/reverse?*', {
    body: addressResponse,
  }).as('fetchAddressReverse')
})

/**
 * Overwrite default logging to also output to console
 * https://github.com/cypress-io/cypress/issues/3199
 */
Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message))

Cypress.Commands.add('checkCommentInViewport', () => {
  cy.get('[data-cy="CommentItem"]')
    .first()
    .scrollIntoView()
    .should('be.inViewport', 10)
})

Cypress.Commands.add('checkCommentItem', (comment: string, length: number) => {
  cy.step('Comment mentions are formatted correctly')
  cy.get('[data-cy="CommentItem"]').should('have.length.gte', length)
  cy.checkCommentInViewport()
  cy.contains(comment)
})

const supabaseClient = (tenantId: string) =>
  createClient(Cypress.env('SUPABASE_API_URL'), Cypress.env('SUPABASE_KEY'), {
    global: {
      headers: {
        'x-tenant-id': tenantId,
      },
    },
  })

export const seedDatabase = async (
  data: SeedData,
  tenantId: string,
): Promise<any> => {
  const supabase = supabaseClient(tenantId)
  const results = {}

  // Convert to Promise.All
  for (const [table, rows] of Object.entries(data)) {
    results[table] = await supabase.from(table).insert(rows).select()
  }

  return results
}

export const clearDatabase = async (tables: string[], tenantId: string) => {
  const supabase = supabaseClient(tenantId)

  // sequential so there are no constraint issues
  for (const table of tables) {
    await supabase.from(table).delete().eq('tenant_id', tenantId)
  }
}

export const signUp = async (
  email: string,
  username: string,
  password: string,
) => {
  const tenantId = Cypress.env('TENANT_ID')
  const supabase = supabaseClient(tenantId)

  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  })
}
