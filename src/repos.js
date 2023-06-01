import React, { useState } from "react";

function Repos(repos){
    var [loading, setLoading] = useState(false)
    var [data, setData] = useState("")

    fetch(repos.link)
    .then(response => response.json())
    .then((data)=> {
        setData(data)
        sessionStorage.setItem("reposData", JSON.stringify(data))
        setLoading(true)
    })

    function fetchRepos(){

        var dropdownMenu = document.querySelector("#dropdown1");
        dropdownMenu.classList.toggle("show");
        
    }

    return(
        <>
        <div className="dropdown float-left">

        <button className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" onClick={fetchRepos}> Repos {repos.count}</button>
        {loading && 
        
        <div className="dropdown-menu" id="dropdown1" aria-labelledby="dropdownMenuButton" style={{height:"500px",overflow:"scroll"}}>
            {data.map((i)=>
                <>
                <div>
                <a className="dropdown-item" href={"https://"+i.owner.login+".github.io/"+i.name}>{i.name}</a>
                <span>{i.branch}</span>
                </div>
                
                </>
            )}
        </div>
        }
        </div>
        </>

    )
    
}

export default Repos