import api from "./api";

const findAllService = {
  allGames: () =>
    api
      .get("/game")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
  allGenres: () =>
    api
      .get("/genre")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
  allProfiles: () =>
    api
      .get("/profile")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
};

const findOneService = {
  findUser: () =>
    api
      .get("/user")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
};

const findByIdService = {
  findProfileById: (id: string) =>
    api
      .get(`/profile/${id}`)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
  findGameById: (id: string) =>
    api
      .get(`/game/${id}`)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
  findUserById: (id: string) =>
    api
      .get(`/user/${id}`)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),

  findHomeProfileById: (id: string) =>
    api
      .get(`/homepage/${id}`)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
};

export {findAllService, findOneService, findByIdService};
