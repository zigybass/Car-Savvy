import requests from "./requests";
import axios from "axios";
import store from "../redux/store";
import { VERIFY_DATA } from "../redux/reducers/types";

const auth = {

    isAuth: false,

    forceAuth () {
        this.isAuth = true;
    },

      verifyAuth () {
        return axios.get("/api/verify", {
            headers: {
                authorization: "Bearer " + requests.checkToken()
            }
        }).then((response) => {
            console.log(response);
            // this.isAuth = true;
            store.dispatch({
                type: VERIFY_DATA,
                action: true
            })
            return true;
            // return this.isAuth = true;
        }).catch( err => {
            console.log(err);
            // this.isAuth = false;
            store.dispatch({
                type: VERIFY_DATA,
                action: false
            })
            return false;
            // return this.isAuth = false;
        });
    }
};

export default auth;