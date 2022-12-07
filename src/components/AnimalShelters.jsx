import RescueGroups from '../apis/RescueGroups'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/shelterContext'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import searchPage1 from '../pages/searchPage1.png'
import searchPage2 from '../pages/searchPage2.png'
import searchPage3 from '../pages/searchPage3.png'

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
          {rescueGroupData.map((singleGroup) => {
            return (
              <Card className="margin-top-50px col-2">
                <Card.Img variant="top" src={searchPage1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
          )})}
          {/* {rescueGroupData.map((singleGroup) => {
            return (
              <div key={singleGroup.attributes.id}>
                <h4>{singleGroup.attributes.name}</h4>
                <p>City: {singleGroup.attributes.citystate}</p> 
                <p>Distance (from 90210 hardcoded): {singleGroup.attributes.distance} miles</p> 
                <p>Email: {singleGroup.attributes.email}</p> 
                <p>Phone: <a href={singleGroup.attributes.url} target="_blank">{singleGroup.attributes.url}</a></p> 
                <p>Website: {singleGroup.attributes.phone}</p> 

                <p>Services: {singleGroup.attributes.phone}</p> 
                <button>{singleGroup.attributes.coordinates}</button>
                <button >FLY</button>

              </div>
            )
          })}   */}
        </div>
    )
  } 
}

export default AnimalShelters