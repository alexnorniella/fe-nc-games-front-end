import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: `https://nc-games-y62s.onrender.com/api`,
});

export const fetchReviews = () => {
    return ncGamesApi.get('/reviews').then(data => {
        return data.data.reviews
    })
} 
