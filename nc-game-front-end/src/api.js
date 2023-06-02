import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: `https://nc-games-y62s.onrender.com/api`,
});

export const fetchReviews = () => {
    return ncGamesApi.get('/reviews').then(data => {
        return data.data.reviews
    })
} 


export const fetchSingleReview = ( review_id ) => {

    return ncGamesApi.get(`/reviews/${ review_id }`).then((response) => {
  
      return response.data;
  
    });
  
  };

  export const fetchCommentsById = (review_id) => {

    return ncGamesApi.get(`/reviews/${ review_id }/comments`).then((response) => {

      return response.data.comments
  
    });
  
  };

  export const fetchUsers = () => {

    return ncGamesApi.get(`/users`).then((response) => {
     console.log(response,'data') //need to check 
      return response.data.users
    });
  
  };


  export const patchVotes = (review_id, increment) => {
    const patchBody = {
      inc_votes: increment
    };
    return ncGamesApi.patch(`/reviews/${review_id }`,patchBody).then((response)=>{
     return response.data.updatedReview.votes
    })

  }


