import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import fetchAPI from './actions';
import axiosFetchAPI from './actions';

export default function App() {
const result = useSelector(state => state.result);

let axiosData = axiosFetchAPI('georgewood749')
console.log("axiosData:", axiosData)

// let myData = fetchAPI('georgewood749')
// console.log("mydata:", myData)

  return (
    <div className="App">
      <h1>GitHub Repo Tracker</h1>
    </div>
  );
}

