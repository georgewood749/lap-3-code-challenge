import React from 'react'
import './UserStyle.css'

export default function User({ avatar, username, repoNum, followers, following, createDate, URL }) {
    return (
        <div className="userContainer">
            <div className='username'>
                <h2><a href={URL}><img src={avatar} className="userImg"></img>{username}</a></h2>
            </div>
            <div className='userInfo'>
                <p className='repoNum'>Number of repos: {repoNum}</p>
                <p>Followers: <b>{followers}</b> · Following: <b>{following}</b></p>
                <p>Create date: <b>{createDate.slice(0, 10)}</b></p>
            </div>
        </div>
    )
}
