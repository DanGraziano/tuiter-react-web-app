import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TuitStats from "./tuit-stats";
import { deleteTuit, likeTuit } from "../reducers/tuits-reducer";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  // State to keep track of the liked status
  const [liked, setLiked] = useState(tuit.liked);

  // Toggles like/unlike icon  
  const toggleLikeHandler = () => {
    dispatch(likeTuit(tuit._id));
    setLiked(!liked);
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img
            width={50}
            className="float-end rounded-circle"
            src={`${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
          </div>
          <div>{tuit.tuit}</div>
          <br />
          <div>
            <TuitStats
              tuit_stats={{
                liked: tuit.liked,
                replies: tuit.replies,
                retuits: tuit.retuits,
                likes: tuit.likes,
              }}
              // Pass the toggleLikeHandler as a prop
              onToggleLike={toggleLikeHandler}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
