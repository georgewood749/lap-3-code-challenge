import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel({gitData}) {
  return (
    <>
    {gitData.map(b => <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>{b}</Accordion.Header>
        <Accordion.Body>
        {gitData.forks_count}
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>)}
    </>
  )
}
