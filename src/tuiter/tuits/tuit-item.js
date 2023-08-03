import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../services/tuits-thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import "./style.css"; 

const TuitItem = (
  {
    tuit = {"_id": 123, "topic": "Space", "userName": "SpaceX",
    "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "2h",   "image": "../images/spacex-black.jpeg",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 12345,
    "handle": "@spacex",
    "tuit": "This morning at 12:34 EST Earth time. a convoy of Tesla CyberTrucks drove across the Martian landscape after picking up the Curiosity, Sojourner, Spirit, and Perseverance on their 6' beds"
   }
  }
 ) => {
 
   const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuitThunk(id));
 }

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
          <strong>{tuit.userName} </strong> 
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#005eff",}} />
          <span className="text-secondary"> {tuit.handle} <i className="bi bi-dot wd-period"></i> {tuit.time} </span>
          <i 
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
        </div>

          <div>{tuit.tuit}</div>
          <br />
          <div><TuitStats tuit={tuit} key={tuit._id} /></div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;