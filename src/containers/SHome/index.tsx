import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import MapView, {
  Circle,
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { Images } from '@/theme'

const Home = () => {
  const { width, height } = Dimensions.get('window')
  const mapRef = useRef<MapView>(null)

  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  console.log(currentUser)

  const ASPECT_RATIO = width / height

  const LATITUDE_DELTA = 0.02

  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

  let INITIAL_POSITION = {
    latitude: 10.824371876108833,
    longitude: 106.69208107191297,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = position
      mapRef.current?.animateCamera(camera, { duration: 1000 })
    }
  }

  useEffect(() => {
    if (currentUser.latitude && currentUser.longitude) {
      moveTo({
        latitude: currentUser.latitude,
        longitude: currentUser.longitude,
      })
    }
  }, [currentUser.latitude, currentUser.longitude, currentUser.currentLocation])

  return (
    <MapView
      ref={mapRef}
      style={{
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').height,
      }}
      provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_POSITION}
      zoomEnabled={true}>
      {currentUser.latitude && currentUser.longitude && (
        <>
          <Circle
            center={{
              latitude: currentUser.latitude,
              longitude: currentUser.longitude,
            }}
            radius={300}
            fillColor="rgba(253,232,186,0.6)"
            strokeWidth={0}
          />
          <Marker
            coordinate={{
              latitude: currentUser.latitude,
              longitude: currentUser.longitude,
            }}
            image={Images.deliveryTruck}
            draggable
          />
        </>
      )}
    </MapView>
  )
}

export default Home
