import {Routes, Route} from "react-router-dom";
import {RoutePath} from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login/index";
import Homepage from "pages/Homepage/index";
import User from "pages/User/index";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOMEPAGE} element={<Homepage />} />
      <Route path={RoutePath.USER} element={<User />} />
    </Routes>
  );
};

export default Router;
