import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function GitHub(){
    const [data,setData]=useState(0);
    useEffect(()=>{
        fetch('https://api.github.com/users/chowdhuryamit')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);
    return(
      <>
       <div className="text-center m-4 bg-gray-600 text-white p-4">
        Github followers:{data.followers}
        <img src={data.avatar_url} alt="gitPicture"/>
        </div>
      </>
    )
}

export default GitHub;