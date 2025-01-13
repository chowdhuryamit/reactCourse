import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id}=useParams();
    return(
        <div className="text-center bg-zinc-400">user:{id}</div>
    )
}
export default User;