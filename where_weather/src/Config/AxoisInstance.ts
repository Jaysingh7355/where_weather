import axios,{AxiosInstance} from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL:'http://api.weatherapi.com/v1',
    headers:{
        'content-type' : 'application/jsoin'
    }
})

export default instance