import React from 'react'

export default function User({avatar, username, repoNum}) {
    return (
        <div>
            <img src={avatar}></img>
            <h2>{username}</h2>
            <p className='repoNum'>Number of repos: {repoNum}</p>
        </div>
    )
}
