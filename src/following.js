import React,{useState} from "react";
function Following(props){
    var [loading, setLoading] = useState(false)
    var [data, setData] = useState("")

    function fetchFollowing(){
        var user = sessionStorage.getItem("user_name")
        fetch("https://api.github.com/users/"+user+"/following")
        .then(response => response.json())
        .then((data)=> {
            setData(data)
            sessionStorage.setItem("following", JSON.stringify(data))
            setLoading(true)
        })
        
        var dropdownMenu = document.querySelector("#dropdown2");
        dropdownMenu.classList.toggle("show");
        
    }
    return(
        <>
        <div className="dropdown float-left">

        <button className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" onClick={fetchFollowing}> following {props.following}</button>
        {loading && 
        
        <div className="dropdown-menu" id="dropdown2" aria-labelledby="dropdownMenuButton">
            {data.map((i)=> 
                <a className="dropdown-item" >{i.login}</a>
            )}
        </div>
        }
    
        </div>
        </>
        
    )
}
export default Following