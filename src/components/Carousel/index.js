import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function Carousel({gitData, forks, stargazers, visibility, language}) {
    // console.log("forks in carousel", forks)
    var half_length = Math.ceil(gitData.length / 2)

  return (
    <>
    <h2>List of Repositories:</h2>
    <br/>
    <div className='accordianContainer'>
    <div className='firstHalf'>
    {gitData.slice(0,half_length).map((b, index) => <Accordion key={Math.random()*99999}>
        <Accordion.Item eventKey="0" className="statsContainerHeader">
        <Accordion.Header>{b}</Accordion.Header>
        <Accordion.Body className='statsContainer'>
            <ul>
                <li className='stats'>Number of forks: {forks[index]}</li>
                <li className='stats'>Number of stars: {stargazers[index]}</li>
                <li className='stats'>Repo Visibility: {visibility[index]}</li>
                <li className='stats'>Language: {language[index] ? language[index] : "N/A"}</li>
            </ul>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>)}
    </div>

    <div className='secondHalf'>
    {gitData.slice(half_length).map((b, index) => <Accordion key={Math.random()*99999}>
        <Accordion.Item eventKey="0" className="statsContainerHeader">
        <Accordion.Header>{b}</Accordion.Header>
        <Accordion.Body className='statsContainer'>
            <ul>
                <li className='stats'>Number of forks: {forks[index]}</li>
                <li className='stats'>Number of stars: {stargazers[index]}</li>
                <li className='stats'>Repo Visibility: {visibility[index]}</li>
                <li className='stats'>Language: {language[index] ? language[index] : "N/A"}</li>
            </ul>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>)}
    </div>

</div>
    </>
  )
}
