import React, { useRef, useEffect, useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { Header } from '@/components'
import { Layout } from '@/theme'
import { RootState } from '@/redux/store'

const SRoad = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const { width, height } = Dimensions.get('window')

  const ASPECT_RATIO = width / height

  const LATITUDE_DELTA = 0.02

  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

  let INITIAL_POSITION = {
    latitude: 10.824371876108833,
    longitude: 106.69208107191297,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }

  const edgePaddingValue = 70

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  }

  const moveTo = async (position: { latitude: number; longitude: number }) => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = position
      mapRef.current?.animateCamera(camera, { duration: 1000 })
    }
  }

  const mapRef = useRef<MapView>(null)
  const [origin, setOrigin] = useState<LatLng | null>()
  const [destination, setDestination] = useState<LatLng | null>()

  useEffect(() => {
    if (currentUser.latitude && currentUser.longitude) {
      setOrigin({
        latitude: currentUser.latitude,
        longitude: currentUser.longitude,
      })
      setDestination({
        latitude: 10.598267482869568,
        longitude: 106.6599029693129,
      })
      if (origin && destination) {
        mapRef.current?.fitToCoordinates([origin, destination], { edgePadding })
      }
    }
  }, [])

  return (
    <View style={Layout.full}>
      <Header title="Chỉ đường" />

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
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {/* {origin && destination && (
          <MapViewDirections    
            origin={origin}
            destination={destination}
            apikey='AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8'
            strokeColor="#6644ff"
            strokeWidth={4}
          />
        )} */}
      </MapView>
    </View>
  )
}

export default SRoad
