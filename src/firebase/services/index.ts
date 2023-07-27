import firestore from '@react-native-firebase/firestore'

export const updateOrderStatus_F = async (
  orderId: string,
  orderStatus: string,
) => {
  try {
    // Truy vấn dữ liệu đơn hàng với điều kiện 'orderId' tương ứng
    const querySnapshot = await firestore()
      .collection('orders')
      .where('orderId', '==', orderId)
      .get()
    // Kiểm tra xem có đơn hàng thỏa mãn điều kiện hay không
    if (querySnapshot.size === 0) {
      console.log('Không tìm thấy đơn hàng với orderId tương ứng.')
      return
    }
    // Lấy reference của đơn hàng thỏa mãn điều kiện
    const orderRef = querySnapshot.docs[0].ref
    // Cập nhật trạng thái mới của đơn hàng vào Firestore
    await orderRef.update({ orderStatus: orderStatus })
    console.log('Cập nhật trạng thái đơn hàng thành công!')
  } catch (error) {
    console.error('Lỗi khi cập nhật trạng thái đơn hàng:', error)
  }
}


