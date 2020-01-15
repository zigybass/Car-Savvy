import requests from "./requests";
import axios from "axios";
// import store from "../redux/store";
// import { USER_LOGGED_IN } from "../redux/reducers/types";

const auth = {

    isAuth: false,

    forceAuth () {
        this.isAuth = true;
    },

    verifyAuth: async function()  {
        return axios.get("/api/verify", {
            headers: {
                authorization: "Bearer " + requests.checkToken()
            }
        }).then(() => {
            console.log("Axios finished");
            return true;
            // return this.isAuth = true;
        }).catch( err => {
            console.log(err);
            return false;
            // return this.isAuth = false;
        });
        // return this.isAuth;
    },
};

export default auth;