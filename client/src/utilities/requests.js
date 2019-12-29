import axios from "axios";

// Requests to back end

function requests () {

  function login (user) {
    return axios
      .post("/api/login", user);
  };

  function findAccount (newUser) {
    return axios.post("/api/users", newUser);
  }

  function createAccount (newUser) {
    return axios.post("/api/createAccount")
  }

  return {
    login, findAccount, createAccount
  }

}

export default requests();