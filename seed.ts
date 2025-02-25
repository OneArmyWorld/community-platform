import { copycat } from '@snaplet/copycat'
import { createSeedClient } from '@snaplet/seed'
import { ProfileTypeList } from 'oa-shared'

import type {
  categoriesChildInputs,
  categoriesInputs,
  categoriesScalars,
  commentsChildInputs,
  commentsScalars,
  profilesInputs,
  profilesScalars,
  questionsChildInputs,
  questionsScalars,
} from '@snaplet/seed'

/**
 * This script assumes the following database configuration.
 *
 * Totals:
 * - 10 users, 25 questions, 50 comments
 *
 * Distributions:
 * | Username         | Q? | Comments |
 * | ---------------------------------
 * | jereerickson92   | 10 | 10       |
 * | aldaplaskett48   | 5  | 10       |
 * | sampathpini67    | 4  | 5        |
 * | galenagiugovaz15 | 3  | 5        |
 * | veniaminjewell33 | 2  | 5        |
 * | cortneybrown81   | 1  | 5        |
 * | melisavang56     | 0  | 5        |
 * | lianabegam24     | 0  | 5        |
 * | akromstarkova72  | 0  | 0        |
 * | mirzoblazkova19  | 0  | 0        |
 */

//@ts-expect-error: Common properties (not default) + intellisense
const _PROFILES_BASE: profilesScalars = {
  /* text or text[] */
  type: ProfileTypeList.MEMBER,
  roles: ['user'],
  tags: [],
  photo_url: null,
  /* json or json[] */
  links: null,
  location: null,
  notification_settings: null,
  patreon: null,
  impact: null,
  /* bool */
  is_verified: true,
  is_blocked_from_messaging: false,
  is_contactable: true,
  is_supporter: true,
  /* int4 or int8 */
  total_useful: 0,
  total_views: 0,
}

//@ts-expect-error: Common properties (not default) + intellisense
const _QUESTIONS_BASE: questionsScalars = {
  /* text or text[] */
  moderation: null,
  slug: '',
  previous_slugs: [],
  /* json or json[] */
  images: null,
  /* bool */
  deleted: false,
  /* int4 or int8 */
  comment_count: 0,
}

//@ts-expect-error: Common properties (not default) + intellisense
const _COMMENTS_BASE: commentsScalars = {
  /* text or text[]*/
  legacy_id: null,
  source_id_legacy: null,
  /* bool */
  deleted: false,
}

//@ts-expect-error: Common properties (not default) + intellisense
const _CATEGORIES_BASE: categoriesScalars = {
  /* text or text[]*/
  legacy_id: null,
}

const seedCategories = (): categoriesChildInputs => [
  /* prettier-ignore */
  { ..._CATEGORIES_BASE, name: 'Questions', type: 'questions' },
  { ..._CATEGORIES_BASE, name: 'Research', type: 'research' },
  { ..._CATEGORIES_BASE, name: 'Projects', type: 'projects' },
  /* prettier-ignore-end */
]

const seedComments = (profile: profilesInputs): commentsChildInputs => {
  if (profile.username === 'jereerickson92') {
    /* prettier-ignore */
    return [
      { ..._COMMENTS_BASE, comment: 'Good topic!' },
    ]
    /* prettier-ignore-end */
  }
  return []
}

// Do not set `created_by` this is will be automatic
const seedQuestions = (profile: profilesInputs): questionsChildInputs => {
  if (profile.username === 'jereerickson92') {
    /* prettier-ignore */
    return [
        { ..._QUESTIONS_BASE, title: 'What is Precious Plastic?', description: 'Explain the mission and goals of the Precious Plastic initiative.' },
        { ..._QUESTIONS_BASE, title: 'How does Precious Plastic help fight plastic pollution?', description: 'Describe the ways in which Precious Plastic contributes to reducing plastic waste.' },
        { ..._QUESTIONS_BASE, title: 'What types of machines does Precious Plastic offer?', description: 'List and describe the different machines available for recycling plastic.' },
        { ..._QUESTIONS_BASE, title: 'How can individuals get involved with Precious Plastic?', description: 'Provide information on how people can participate in the Precious Plastic movement.' },
        { ..._QUESTIONS_BASE, title: 'What materials can be processed using Precious Plastic machines?', description: 'Explain which types of plastic can be recycled using Precious Plastic machines.' },
        { ..._QUESTIONS_BASE, title: 'How does the Precious Plastic community collaborate globally?', description: 'Describe the role of the global community in the Precious Plastic movement and how people connect.' },
        { ..._QUESTIONS_BASE, title: 'What products can be made from recycled plastic?', description: "Give examples of items that can be created using Precious Plastic's recycling process." },
        { ..._QUESTIONS_BASE, title: 'How can businesses benefit from Precious Plastic?', description: "Explain how entrepreneurs and small businesses can use Precious Plastic's technology for commercial purposes." },
        { ..._QUESTIONS_BASE, title: 'What are the main challenges of plastic recycling?', description: 'Discuss the biggest obstacles faced in plastic recycling and how Precious Plastic addresses them.' },
        { ..._QUESTIONS_BASE, title: 'Where can I find Precious Plastic workspaces near me?', description: 'Guide users on how to locate Precious Plastic workspaces in their region.' },
      ]
    /* prettier-ignore-end */
  }
  if (profile.username === 'aldaplaskett48') {
    /* prettier-ignore */
    return [
        { ..._QUESTIONS_BASE, title: "How does plastic pollution impact marine life?", description: "Explain the effects of plastic waste on ocean ecosystems and marine animals." },
        { ..._QUESTIONS_BASE, title: "What are microplastics, and why are they a problem?", description: "Describe what microplastics are, how they form, and their environmental and health impacts." },
        { ..._QUESTIONS_BASE, title: "What are some sustainable alternatives to plastic?", description: "List eco-friendly materials that can replace plastic in everyday products." },
        { ..._QUESTIONS_BASE, title: "How does plastic contribute to climate change?", description: "Discuss the relationship between plastic production, fossil fuels, and greenhouse gas emissions." },
        { ..._QUESTIONS_BASE, title: "What policies and regulations exist to reduce plastic waste?", description: "Provide an overview of international laws and local initiatives aimed at limiting plastic pollution." },
      ]
    /* prettier-ignore-end */
  }
  return []
}

const main = async () => {
  const baseClient = await createSeedClient({ dryRun: true })

  await baseClient.$resetDatabase()

  const { categories } = await baseClient.categories(seedCategories())

  // TBD: is another client really necessary? https://snaplet-seed.netlify.app/seed/recipes/relationships#global-connect
  const seed = await createSeedClient({ dryRun: true, connect: { categories } })

  /* prettier-ignore */
  const { profiles } = await seed.profiles([
    { ..._PROFILES_BASE, username: 'jereerickson92', display_name: 'Jere Erickson', country: 'Portugal', about: 'Passionate about creating meaningful connections and exploring new experiences. Whether it\'s traveling to new destinations, trying new foods, or diving into fresh hobbies, I\'m all about embracing the adventure in life. Let\'s chat and share our stories!' },
    { ..._PROFILES_BASE, username: 'aldaplaskett48', display_name: 'Alda Plaskett', country: 'Spain', about: 'Tech enthusiast, avid reader, and coffee lover. I spend my days coding, learning about the latest trends, and finding ways to innovate. Always up for a deep conversation or a good book recommendation. Let\'s connect and exchange ideas!' },
    { ..._PROFILES_BASE, username: 'sampathpini67', display_name: 'Sampath Pini', country: 'France', about: 'Fitness junkie who believes in the power of mental and physical health. When I\'m not in the gym, you can find me hiking, practicing yoga, or experimenting with healthy recipes. Looking for like-minded people who value balance and growth. Let\'s inspire each other!'  },
    { ..._PROFILES_BASE, username: 'galenagiugovaz15', display_name: 'Galena Giugovaz', country: 'Sudan', about: 'Curious traveler with a passion for photography and storytelling. Exploring the world, one city at a time, while capturing moments that tell unique stories. I believe that life is all about experiences and the memories we create. Let\'s share the journey!' },
    { ..._PROFILES_BASE, username: 'veniaminjewell33', display_name: 'Veniamin Jewell', country: 'Tuvalu', about: 'Creative soul with a love for design and innovation. I\'m always experimenting with new ways to bring ideas to life—whether it\'s through art, technology, or writing. Let\'s collaborate and create something beautiful together!' },
    { ..._PROFILES_BASE, username: 'cortneybrown81', display_name: 'Cortney Brown', country: 'Ukraine', about: 'Outgoing and energetic, I\'m always looking for new adventures and opportunities to grow. Whether it\'s trying a new hobby or tackling an exciting project, I\'m up for anything. Join me on my journey, and let\'s make the most out of every moment!' },
    { ..._PROFILES_BASE, username: 'melisavang56', display_name: 'Melisa Vang', country: 'Uruguay', about: 'Music is my life, and I\'m constantly seeking out new sounds and genres to explore. From playing instruments to attending live shows, I live and breathe rhythm. If you\'re passionate about music or just want to chat about the latest trends, let\'s connect!' },
    { ..._PROFILES_BASE, username: 'lianabegam24', display_name: 'Liana Begam', country: 'United States', about: 'Outdoor enthusiast and nature lover who finds peace in hiking, camping, and exploring the great outdoors. When I\'m not soaking up the beauty of nature, you\'ll find me sharing my love for the environment with others. Looking to meet fellow adventurers!' },
    { ..._PROFILES_BASE, username: 'akromstarkova72', display_name: 'Akrom Stárková', country: 'Yemen', about: 'Ambitious and driven, I strive to make the most out of every opportunity. Whether it\'s working on personal projects or helping others achieve their goals, I believe in continuous growth and learning. Let\'s build a community of success together!' },
    { ..._PROFILES_BASE, username: 'mirzoblazkova19', display_name: 'Mirzo Blažková', country: 'Zimbabwe', about: 'Bookworm with a passion for storytelling and deep discussions. I\'m always immersed in a good novel or seeking out new perspectives on life. Looking to connect with fellow book lovers or anyone interested in meaningful conversations. Let\'s dive into the world of words together!' },
  ].map((profile: profilesInputs) => ({
    ...profile,
    // TBD: should this be null?
    firebase_auth_id: ({ seed }) => copycat.uuid(seed),
    tenant_id: ({ seed }) => copycat.uuid(seed),
    useful_votes: (x) => x(3),
    subscribers: (x) => x(3),
  })))
  /* prettier-ignore-end */

  for (const profile of profiles) {
    await seed.questions(seedQuestions(profile), {
      connect: { profiles: [profile] },
    })
    await seed.comments(seedComments(profile), {
      connect: { profiles: [profile] },
    })
  }

  process.exit()
}

main()
