import React, { useState } from 'react'
import Repo from '../Repo'
import User from '../User'


export default function SearchForm() {
    const [gitData, setGitData] = useState([])
    const [inputData, setInputData] = useState("")
    const [avatar, setAvatar] = useState("")
    const [login, setLogin] = useState("")




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
            setGitData(repoNames)
            setAvatar(avatar)
            setLogin(login)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search user here..." onChange={updateInput} value={inputData}></input>
                <input type="submit"></input>
            </form>
            <User avatar={avatar} username={login[0]} repoNum={gitData.length} />
            {/* <h2>{login[0]}</h2>
        <img src={avatar} alt="avatar"/> */}
            {gitData.map(b => <li>{b}</li>)}
            <Repo repos={gitData} />

            {/* <RepoContext.Provider value={[gitData, setGitData]}>
         */}
            <RepoContext.Provider value={[gitData, setGitData]}></RepoContext.Provider>

        </div>
    )

}
