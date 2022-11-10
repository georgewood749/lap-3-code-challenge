import React from 'react'
import './style.css'

export default function RepoList({gitData}) {

    return (
        <div class="repoContainer">
            <div className='repoList'>
                <h2>List of Repositories:</h2>
                {gitData.map(b => <li className="repoListNames">{b}</li>)}
            </div>
            <div>
                <p>Hi</p>
            </div>
        </div>
    )
}
