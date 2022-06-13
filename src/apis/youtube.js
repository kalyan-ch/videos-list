
import axios from "axios";

const API_KEY = 'AIzaSyC6jO-a4Z7Ir8QIw8sgLwA7-Q4f9Qipo2I';
const API_URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: API_URL, 
    params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: API_KEY
    }
});
