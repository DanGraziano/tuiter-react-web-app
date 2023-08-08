import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home/home-screen"
import ExploreScreen from "./explore-screen"
import BookmarksScreen from "./bookmarks-screen"
import WhoToFollowList from "./who-to-follow-list";
import NotificationsScreen from "./notifications-screen";
import MessagesScreen from "./messages-screen";
import ListsScreen from "./lists-screen";
import MoreScreen from "./more-screen";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileScreen from "./profile/profile-screen"
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";


const store = configureStore({
  reducer: {who: whoReducer,  tuits: tuitsReducer, user: authReducer}});

function Tuiter() {
 return(
  <Provider store={store}>
  <div>
     <Nav/>
     <div className="row mt-2">
     <div className="col-2 col-lg-2 col-xl-2 col-xxl-2 col-sm-2">
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
            <Route path="/more" element={<MoreScreen />} />
            <Route path="/login" element={<LoginScreen    />} />
           <Route path="/register" element={<RegisterScreen />} />
           <Route path="/profile" element={<ProfileScreen/>} />


          </Routes>
       </div>
       <div className="col-lg-3 col-xl-3 col-xxl-3 ps-3 d-none d-lg-block">
        <WhoToFollowList/>
       </div>
     </div>
   </div>
   </Provider>
 )
}

export default Tuiter