import axios from "axios"
// baseURL
import {baseURL} from "../config.js"
function getIndex(){
  console.log("index发送了一次请求")
  return new Promise(
    function (resolve,reject){
      axios.get(baseURL+"/index")
      .then(result=>{
        resolve(result.data)
      })
    }
  )
}
export {
  getIndex
}