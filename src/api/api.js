import axios from 'axios'



const BASE_URL = 'https://videoapp-96cd4-default-rtdb.firebaseio.com/'

const instance = axios.create({ baseURL: BASE_URL });
export default instance

