// api/index.js (modified to use proxy)
import axios from "axios";

const url ="/api/index.php"  // This will be proxied to http://localhost/Api/index.php
export const execute=(params)=>{
    return axios.post(url,params);
}