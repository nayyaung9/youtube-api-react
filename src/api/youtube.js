import axios from 'axios'

const KEY = 'AIzaSyCOD9OT15xKvKhVOqDtBHZpyhVyQWthIFU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
})

