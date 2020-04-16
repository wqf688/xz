import axios from "axios";
function getDetails(lid){
  return new Promise(
    function (resolve,reject){
      axios.get("/details",
      {
        params:{lid}
      }
     ).then(result=>{
        resolve(result.data)
     })
    }
  )
}
export {getDetails}