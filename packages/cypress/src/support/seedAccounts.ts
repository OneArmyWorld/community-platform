import { createClient } from '@supabase/supabase-js'

import { MOCK_DATA } from '../data'
import { seedDatabase } from './commands'

import type { SupabaseClient } from '@supabase/supabase-js'

// Creates user accounts and respective profiles
export const seedAccounts = async () => {
  const supabase = supabaseAdminClient()

  const accounts = Object.values(MOCK_DATA.users)
    .filter((x) => !!x['password'] && !!x['email'] && !!x.userName)
    .map((user) => ({
      id: '',
      email: user['email'],
      username: user.userName,
      password: user['password'],
    }))

  const userIds = await Promise.all(
    accounts.map((user) =>
      signUp(supabase, user.email, user.username, user.password),
    ),
  )
  for (let i = 0; i < accounts.length; i++) {
    accounts[i].id = userIds[i]
  }
  const profiles = accounts
    .filter((x) => x.id)
    .map((x) => ({
      auth_id: x.id,
      username: x.username,
      tenant_id: Cypress.env('TENANT_ID'),
      created_at: new Date().toUTCString(),
      display_name: x.username,
      is_verified: true,
    }))
  return await seedDatabase({ profiles }, Cypress.env('TENANT_ID'))
}

const signUp = async (
  supabase: SupabaseClient,
  email: string,
  username: string,
  password: string,
) => {
  const result = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      username,
    },
  })

  if (result.error) {
    // most of the time the user already exists because auth accounts are multi-tenant.
    return (
      await supabase.rpc('get_user_id_by_email', {
        email,
      })
    ).data?.at(0)?.id
  }

  return result.data.user.id
}

export const deleteAccounts = async () => {
  const adminClient = supabaseAdminClient()
  const mockUsers = new Set(
    Object.values(MOCK_DATA.users)
      .filter((x) => !!x['email'])
      .map((x) => x['email']),
  )
  const result = await adminClient.auth.admin.listUsers()

  for (const user of result.data.users) {
    // only delete mock users and test users
    if (mockUsers.has(user.email) || user.email.endsWith('@test.com')) {
      await adminClient.auth.admin.deleteUser(user.id)
    }
  }
}

const supabaseAdminClient = () =>
  createClient(
    Cypress.env('SUPABASE_API_URL'),
    Cypress.env('SUPABASE_SERVICE_ROLE_KEY'),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  )
