import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json'; 

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "../images/NASA_logo.png",
};
   
const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}   

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },
  reducers: {
      deleteTuit(state, action) {
          const index = state.tuits
            .findIndex(tuit =>
                tuit._id === action.payload);
          state.tuits.splice(index, 1);
        },
    
      createTuit(state, action) {
        state.tuits.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
      },
      likeTuit(state, action) {
        const tuitId = action.payload;
        const tuit = state.tuits.find(tuit => tuit._id === tuitId);
  
        if (tuit) {
          if (tuit.liked) {
            // Decrease like count if already liked
            tuit.likes -= 1; 
          } 
          else {
            // Increase like count if not liked
            tuit.likes += 1; 
          }
  
          // Toggle the liked status
          tuit.liked = !tuit.liked; 
        }
      }
  }
});



export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;
