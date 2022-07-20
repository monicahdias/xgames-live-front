import api from "./api";
import {genreObj} from "types/api/Genres";
import {gameDescObj} from "types/api/Game";
import {profileObj} from "types/api/Profile";
import {userObj} from "types/api/User";

const createService = {
  createGame: (values: gameDescObj) =>
    api
      .post("/game", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
  createGenre: (values: genreObj) =>
    api
      .post("/genre", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
  createProfile: (values: profileObj) =>
    api
      .post("/profile", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
  createUser: (values: userObj) =>
    api
      .post("/user", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
};

export {createService};
