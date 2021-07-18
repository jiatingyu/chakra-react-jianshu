import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const { response } = error
    if (response.status === 422) {
      throw new Error(JSON.stringify(response.data))
    }
    // console.dir(error)
  }
)

export default request
