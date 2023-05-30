import React, { useState } from "react";
import Followers from "./followers";
import Following from "./following";
import Repos from "./repos";
function Dashboard(){

    // function run(){
        
        fetch("https://api.github.com/users/jayashreebalinani")
        .then(response => response.json())
        .then((data)=>{
            sessionStorage.setItem("data", JSON.stringify(data))
        })

    // }

    var data = JSON.parse(sessionStorage.getItem("data"))
    sessionStorage.setItem("user_name",data.login)
    console.log(data.following_url)
    return(

        <>
        <div>

            <h2 className="h2">GIT_HIB</h2>
            <h4 className="h4">user_name : { data.login}</h4>
            <h6>joined on : {(data.created_at).toString().split("T")[0]} </h6>
            <h6> <a href = {data.html_url}>profile</a> </h6>
            <Followers followers = {data.followers} />
            <Following following = {data.following} />
            <Repos count = {data.public_repos} link = {data.repos_url}/>
            <button className="btn btn-success">fetch</button>
            
          </div>  
        </>
    )
}

export default Dashboard