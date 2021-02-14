import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://api.ipstack.com/'
})

const apiKey = '431b14bdd798646063dbe3728107af4a'

export const getIp = () => {
  return instance.get(`check?access_key=${apiKey}`)
  .then(response => {
      return response.data
  })
}

export const getAdressData =  async () => {
  const response =  await axios.get(`http://api.ipstack.com/check?access_key=${apiKey}`)
  return response.data
}

export const getTemperature = async () => {
  const response = await getAdressData()
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${response.city}&appid=056b91ad44e2ed8399949215e7ec5215`)
  .then(resp => {
    return resp.data
  })
}