import React, { useState } from "react";

function Repos(repos){
    var [loading, setLoading] = useState(false)
    var [data, setData] = useState("")
    async function run(){
        try{
        
            await fetch(repos.link)
            .then(response => response.json())
            .then((data)=> {
                setData(data)
                sessionStorage.setItem("reposData", JSON.stringify(data))
                setLoading(true)
            })
        }catch(error){}
    }
    
    run()

    function showRepos(){
        if(loading){
            var dropdownMenu = document.querySelector("#dropdown1");
            dropdownMenu.classList.toggle("show");
        }


        
    }

    return(
        <>
        <div className="dropdown">

        <button className="btn w-100 dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" onClick={showRepos}> Reposetries {repos.count}</button>
        {loading && 
        
        <div className="dropdown-menu bg-dark" id="dropdown1" aria-labelledby="dropdownMenuButton" style={{height:"500px",overflow:"scroll", border:"none"}}>
            {data.map((i)=>
                <>
                <div>
                <a className="dropdown-item text-light" href={"https://"+i.owner.login+".github.io/"+i.name }>{i.name}</a>
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