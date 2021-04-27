import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: "AIzaSyBOOUgMQwDvNRpKQhOzpwBsoqG4TcBacY4",
        part: "snippet",
        type: "video"
    }
});

export default instance;

