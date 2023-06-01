import React, { useState } from "react";
import Followers from "./followers";
import Following from "./following";
import Repos from "./repos";
function Dashboard(){

    var [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")))
    return(

        <>
        <div>
        <h2 className="h2 text-center">GIT_HIB</h2>
            
            <div className="row display-flex">
                <div className="col-sm-12 col-md-6 text-right" style={{width:"100px"}}>
                    
                    <img style={{height:"140px",borderRadius:"100%"}} src={data.avatar_url}></img>
                    <h4 className="h4">{data.login}</h4>
                </div>
                
                <div className="col-sm-12 col-md-6 text-left">
                    <h3>Name : {data.name}</h3>
                    
                    <h6>id : {data.id}</h6>
                    <h6>joined on : {(data.created_at).toString().split("T")[0]}</h6>
                    <h6> <a href = {data.html_url}>profile</a> </h6>
                    <Repos count = {data.public_repos} link = {data.repos_url}/>
                    <Followers followers = {data.followers} />
                    <Following following = {data.following} />
                    
                </div>

            </div>
          </div>
        
        </>
    )
}

export default Dashboard