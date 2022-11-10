import React, { useState, useEffect } from 'react'
import './styles.css'
import User from '../User'
import RepoList from '../Repo/'
export default function SearchForm() {
    const [gitData, setGitData] = useState([])
    const [inputData, setInputData] = useState("")
    const [avatar, setAvatar] = useState("")
    const [login, setLogin] = useState("")

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
            console.log(login)
            setGitData(repoNames)
            setAvatar(avatar)
            setLogin(login)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <div className='header'>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="Search user here..." onChange={updateInput} value={inputData} className="formInput"></input>
                    <input type="submit" className='formButton'></input>
                </form>
            </div>
            <User avatar={avatar} username={login[0]} repoNum={gitData.length}/>
            <RepoList gitData={gitData}/>



        </div>
    )

}
