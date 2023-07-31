import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faHeart, faReply, faShareNodes } from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ tuit_stats, onToggleLike }) => {
  return (
    <div className="row">
      <div className="col">
        <FontAwesomeIcon icon={faReply} />
        <span className="ml-1">{tuit_stats.replies}</span>
      </div>
      <div className="col">
        <FontAwesomeIcon icon={faRetweet} />
        <span className="ml-1">{tuit_stats.retuits}</span>
      </div>
      <div className="col">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: tuit_stats.liked ? "#ff2600" : "grey" }}
          onClick={onToggleLike}
        />
        <span className="ml-1">{tuit_stats.likes}</span>
      </div>
      <div className="col">
        <FontAwesomeIcon icon={faShareNodes} />
      </div>
    </div>
  );
};
export default TuitStats;
