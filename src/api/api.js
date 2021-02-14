import * as axios from 'axios'

const apiKey = '431b14bdd798646063dbe3728107af4a'

export const getAdressData =  async () => {
  const response =  await axios.get(`http://api.ipstack.com/check?access_key=${apiKey}`)
  return response.data
}

export const getTemperature = async () => {
  const response = await getAdressData()
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${response.city}&units=metric&appid=056b91ad44e2ed8399949215e7ec5215`)
  .then(resp => {
    return resp.data
  })
}