import React, { useState } from "react";
import Repos from "./repos";
import Followers from "./followers";
import Following from "./following";
import { light } from "@mui/material/styles/createPalette";

function Dashboard(){

    var [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")))
    if(data === undefined){
        data = JSON.parse(localStorage.getItem("data"))
    }
    const steelBlue ={
        color : "steelblue",
    }
    const lightCoral ={
        color : "lightcoral",
    }
    const borderNone ={
        border:"none"
    }

    return(

        <>
        <div className="text-light bg-dark" style={{border:"2px solid"}}>
            <div className="row">
                <div className="col-sm-12 col-md-5 text-center">
                    <table className="table table-borderless" >
                        <tr>
                            <td style={borderNone}><h2 style={lightCoral} className="h2 text-center">GIT_HUB</h2></td>
                        </tr>
                        <tr>
                            <td style={borderNone}><img alt="logo" style={{height:"140px",borderRadius:"100%"}} src={data.avatar_url}></img></td>
                        </tr>
                        <tr>
                            <td style={borderNone}><h4 className="h4">{data.login}</h4></td>
                        </tr>
                        <tr>
                            <td style={borderNone}><h6>{data.bio}</h6></td>
                        </tr>
                        <tr>
                            <td style={borderNone}><h6><a style={steelBlue} href = {data.html_url}> link to github profile</a></h6></td>
                        </tr>
                    </table>
                </div>
                
                <div className="col-sm-12 col-md-7 text-left">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <th style={steelBlue}>Name</th>
                                <th><strong>{data.name}</strong></th>
                            </tr>
                            <tr>
                                <td style={steelBlue}><h6>Id</h6></td>
                                <td><h6>{data.id}</h6></td>
                            </tr>
                            
                            <tr>
                                <td style={steelBlue}><h6>Joined on</h6></td>
                                <td><h6>{(data.created_at).toString().split("T")[0]}</h6></td>
                            </tr>
                            <tr>
                                <td style={steelBlue}><h6>Location</h6></td>
                                <td><h6>{data.location}</h6></td>
                            </tr>
                            <tr>
                                <td style={steelBlue}><h6>Twitter id</h6></td>
                                <td><h6>{data.twitter_username}</h6></td>
                            </tr>
                            <tr>
                                <td style={borderNone} colSpan={2}> 
                                    <div id="container" className="row">
                                        <span id="repo1" className="col col-xs-12 col-sm-12 col-md-4 col-lg-12"><Repos count = {data.public_repos} link = {data.repos_url} /></span><br></br>
                                        <h1 id="hiddenh1">.</h1> <br></br>
                                        <span className="col col-xs-6 col-sm-6 col-md-4 col-lg-6"><Following following = {data.following} user = {data.login} /></span> <br></br>
                                        <h1 id="hiddenh1">.</h1> <br></br>
                                        <span className="col col-xs-6 col-sm-6 col-md-4 col-lg-6"><Followers followers = {data.followers} user = {data.login} /></span> <br></br>

                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
          </div>
        
        </>
    )
}

export default Dashboard