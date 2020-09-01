import axios from "axios"
const KEY = "AIzaSyDbFC9usQz3cxNLUWPaGWF-Y_cRf_U02O8"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
})