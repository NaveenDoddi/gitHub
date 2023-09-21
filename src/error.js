import React from "react";
import Search from "./searchbtn";

function Error(){
    return(
        <>

        <div style={{marginTop:"30px", marginLeft:"30px",textAlign:"center"}}>
        <h1>User not found</h1>
        <p>Incorect username. Please check username once again</p>
        <Search />
        </div>

        </>
        
    )
}

export default Error