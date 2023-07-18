import { Images, Layout } from '@/theme'
import React, { useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import Intro from './components/Intro'
import styles from './styles/SIntroStyle'
import { Button } from '@/components'
import { navigate } from '@/navigators/utils'

type CarouselItemType = {
  imgLink: any
  title: string
  content: string
}

const screenSizeWidth = Dimensions.get('window').width

const SIntro = () => {
  const [, setCurrentPage] = useState(1)

  const images: Array<CarouselItemType> = [
    {
      imgLink: Images.intro1,
      title: 'Giao hàng nhanh chóng',
      content:
        'Hãy để chúng tôi mang đến cho bạn trải nghiệm giao hàng nhanh chóng nhất!',
    },
    {
      imgLink: Images.intro2,
      title: 'Giao hàng tận nơi',
      content:
        'Không cần lo lắng về việc nhận hàng, chúng tôi sẽ đến tận nơi mang đến sự tiện lợi cho bạn!',
    },
    {
      imgLink: Images.intro3,
      title: 'Giao hàng mọi nơi',
      content:
        'Chinh phục mọi khoảng cách - Giao hàng đến mọi ngõ ngách, không giới hạn!',
    },
  ]

  const _renderItem = ({ item }: { item: CarouselItemType; index: number }) => {
    return (
      <Intro imgLink={item.imgLink} title={item.title} content={item.content} />
    )
  }
  return (
    <View style={[Layout.full]}>
      <Text style={styles.txtHeader}>Ping_Super</Text>
      <View style={styles.viewIntro}>
        <Carousel
          data={images}
          renderItem={_renderItem}
          loop
          width={screenSizeWidth}
          //height={width / 2}
          autoPlay={true}
          autoPlayInterval={2000}
          enableSnap={true}
          autoPlayReverse
          onSnapToItem={(slideIndex: number) => {
            setCurrentPage(slideIndex)
          }}
          style={{
            flex: 0,
            width: '100%',
            justifyContent: 'center',
          }}
        />
      </View>
      <View style={styles.viewBtnGroup}>
        <Button title='Đăng nhập' onPress={() => navigate('SLogin')}/>
      </View>
      {/* <Languages/> */}
    </View>
  )
}

export default SIntro
