import React, { useState, useEffect } from 'react'
import axiosFetchAPI from '../../actions';



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
    // useEffect(() => {
    //     console.log("inputdata:", inputData)
    // }, [inputData])

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

    // useEffect(() => {
    //     getData(inputData)
    // }, [inputData])

    // useEffect(() => {
    //     try {
    //         async function fetchData() {
    //             const data = await axiosFetchAPI("oscr1998")
    //             // const json = JSON.stringify(data)
    //             // console.log("json:", json)
    //             console.log("data: ", data[0])
    //             setGitData(data)
    //             return data.map(item => ({
    //                 id: item.id,
    //                 repoName: item.name,
    //                 username: item.owner.login,
    //                 avatar: item.owner.avatar_url
    //             }))
    //         }
    //         const d = fetchData()
    //         setGitData("d", d)
    //         console.log("gitData", gitData)
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // }, [inputData])


    // const val = gitData[0]
    // console.log("val:", val)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search user here..." onChange={updateInput} value={inputData}></input>
                <input type="submit"></input>
            </form>
            <h2>{login[0]}</h2>
        <img src={avatar} alt="avatar"/>
        {gitData.map(b => <li>{b}</li>)}


        </div>
    )

}
// console.log("axiosData:", axiosData)
// console.log("axiosData number of repos:", axiosData.length)
// const value = Object.values(axiosData)[0]
// console.log("axiosData value:", value)
// console.log("axiosData username:", value.owner.login)
// console.log("axiosData id:", value.id)

// let myData = fetchAPI('georgewood749')
// console.log("mydata:", myData)
