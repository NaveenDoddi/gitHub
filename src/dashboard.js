import React, { useState } from "react";
import Followers from "./followers";
import Following from "./following";
import Repos from "./repos";
function Dashboard(){

    var [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")))
    if(data === undefined){
        data = JSON.parse(localStorage.getItem("data"))
    }

    return(

        <>
        <div className="text-light bg-dark" style={{border:"2px solid"}}>
            <div className="row">
                <div className="col-sm-12 col-md-5 text-center">
                    <table className="table" >
                        <tr>
                            <td style={{border:"none"}}><h2 className="h2 text-center">GIT_HBU</h2></td>
                        </tr>
                        <tr>
                            <td style={{border:"none"}}><img alt="logo" style={{height:"140px",borderRadius:"100%"}} src={data.avatar_url}></img></td>
                        </tr>
                        <tr>
                            <td style={{border:"none"}}><h4 className="h4">{data.login}</h4></td>
                        </tr>
                        <tr>
                            <td style={{border:"none"}}><h6>{data.bio}</h6></td>
                        </tr>
                    </table>
                </div>
                
                <div className="col-sm-12 col-md-7 text-left">
                    <table className="table table-sm">
                        <tr>
                            <th>Name</th>
                            <th>{data.name}</th>
                        </tr>
                        <tr>
                            <td><h6>id</h6></td>
                            <td><h6>{data.id}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>twitter</h6></td>
                            <td><h6>{data.twitter_username}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>email</h6></td>
                            <td><h6>{data.email}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>joined on</h6></td>
                            <td><h6>{(data.created_at).toString().split("T")[0]}</h6></td>
                        </tr>
                        <tr>
                            <td className="btn"><Repos count = {data.public_repos} link = {data.repos_url}/></td>
                            <td className="btn"><Followers followers = {data.followers} user = {data.login}/></td>
                            <td className="btn"><Following following = {data.following} user = {data.login} /></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><h6><a href = {data.html_url}>profile</a></h6></td>
                        </tr>
                    </table>
                    
                </div>
            </div>
          </div>
        
        </>
    )
}

export default Dashboard