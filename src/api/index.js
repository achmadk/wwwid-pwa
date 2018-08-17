import { create } from 'axios'

const API = create({
  baseURL: 'https://api.rss2json.com/v1'
})

export default API
