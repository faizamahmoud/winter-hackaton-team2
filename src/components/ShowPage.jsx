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
    <div className="d-flex flex-row bd-highlight mb-3">
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

        {/* ----Carousel to be worked on later */}
       {/* <img src="https://th.bing.com/th/id/OIP._xdAEcRoM1v8rzRx0sa7kQHaJ3?w=134&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="" /> */}
       <img src="./images2/img_1.png" alt="" />

    {/* <Carousel className='ms-5 carousel' style={{ width: '30rem' }}>
      <Carousel.Item style={{ height: '500px' }} >
        <img
          className="d-block w-50"
          src="src/components/images2/img_1.png"
          // src="src/pages/searchPage1.png/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          className="d-block w-50"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          className="d-block w-50"
          src="./src/pages/searchPage2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         */}
      </div>
  )
}

export default ShowPage
