import {Routes, Route} from "react-router-dom";
import {RoutePath} from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login/index";
// import User from "pages/User/index";
// import UserCreate from "pages/UserCreate/index";
// import UserEdit from "pages/UserEdit/index";
// import Profiles from "pages/Profiles/index";
// import ProfileCreate from "pages/ProfileCreate/index";
// import ProfileEdit from "pages/ProfileEdit/index";
// import GameCreate from "pages/GameCreate/index";
// import GameEdit from "pages/GameEdit/index";
// import Game from "pages/Game/index";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      {/* <Route path={RoutePath.USER} element={<User />} />
      <Route path={RoutePath.USER_CREATE} element={<UserCreate />} />
      <Route path={RoutePath.USER_EDIT} element={<UserEdit />} />
      <Route path={RoutePath.PROFILES} element={<Profiles />} />
      <Route path={RoutePath.PROFILE_CREATE} element={<ProfileCreate />} />
      <Route path={RoutePath.PROFILE_EDIT} element={<ProfileEdit />} />
      <Route path={RoutePath.GAME} element={<Game />} />
      <Route path={RoutePath.GAME_CREATE} element={<GameCreate />} />
      <Route path={RoutePath.GAME_EDIT} element={<GameEdit />} /> */}
    </Routes>
  );
};

export default Router;
