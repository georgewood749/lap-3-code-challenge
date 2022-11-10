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
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Create date: {createDate.slice(0, 10)}</p>
            </div>
        </div>
    )
}
