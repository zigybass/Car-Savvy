import axios from "axios";

// Requests to back end

const login = (user) => {

    return axios
      .post("/api/login", user)
  };

export default login;