import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faHeart, faReply, faShareNodes, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStats = ({
    tuit =   { 
      "_id": 123,  
      "topic": "Space", 
      "userName": "SpaceX",
      "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "time": "2h",   
      "image": "../images/spacex-black.jpeg",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 12345,
      "handle": "@spacex",
      "tuit": "This morning at 12:34 EST Earth time. a convoy of Tesla CyberTrucks drove across the Martian landscape after picking up the Curiosity, Sojourner, Spirit, and Perseverance on their 6' beds"
    },
}) => {

  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col">
        <FontAwesomeIcon icon={faReply} />
        <span className="ml-1"> {tuit.replies}</span>
      </div>
      <div className="col">
        <FontAwesomeIcon icon={faRetweet} />
        <span className="ml-1"> {tuit.retuits}</span>
      </div>
      <div className="col">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: tuit.liked ? "#ff2600" : "grey" }}
          onClick={() => {
            const newLikesCount = tuit.liked ? tuit.likes - 1 : tuit.likes + 1;
            dispatch(updateTuitThunk({...tuit, liked: !tuit.liked, likes: newLikesCount,}));
          }}
        />
        <span className="ml-1"> {tuit.likes}</span>
      </div>
      <div className="col">
        <FontAwesomeIcon
          icon={faThumbsDown}
          style={{ color: tuit.disliked ? "#ff2600" : "grey" }}
          onClick={() => {
            const newDislikesCount = tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1;
            dispatch(updateTuitThunk({...tuit, disliked: !tuit.disliked, dislikes: newDislikesCount,}));
          }}
        />
        <span className="ml-1"> {tuit.dislikes}</span>
      </div>
      <div className="col">
        <FontAwesomeIcon icon={faShareNodes} />
      </div>
    </div>
  );
};

export default TuitStats;
