import { click } from "@testing-library/user-event/dist/click";
import React,{useState} from "react";

function Followers(props){
    var [loading, setLoading] = useState(false)
    var [data, setData] = useState("")

    function fetchFollowers(){
        var user = sessionStorage.getItem("user_name")

        fetch("https://api.github.com/users/"+user+"/followers")
        .then(response => response.json())
        .then((data)=> {
            setData(data)
            sessionStorage.setItem("followers", JSON.stringify(data))
            setLoading(true)
        })
        
        var dropdownMenu = document.querySelector("#dropdown3");
        dropdownMenu.classList.toggle("show");
        
    }
    function run(click){
        sessionStorage.setItem("user_name",click)
        window.location.reload()
    }

    return(
        
        <>
        <div className="dropdown float-left">

        <button className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" onClick={fetchFollowers}> followers {props.followers}</button>
        {loading && 
        
        <div className="dropdown-menu" id="dropdown3" aria-labelledby="dropdownMenuButton">
            {data.map((i)=>
                <>
                <div style={{display:"flex", borderBottom:"1px solid",padding:"2px"}}>
                    <img style={{height:"50px"}} src={i.avatar_url}></img>
                    <a className="dropdown-item" href="">{i.login}</a>
                </div>
                
                </>
                
            )}
        </div>
        }
        </div>
        </>
    )
}
export default Followers