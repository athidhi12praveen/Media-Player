// Import Axios library

import axios from "axios";

// Define common request function

export const commonRequest= async(method,url,body)=>{

    // api request configuration

    let reqConfig={
        method,
        url,
        data:body,
        headers:{
            "content-type":"application/json"

            // if we are uploading file we use content-type:multipart  or else content-type:application

        }
    }

    // api call using axios
    
    return await axios(reqConfig).then((response)=>{
        return response
    }).catch((err)=>{
        return err
    })
}
