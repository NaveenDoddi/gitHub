import React from "react";

function Login(){
    
    function run(){
        var username = document.getElementById("username").value
        
        fetch("https://api.github.com/users/"+username)
        .then(response => response.json())
        .then((data)=>{
            if(data.message == undefined){
                sessionStorage.setItem("data", JSON.stringify(data))
                console.log(data.message)
                sessionStorage.setItem("user_name",data.login)
                window.location.pathname = "/dashboard"
            }else{
                // window.location.pathname = "/error"
                window.location.href = "/error"
            }

        })
        
    }

    return(
        <>
        <h2>GIT_HIB</h2>
        <p>you need github account to use this website</p>
        <p>enter your github id in the given box</p>
        <input id="username"/>
        <button className="btn" onClick={run}>check</button>
        </>
    )
}

export default Login