import requests from "./requests";
import axios from "axios";
// import store from "../redux/store";
// import { USER_LOGGED_IN } from "../redux/reducers/types";

const auth = {

    isAuth: false,

    forceAuth () {
        this.isAuth = true;
    },

    verifyAuth: () => {
        console.log(requests.checkToken());
        axios.get("/api/verify", {
            headers: {
                authorization: "Bearer " + requests.checkToken()
            }
        }).then( response => {
            console.log(response)
        }).catch( err => {
            console.log(err);
        })
    },

    // checkAuth: () => {
    //     this.verifyAuth;
    // }
};

export default auth;