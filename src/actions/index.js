import axios from "axios"

// const fetchAPI = (username) => {
//     fetch(`https://api.github.com/users/${username}/repos`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data) // Prints result from `response.json()` in getRequest
//     })
//     .catch(error => console.error(error))
// }


const axiosFetchAPI = async (username) => {
  try{
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100&page=1`);
    return data;
  } catch (err) {
    throw new Error(err.message)
  }
}

export default axiosFetchAPI
