import api from "./api";
import {userObj, userLoginObj} from "types/api/User";
import swal from "sweetalert";

const loginService = {
  login: (values: userLoginObj) =>
    api
      .post("/auth", values)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
};

const registerService = {
  registerValues: (values: userObj) =>
    api
      .post("/user/create", values)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};

const userLoggedService = {
  userLogged: () =>
    api
      .get("/user/findById")
      .then((response: any) => response)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};

export {loginService, registerService, userLoggedService};
