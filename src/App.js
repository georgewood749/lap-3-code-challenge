import React from 'react';
import './App.css';
import axiosFetchAPI from './actions';
import Header from './layout/header';

export default function App() {
// let axiosData = await axiosFetchAPI('georgewood749')
// console.log("axiosData:", axiosData)
// console.log("axiosData number of repos:", axiosData.length)
// const value = Object.values(axiosData)[0]
// console.log("axiosData value:", value)
// console.log("axiosData username:", value.owner.login)
// console.log("axiosData id:", value.id)

// let myData = fetchAPI('georgewood749')
// console.log("mydata:", myData)

  return (
    <div className="App">
      <Header/>
      <h1>GitHub Repo Tracker</h1>
    </div>
  );
}



