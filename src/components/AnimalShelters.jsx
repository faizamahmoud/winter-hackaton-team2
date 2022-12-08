import RescueGroups from '../apis/RescueGroups'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/shelterContext'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import searchPage1 from '../pages/searchPage1.png'
import searchPage2 from '../pages/searchPage2.png'
import searchPage3 from '../pages/searchPage3.png'
import { BsArrowRightCircle } from 'react-icons/bs';


function AnimalShelters() {

const {rescueGroupData, flyThis} = useGlobalContext()

if(!rescueGroupData) {
  return (
    <h4>Please enter a location to search.</h4>
  )
} else if (rescueGroupData.length < 1) {
  return (
    <h4>There were no shelters found within your search area.</h4>
  )
} else {  
    return (
        <div>
          {rescueGroupData.map((singleGroup,index) => {
            return (
              <Card className="margin-top-50px col-2">
                <Card.Img variant="top" src={searchPage1} />
                <Card.Body>
                  <Card.Title className="sr-card-title">{singleGroup.attributes.name}</Card.Title>                  
                    <Card.Text>
                      Placeholder
                    </Card.Text> 
                </Card.Body>
                <ListGroup className="sr-small-info">
                  <ListGroup.Item className="sr-card-link" href="#">{singleGroup.attributes.phone}</ListGroup.Item>
                  <ListGroup.Item className="sr-card-link" href={singleGroup.attributes.url} target="_blank" >website</ListGroup.Item>
                  {(singleGroup.attributes.email) ? <>
                    <ListGroup.Item className="sr-card-link" href='#'>{singleGroup.attributes.email}</ListGroup.Item> 
                  </>                  
                  : <></>
                  } 
                  <ListGroup.Item className="sr-card-address" >{singleGroup.attributes.street}, {singleGroup.attributes.citystate}</ListGroup.Item>
                </ListGroup>
                <Link to={`/show/${index}`}>
                <button className='btn-donate ms-3 mt-1'><span id='donate-icon'></span>Learn More <BsArrowRightCircle /></button>
                </Link>
              </Card>
          )})}
        </div>
    )
  } 
}

export default AnimalShelters