import axios from "axios";

// Requests to back end

function requests () {

  function login (user) {
    return axios
      .post("/api/login", user);
  };

  function createAccount (newUser) {
    return axios.post("/api/users", newUser);
  }

  // function createAccount (newUser) {
  //   return axios.post("/api/createAccount", newUser)
  // }

  return {
    login, createAccount
  }

}

export default requests();