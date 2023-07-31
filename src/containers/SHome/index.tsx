import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import MapView, {
  Circle,
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore'

import { RootState, useAppDispatch } from '@/redux/store'
import { Images } from '@/theme'
import { navigate } from '@/navigators/utils'
import { setOrderPending } from '@/redux/user/userSlice'
import { BOOKING_ACCEPT_PENDING } from '@/configs/constants'

const Home = () => {
  const dispatch = useAppDispatch()
  const { width, height } = Dimensions.get('window')
  const mapRef = useRef<MapView>(null)

  const currentUser = useSelector((state: RootState) => state.user.currentUser)
 
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

  useEffect(() => {
    const subscriber = firestore()
      .collection('orders')
      .where('driverId', '==', currentUser.id)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          const orderData = change?.doc?.data()
          // Kiểm tra xem trường "orderStatus" có thay đổi không
          // Kiểm tra xem có thay đổi và có thông tin driverId
          if (change.type === 'added' && orderData.driverId && orderData.orderStatus === BOOKING_ACCEPT_PENDING) {
            dispatch(setOrderPending(true))
            // Hiển thị cửa sổ thông báo (alert)
            navigate('SHaveBooking', {
              orderId: orderData.orderId,
              driverId: orderData.driverId,
              customerAvatar: orderData.avatarCustomer,
              customerName: orderData.customerName,
              totalPrice: orderData.totalPrice,
              fromAddress: orderData.fromAddress,
              toAddress: orderData.toAddress,
            })
            //console.log(123)
          } return;
        })
      })
    // Stop listening for updates when no longer required
    return () => subscriber()
  }, [])

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
