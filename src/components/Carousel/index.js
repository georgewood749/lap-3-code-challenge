import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Carousel({gitData, forks, stargazers, visibility, language}) {
    console.log("forks in carousel", forks)
  return (
    <>
    <h2>List of Repositories:</h2>
    {gitData.map((b, index) => <Accordion key={Math.random()*99999}>
        <Accordion.Item eventKey="0" className="statsContainerHeader">
        <Accordion.Header>{b}</Accordion.Header>
        <Accordion.Body className='statsContainer'>
            <ul>
                <li className='stats'>Number of forks: {forks[index]}</li>
                <li className='stats'>Number of stars: {stargazers[index]}</li>
                <li className='stats'>Repo Visibility: {visibility[index]}</li>
                <li className='stats'>Language: {language[index]}</li>
            </ul>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>)}
    </>
  )
}
