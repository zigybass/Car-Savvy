import requests from "./requests";
import axios from "axios";
// import store from "../redux/store";
// import { USER_LOGGED_IN } from "../redux/reducers/types";

const auth = {

    isAuth: false,

    forceAuth () {
        this.isAuth = true;
    },

    checkAuth () {
        console.log(requests.checkToken());
        if (requests.checkToken()) {
            axios.get("/api/verify", {
              headers: {
                authorization: "Bearer " + requests.checkToken()
              }
            }).then( (response) => {
              console.log(response);
              this.isAuth = true;
            }).catch( err => {
              if (err) {
                  console.log("Line 26: " + err);
                    this.isAuth = false;
              }
            })
          } else {
            console.log("JWT token not verified");
             this.isAuth = false;
          }
    }
};

export default auth;