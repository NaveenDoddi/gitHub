import React, { useState } from "react";

function Repos(repos){
    var [loading, setLoading] = useState(false)
    var [data, setData] = useState("")

    function fetchRepos(){
        
        fetch(repos.link)
        .then(response => response.json())
        .then((data)=> {
            setData(data)
            sessionStorage.setItem("reposData", JSON.stringify(data))
            setLoading(true)
        })
        
        var dropdownMenu = document.querySelector("#dropdown1");
        dropdownMenu.classList.toggle("show");
        
    }

    return(
        <>
        <div className="dropdown float-left">

        <button className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" onClick={fetchRepos}> Repos {repos.count}</button>
        {loading && 
        
        <div className="dropdown-menu" id="dropdown1" aria-labelledby="dropdownMenuButton">
            {data.map((i)=> 
                <a className="dropdown-item" href={"https://"+i.owner.login+".github.io/"+i.name}>{i.name}</a>
            )}
        </div>
        }
        </div>
        </>

    )
    
}

export default Repos