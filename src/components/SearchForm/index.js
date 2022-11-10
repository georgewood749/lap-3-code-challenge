import React, { useState, useEffect } from 'react'
import './styles.css'
import User from '../User'
import RepoList from '../Repo/'
export default function SearchForm() {
    const [gitData, setGitData] = useState([])
    const [inputData, setInputData] = useState("")
    const [avatar, setAvatar] = useState("")
    const [login, setLogin] = useState("")
    const [forks, setForks] = useState("")
    const [visibility, setVisibility] = useState("")
    const [language, setLanguage] = useState("")
    const [stargazers, setStargazers] = useState("")

    // let axiosData = await axiosFetchAPI('georgewood749')
    const handleSubmit = (e) => {
        e.preventDefault()
        getData(inputData)
        setInputData('')
    }

    const updateInput = (e) => {
        const input = e.target.value
        setInputData(input)
    }

    async function getData(username) {
        const fetchApi = `https://api.github.com/users/${username}/repos?per_page=100&page=1`
        try {
            const apiData = await fetch(fetchApi);
            const data = await apiData.json();
            console.log(data);
            const repoNames = data.map(repo => repo.name)
            const avatar = data.map(repo => repo.owner.avatar_url)
            const login = data.map(repo => repo.owner.login)
            const forks = data.map(repo => repo.forks_count)
            const stargazers_count = data.map(repo => repo.stargazers_count)
            const visibility = data.map(repo => repo.visibility)
            const language = data.map(repo => repo.language)
            console.log(login)
            setGitData(repoNames)
            setAvatar(avatar)
            setLogin(login)
            setForks(forks)
            setStargazers(stargazers_count)
            setVisibility(visibility)
            setLanguage(language)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release-pro/v4.0.0/css/solid.css"></link>
            <div className='header'>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="Search user here..." onChange={updateInput} value={inputData} className="formInput"></input>
                    <input type="submit" className='formButton' value="+"></input>
                </form>
                <i class="uil uil-bell"></i>
                <img src={avatar} className="userImgUpTop"></img>
            </div>
            <User avatar={avatar} username={login[0]} repoNum={gitData.length}/>
            <RepoList gitData={gitData} forks={forks} stargazers={stargazers} visibility={visibility} language={language}/>
        </div>
    )

}
