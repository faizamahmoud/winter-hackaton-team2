import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useGlobalContext } from '../context/shelterContext'
import {useParams} from 'react-router-dom'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BiEnvelope } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";



function ShowPage() {

    const {rescueGroupData} = useGlobalContext()
    const {id} =useParams()
    const theShelter = rescueGroupData[id].attributes
    console.log(theShelter)

    
  return (
    <div>ShowPage
        <Card style={{ width: '40rem' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
            <h1><ListGroup.Item className='shelter-name'>{theShelter.name}</ListGroup.Item></h1>
            <h3><ListGroup.Item>{theShelter.street},{theShelter.city},{theShelter.state},{theShelter.postalcode}</ListGroup.Item></h3>
            <h4><i class="bi bi-telephone-fill"> {(theShelter.phone)? <ListGroup.Item ><BsFillTelephoneFill />{theShelter.phone}</ListGroup.Item>:<ListGroup.Item><BsFillTelephoneFill />  Phone not listed.</ListGroup.Item>}</i></h4>
            
            <h4><ListGroup.Item><CgWebsite /><a href={theShelter.url} target="_blank">{theShelter.url}</a></ListGroup.Item></h4>
            <ListGroup.Item>Services: {theShelter.services}</ListGroup.Item>
            <ListGroup.Item><BiEnvelope />  {theShelter.email}</ListGroup.Item>
            {/* <ListGroup.Item><p>Interested in volunteering or would like to learn more?Fill out the form to apply now!</p></ListGroup.Item>
            <button>Apply Now</button> */}


        </ListGroup>
        </Card>
        
      </div>
  )
}

export default ShowPage


// function AnimalShelters() {

// const {rescueGroupData, flyThis} = useGlobalContext()

// if(!rescueGroupData) {
//   return (
//     <h4>Please enter a location to search.</h4>
//   )
// } else if (rescueGroupData.length < 1) {
//   return (
//     <h4>There were no shelters found within your search area.</h4>
//   )
// } else {  
//     return (
//       <>
//         <div>Animal Shelter Info</div>
//         <div>
//           {rescueGroupData.map((singleGroup) => {
//             return (
//               <div key={singleGroup.attributes.id}>
//                 <h4>{singleGroup.attributes.name}</h4>
//                 <p>City: {singleGroup.attributes.citystate}</p> 
//                 <p>Distance (from 90210 hardcoded): {singleGroup.attributes.distance} miles</p> 
//                 <p>Email: {singleGroup.attributes.email}</p> 
//                 <p>Phone: <a href={singleGroup.attributes.url} target="_blank">{singleGroup.attributes.url}</a></p> 
//                 <p>Website: {singleGroup.attributes.phone}</p> 

//                 <p>Services: {singleGroup.attributes.phone}</p> 
//                 <button>{singleGroup.attributes.coordinates}</button>
//                 <button >FLY</button>

//               </div>
//             )
//           })}  
//         </div>
//       </>
//     )
//   } 
// }

// export default AnimalShelters