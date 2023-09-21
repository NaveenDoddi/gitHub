import React,{useState} from "react";

function Followers(props){
    var [loading, setLoading] = useState(false)
    var [data, setData] = useState("")

    async function run(){
        try{
            await fetch("https://api.github.com/users/"+props.user+"/followers")
           .then(response => response.json())
           .then((data)=> {
               setData(data)
               sessionStorage.setItem("followers", JSON.stringify(data))
               setLoading(true)
           })
       }catch(error){}
    }

    run()
    
    function showFollowers(){
        if(loading){
            var dropdownMenu = document.querySelector("#dropdown3");
            dropdownMenu.classList.toggle("show");
        }

    }

    function loadNew(props){
        
        async function run(){
            try{
                await fetch("https://api.github.com/users/"+props)
                .then(response => response.json())
                .then((data)=>{
                
                    sessionStorage.setItem("data", JSON.stringify(data))

                    sessionStorage.setItem("username",data.login)
                    window.location.pathname = "/dashboard"
                })
            }catch(error){}
        }
       run()
    }

    return(
        
        <>
        <div className="dropdown">

        <button className="btn w-100 dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" onClick={showFollowers}> followers {props.followers}</button>
        {loading && 
        
        <div className="dropdown-menu" id="dropdown3" aria-labelledby="dropdownMenuButton" style={{height:"500px",overflow:"scroll", border:"none"}}>
            {data.map((i)=>
                <>
                <div onClick={ () => loadNew(i.login)} style={{display:"flex", borderBottom:"1px solid",padding:"2px"}}>
                    <img alt="logo" style={{height:"50px"}} src={i.avatar_url}></img>
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

export default Followers