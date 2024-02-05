import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e18a1911bbab4514a43e855fca04d7c1'
    }
})
