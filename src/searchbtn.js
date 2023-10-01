import React from "react";
import { useState } from "react";

function Search(){
    
    var [loading, setLoading] = useState("hidden")
    
    async function run(){
        setLoading("visible")

        sessionStorage.setItem("username", document.getElementById("username").value)
        var username = sessionStorage.getItem("username")

        try{
            await fetch("https://api.github.com/users/"+username)
            .then(response => response.json())
            .then((data)=>{
                if(data.message === undefined){
                    sessionStorage.setItem("data", JSON.stringify(data))

                    sessionStorage.setItem("username",data.login)
                    window.location.pathname = "/dashboard"
                }else{
                    window.location.pathname = "/error"
                }

            })
        }catch(error){
            var data = localStorage.getItem("data")
            if(data){
                sessionStorage.setItem("data",data)
                if(sessionStorage.getItem("data")){
                    window.location.pathname = "/dashboard"
                }
            }
            
        }
    }

    return(
        <>

        <div className="btn-group">
            <input id="username"/>
            <button className="btn btn-info btn-sm" onClick={run}>show</button>
        </div>
        <div>
            <img src="loading.gif" style={{visibility: loading, borderRadius:"50px"}}></img>
        </div>

        </>
    )
}

export default Search