import React from 'react'
import Carousel from '../Carousel'
import './style.css'

export default function RepoList({ gitData, forks, stargazers, visibility, language}) {

    return (
        <div className="repoContainer">
            <div className='repoList'>
                <Carousel gitData={gitData} forks={forks} stargazers={stargazers} visibility={visibility} language={language} />
            </div>
        </div>
    )
}
