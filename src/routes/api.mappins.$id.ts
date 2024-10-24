import { json } from '@remix-run/node'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestore } from 'src/utils/firebase'
import { DB_ENDPOINTS } from 'src/models/dbEndpoints'

import type { IMapPin } from 'oa-shared'

// runs on the server
export const loader = async ({ params }) => {
  const id = params.id
  const collectionRef = collection(firestore, DB_ENDPOINTS.mappins)
  const userMapPinQuery = query(collectionRef, where('_id', '==', id))

  const queryResults = await getDocs(userMapPinQuery)

  const mapPin: IMapPin | undefined = queryResults.docs[0]?.data() as IMapPin

  if (mapPin) {
    const formattedMapPin = formatMapPinForResponse(mapPin)
    const userProfile = await getUserProfile(id)
    const userData = userProfile || {}

    let heroImageUrl = ''
    if (userData.coverImages && userData.coverImages.length) {
      heroImageUrl = userData.coverImages[0].downloadUrl
    }

    // TODO: Load avatar from user profile
    const avatar = ''
    const detail = {
      heroImageUrl,
      profilePicUrl: avatar,
      shortDescription: userData.mapPinDescription
        ? userData.mapPinDescription
        : '',
      name: userData.userName,
      displayName: userData.displayName,
      profileUrl: `/u/${userData.userName}`,
      verifiedBadge: !!userData.badges?.verified,
      country:
        userData.location?.countryCode ||
        userData.country?.toLowerCase() ||
        null,
    }

    return json({
      mapPin: {
        ...formattedMapPin,
        detail,
      },
    })
  } else {
    return json({ message: 'Not Found' }, { status: 404 })
  }
}

export const action = async () => {
  // create / edit a map-pin
}

function formatMapPinForResponse(data) {
  return {
    ...data,
    _deleted: !!data._deleted,
    type: data.type || data.pinType,
    verified: !!data.verified,
  }
}

// taken from platform-api
async function getUserProfile(userId) {
  const collectionRef1 = collection(firestore, DB_ENDPOINTS.users)
  const usersQuery1 = query(collectionRef1, where('_authId', '==', userId))
  const queryResults1 = await getDocs(usersQuery1)

  if (queryResults1.docs.length === 1) {
    return queryResults1.docs[0].data()
  }

  const collectionRef2 = collection(firestore, DB_ENDPOINTS.users)
  const usersQuery2 = query(collectionRef2, where('_id', '==', userId))
  const queryResults2 = await getDocs(usersQuery2)

  if (queryResults2.docs.length === 1) {
    return queryResults2.docs[0].data()
  }
}
