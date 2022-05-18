import * as axios from 'axios'

const apiAddressKey = '431b14bdd798646063dbe3728107af4a'
const apiWeatherKey = '056b91ad44e2ed8399949215e7ec5215'

export const getAddressData = () => {
  return axios.get(`https://api.ipstack.com/check/?access_key=${apiAddressKey}`).then((response) => {
    console.log(response.data)
    return response.data
  })
}

export const getTemperature = async () => {
  const address = await getAddressData()
  return axios.get(`https://api.openweathermap.org/data/2.5/weather/?q=${address.city}&units=metric&appid=${apiWeatherKey}`)
  .then(response => {
    // console.log(response.data)
    return response.data
  })
}
