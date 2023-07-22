export const convertMeterToKilometer = (meter:number) => {
    return parseFloat((meter / 1000).toFixed(1));
}

export const formatCurrency = (number: number) => {
    const formatter = new Intl.NumberFormat('vi-VN',{
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
    return formatter.format(number);
}