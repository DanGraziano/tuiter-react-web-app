import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home/home-screen"
import ExploreScreen from "./explore-screen"
import BookmarksScreen from "./bookmarks-screen"
import ProfileScreen from "./profile-screen"
import WhoToFollowList from "./who-to-follow-list";
import NotificationsScreen from "./notifications-screen";
import MessagesScreen from "./messages-screen";
import ListsScreen from "./lists-screen";
import MoreScreen from "./more-screen";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";


const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
 return(
  <Provider store={store}>
  <div>
     <Nav/>
     <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
     <NavigationSidebar active="home" />
     </div>
      <div
        className="col-10 col-md-10 col-lg-7 col-xl-6"
        style={{ position: "relative" }}>
          <Routes>
            <Route path="/" element={<HomeScreen />} /> {/* Set the default path to /home */}
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/notifications" element={<NotificationsScreen />} />
            <Route path="/messages" element={<MessagesScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/lists" element={<ListsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/more" element={<MoreScreen />} />
          </Routes>
       </div>
       <div className="col-3">
        <WhoToFollowList/>
        
        {/*
        <WhoToFollowListItem />
        <WhoToFollowListItem who={{
          userName: "Tesla",
          handle: "tesla",
          avatarIcon: "tesla.png" }} />
        <WhoToFollowListItem who={{
          userName: "SpaceX",
          handle: "spacex",
          avatarIcon: "spacex.png", }} />
          */}
       </div>
     </div>
   </div>
   </Provider>
 )
}

export default Tuiter