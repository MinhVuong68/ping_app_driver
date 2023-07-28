export const convertMeterToKilometer = (meter: number) => {
  return parseFloat((meter / 1000).toFixed(1))
}

export const formatCurrency = (number: number) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  return formatter.format(number)
}


export const formatDate = (date: string) => {
  const dateObject = new Date(date)

  const day = dateObject.getDate() // Lấy ngày (1-31)

  let month: string | number = dateObject.getMonth() + 1 // Lấy tháng (0-11, nên cộng thêm 1)
  if (month < 10) month = '0' + month
  const year = dateObject.getFullYear()
  return `${day}-${month}-${year}`
}

export const formatTime = (date: string) => {
  const dateObject = new Date(date)

  const hours = dateObject.getHours() // Lấy giờ (0-23)
  const minutes = dateObject.getMinutes() // Lấy phút (0-59)
  const seconds = dateObject.getSeconds() // Lấy giây (0-59)
  return `${hours}:${minutes}:${seconds}`
}
