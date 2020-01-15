import requests from "./requests";
import axios from "axios";
// import store from "../redux/store";
// import { USER_LOGGED_IN } from "../redux/reducers/types";

const auth = {

    isAuth: false,

    forceAuth () {
        this.isAuth = true;
    },

    verifyAuth: function()  {
        console.log(requests.checkToken());
        axios.get("/api/verify", {
            headers: {
                authorization: "Bearer " + requests.checkToken()
            }
        }).then( response => {
            console.log(response);
            this.isAuth = true;
        }).catch( err => {
            console.log(err);
            this.isAuth = false;
        })
        return this.isAuth;
    },
};

export default auth;