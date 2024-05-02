import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { useCommonStores } from 'src/common/hooks/useCommonStores'
import { filterMapPinsByType } from 'src/stores/Maps/filter'
import { MAP_GROUPINGS } from 'src/stores/Maps/maps.groupings'
import { Box } from 'theme-ui'

import { logger } from '../../logger'
import { transformAvailableFiltersToGroups } from './Content/Controls/transformAvailableFiltersToGroups'
import { GetLocation } from './utils/geolocation'
import { Controls, MapView } from './Content'
import { mapPinService } from './map.service'

import type { Map } from 'react-leaflet'
import type { ILatLng, IMapPin } from 'src/models/maps.models'

import './styles.css'

const initialState = {
  center: { lat: 51.0, lng: 19.0 },
  zoom: 3,
  firstLoad: true,
}

const MapsPage = observer(() => {
  const mapRef = React.useRef<Map>(null)
  const location = useLocation()
  const [mapPins, setMapPins] = useState<IMapPin[]>([])
  const [selectedPin, setSelectedPin] = useState<IMapPin | null>(null)
  const { userStore } = useCommonStores().stores
  const [activePinFilters, setActivePinFilters] = useState<string[]>([])
  const user = userStore.activeUser
  const navigate = useNavigate()

  const [state, setState] = useState<{
    center: ILatLng
    zoom: number
    firstLoad: boolean
  }>(initialState)

  const fetchMapPins = async () => {
    const pins = await mapPinService.getMapPins()
    setMapPins(pins)
  }

  const appendLoggedInUser = async (userName: string, isLoggedIn: boolean) => {
    const userMapPin = await mapPinService.getMapPinByUserId(
      userName,
      isLoggedIn,
    )

    if (userMapPin && !mapPins.find((pin) => pin._id === userMapPin._id)) {
      setMapPins([...mapPins, userMapPin])
    }
  }

  useEffect(() => {
    if (user?._id) {
      appendLoggedInUser(user?._id, !!user?._id)
    }
  }, [user])

  useEffect(() => {
    fetchMapPins()

    const showPin = async () => {
      await showPinFromURL()

      if (!selectedPin) {
        promptUserLocation()
      }
    }
    showPin()

    return () => {
      setSelectedPin(null)
    }
  }, [])

  const availableFilters = useMemo(() => {
    return transformAvailableFiltersToGroups(mapPins, [
      {
        grouping: 'verified-filter',
        displayName: 'Verified',
        type: 'verified',
      },
      ...MAP_GROUPINGS,
    ])
  }, [mapPins])

  const promptUserLocation = async () => {
    try {
      const position = await GetLocation()
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    } catch (error) {
      logger.error(error)
      // do nothing if location cannot be retrieved
    }
  }

  const setCenter = (latlng: ILatLng) => {
    setState((state) => ({
      ...state,
      center: latlng,
      zoom: 8,
      firstLoad: false,
    }))
  }

  /**
   * Check current hash in case matches a mappin and try to load
   *
   **/
  const showPinFromURL = async () => {
    const pinId = location.hash.slice(1)
    if (pinId) {
      await getPinByUserId(pinId)
    }
  }

  const getPinByUserId = async (userId: string) => {
    navigate(`/map#${userId}`)

    // First check the mapPins to see if the pin is already
    // partially loaded
    const preLoadedPin = mapPins.find((pin) => pin._id === userId)
    if (preLoadedPin) {
      setCenter(preLoadedPin.location)
      setSelectedPin(preLoadedPin)
    }

    const pin = await mapPinService.getMapPinByUserId(userId, !!user?._id)
    if (pin) {
      setCenter(pin.location)
      setSelectedPin(pin)
    }
  }

  return (
    // the calculation for the height is kind of hacky for now, will set properly on final mockups
    <Box id="mapPage" sx={{ height: 'calc(100vh - 80px)', width: '100%' }}>
      <Controls
        availableFilters={availableFilters()}
        onLocationChange={(latlng) => setCenter(latlng)}
        onFilterChange={(selected) => {
          setActivePinFilters(selected)
        }}
      />
      <MapView
        activePin={selectedPin}
        mapRef={mapRef}
        pins={filterMapPinsByType(mapPins, activePinFilters)}
        onPinClicked={(pin) => {
          getPinByUserId(pin._id)
        }}
        onBlur={() => {
          navigate('/map')
          setSelectedPin(null)
        }}
        center={state.center}
        zoom={state.zoom}
      />
    </Box>
  )
})

export default MapsPage
