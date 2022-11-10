import React from 'react'
import './UserStyle.css'

export default function User({avatar, username, repoNum}) {
    return (
        <div className="userContainer">
            <img src={avatar} className="userImg"></img>
            <h2 className='username'>{username}</h2>
            <br/>
            <br/>
            <p className='repoNum'>Number of repos: {repoNum}</p>
        </div>
    )
}
