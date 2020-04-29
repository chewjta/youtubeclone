import axios from 'axios';



const KEY ='AIzaSyBzJD1CHrAUVILbVHXa_37NPfUPhDFfJOY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
})