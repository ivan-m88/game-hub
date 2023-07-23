import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bda0ac62b8344fdb99d8e62bbb0dc899'
    }
})