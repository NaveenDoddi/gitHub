import React,{useState} from "react";
function Following(props){
    var [loading, setLoading] = useState(false)
    var [data, setData] = useState("")

    var user = sessionStorage.getItem("user_name")

    fetch("https://api.github.com/users/"+user+"/following")
    .then(response => response.json())
    .then((data)=> {
        setData(data)
        sessionStorage.setItem("following", JSON.stringify(data))
        setLoading(true)
    })

    function fetchFollowing(){

        var dropdownMenu = document.querySelector("#dropdown2");
        dropdownMenu.classList.toggle("show");
        
    }
    return(
        <>
        <div className="dropdown float-left">

        <button className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" onClick={fetchFollowing}> following {props.following}</button>
        {loading && 
        
        <div className="dropdown-menu" id="dropdown2" aria-labelledby="dropdownMenuButton" style={{height:"500px",overflow:"scroll"}}>
            {data.map((i)=> 
                <>
                <div style={{display:"flex", borderBottom:"1px solid",padding:"2px"}}>
                    <img style={{height:"50px"}} src={i.avatar_url}></img>
                    <a className="dropdown-item">{i.login}</a>
                </div>
                
                </>
            )}
        </div>
        }
    
        </div>
        </>
        
    )
}
export default Following