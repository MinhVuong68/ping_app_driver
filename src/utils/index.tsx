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
  let day: string | number = dateObject.getDate() // Lấy ngày (1-31)
  if (day < 10) day = '0' + day
  let month: string | number = dateObject.getMonth() + 1 // Lấy tháng (0-11, nên cộng thêm 1)
  if (month < 10) month = '0' + month
  const year = dateObject.getFullYear()
  return `${day}-${month}-${year}`
}

export const formatTime = (date: string) => {
  const dateObject = new Date(date)
  let hours: number | string = dateObject.getHours() // Lấy giờ (0-23)
  if (hours < 10) hours = '0' + hours
  let minutes: number | string = dateObject.getMinutes() // Lấy phút (0-59)
  if (minutes < 10) minutes = '0' + minutes
  let seconds: number | string = dateObject.getSeconds() // Lấy giây (0-59)
  if (seconds < 10) seconds = '0' + seconds
  return `${hours}:${minutes}:${seconds}`
}
