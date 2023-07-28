export const serialize = (params: { [x: string]: any }) => {
    let result = ''
    for (let key in params) {
      result += `${key}=${params[key]}&`
    }
    return `?${result}`
  }