import React from 'react'
import Carousel from '../Carousel'
import './style.css'

export default function RepoList({gitData}) {

    return (
        <div class="repoContainer">
            <div className='repoList'>
                <Carousel gitData={gitData}/>
            </div>
        </div>
    )
}
