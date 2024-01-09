import { faker } from '@faker-js/faker'
import { type IMapPin, IModerationStatus } from 'src/models'
import { ProfileType } from 'src/modules/profile/types'

export const FactoryMapPin = (
  userOverloads: Partial<IMapPin> = {},
): IMapPin => ({
  _id: faker.datatype.uuid(),
  _deleted: faker.datatype.boolean(),
  type: faker.helpers.arrayElement(Object.values(ProfileType)),
  subType: faker.helpers.arrayElement([
    'shredder',
    'sheetpress',
    'extrusion',
    'injection',
    'mix',
  ]),
  verified: faker.datatype.boolean(),
  moderation: faker.helpers.arrayElement([
    IModerationStatus.DRAFT,
    IModerationStatus.AWAITING_MODERATION,
    IModerationStatus.REJECTED,
    IModerationStatus.ACCEPTED,
  ]),
  location: {
    lng: parseFloat(faker.address.longitude()),
    lat: parseFloat(faker.address.latitude()),
  },
  ...userOverloads,
})
