import axios from "axios";

// Requests to back end and managing access tokens
function requests () {

  function login (user) {
    return axios
      .post("/api/login", user);
  };

  function logout () {
    return localStorage.removeItem("token");
  };

  function createAccount (newUser) {
    return axios.post("/api/users", newUser);
  };

  function checkToken () {
    return localStorage.getItem("token");
  };

  return {
    login, createAccount, logout, checkToken
  };
};

export default requests();