import React from 'react'
import { Link } from 'react-router-dom'


export default function Repo({repos}) {
    return (
        <div>
            <h1>{repos.name}</h1>
            {repos.map((repo) => (
                <li key={repo.id}>
                    {repo.name}
                </li>
            ))}
        </div>
    )
}
