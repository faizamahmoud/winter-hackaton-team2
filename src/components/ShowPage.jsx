import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useGlobalContext } from '../context/shelterContext'
import {useParams} from 'react-router-dom'
import { BsFillTelephoneFill, BsArrowRightCircle } from 'react-icons/bs';
import { BiEnvelope } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import Carousel from 'react-bootstrap/Carousel';



function ShowPage() {

    const {rescueGroupData} = useGlobalContext()
    const {id} =useParams()
    const theShelter = rescueGroupData[id].attributes
    console.log(theShelter)

    
  return (
    <div>
        <Card className="mt-3" style={{ width: '30rem' }}>
        {/* <Card.Header></Card.Header> */}
        <ListGroup variant="flush">
            {/* <h2><ListGroup.Item className='shelter-name'>{theShelter.name}</ListGroup.Item></h2> */}
            <h2 className='mt-3 ms-3 shelter-name'>{theShelter.name}</h2>
            <h4 className='mt-3 ms-3'>{theShelter.street},{theShelter.city},{theShelter.state},{theShelter.postalcode}</h4>
            <span>{(theShelter.phone)? <p className='mt-3 ms-3'><BsFillTelephoneFill />{theShelter.phone}</p>:<p className='mt-3 ms-3'><BsFillTelephoneFill />  Phone not listed.</p>}</span>
         
            <p className='m-3 p-0'>Services: {theShelter.services}</p>
      
            <p className='ms-3 m-0 p-0'><CgWebsite /><a href={theShelter.url} target="_blank">{theShelter.url}</a></p>
            <p className='mt-0 m-3 p-0'><BiEnvelope />  {theShelter.email}</p>
            
            <p className='p-0 m-0 ms-3'>Interested in volunteering or would like to learn more?</p> <p className='p-0 m-0 ms-3'>Fill out the form to apply now!</p>
            <button className='btn-donate ms-3 mt-1'><span id='donate-icon'></span>Apply Now <BsArrowRightCircle /></button>

        </ListGroup>
        </Card>
        
      </div>
  )
}

export default ShowPage
