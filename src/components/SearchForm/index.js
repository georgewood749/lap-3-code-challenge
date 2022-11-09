import React, {useState, useEffect} from 'react'
import axiosFetchAPI from '../../actions';



export default function SearchForm() {
    const [gitData, setGitData] = useState([])
    const [inputData, setInputData] = useState("")
    // let axiosData = await axiosFetchAPI('georgewood749')
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const updateInput = (e) => {
        const input = e.target.value
        setInputData(input)
    }
    useEffect(()=>{
        console.log("inputdata:", inputData)
    },[inputData])

    useEffect(() => {
        try{
            async function fetchData(){
                const data = await axiosFetchAPI(inputData)
                return data.map(item => ({
                    id: item.id,
                    repoName: item.name,
                    username: item.owner.login,
                    avatar: item.owner.avatar_url
                }))
            }    
        const d = fetchData()
        setGitData(d)
        console.log(gitData)
        } catch(err){
            console.error(err.message)
        }        
     }, [])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search user here..." onChange={updateInput}></input>
            <input type="submit"></input>
        </form>
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
