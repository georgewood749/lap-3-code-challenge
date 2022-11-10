import React from 'react'
import './UserStyle.css'

export default function User({avatar, username, repoNum}) {
    return (
        <div className="userContainer">
            <img src={avatar} className="userImg"></img>
            <h3 className='username'>{username}</h3>
            <br/>
            <br/>
            <li className='repoNum'>Number of repos: {repoNum}</li>
        </div>
    )
}
