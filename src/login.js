import React from "react";
import Search from "./searchbtn";

function Login(){

    return(
        <>
        
        <div className="text-center text-light bg-dark" style={{padding:"20px",border:"2px solid",margin:"5px"}}>
        <h2>GIT_HBU</h2>
        <p>you need github account to use this website</p>
        <p>enter your github_id in the given box</p>
        <Search />
        </div>

        </>
    )
}

export default Login
