import api from "./api";
import {userObj, userLoginObj} from "types/api/User";
import swal from "sweetalert";

const loginService = {
  login: (values: userLoginObj) => {
    api
      .post("/auth", values)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error));
  },
};

const signupService = {
  signupValues: (values: userObj) =>
    api
      .post("/auth", values)
      .then((response: any) => response)
      .then((response: any) => response)
      .catch((error: any) => {
        swal({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          timer: 4000,
        });
      }),
};

export {loginService, signupService};
