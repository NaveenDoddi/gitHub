import React from "react";

function Login(){
    
    async function run(){

        sessionStorage.setItem("username", document.getElementById("username").value)
        var username = sessionStorage.getItem("username")

        try{
            await fetch("https://api.github.com/users/"+username)
            .then(response => response.json())
            .then((data)=>{
                if(data.message === undefined){
                    sessionStorage.setItem("data", JSON.stringify(data))

                    if (window.confirm("remember the username")) {
                        localStorage.setItem("data",JSON.stringify(data))
                    } else {
                        sessionStorage.setItem("data",JSON.stringify(data))
                    }

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
        <div className="text-center text-light bg-dark" style={{padding:"20px",border:"2px solid",margin:"5px"}}>
        <h2>GIT_HBU</h2>
        <p>you need github account to use this website</p>
        <p>enter your github_id in the given box</p>
        <div className="btn-group">
            <input id="username"/>
            <button className="btn btn-info btn-sm" onClick={run}>show</button>
        </div>
        
        </div>

        </>
    )
}

export default Login