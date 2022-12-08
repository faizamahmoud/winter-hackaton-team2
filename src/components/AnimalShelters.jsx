import RescueGroups from '../apis/RescueGroups'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/shelterContext'
import {Link} from 'react-router-dom'


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
      <>
        <div>Animal Shelter Info</div>
        <div>
          {rescueGroupData.map((singleGroup,index) => {
            return (
              <div key={singleGroup.attributes.id}>
                <h4>{singleGroup.attributes.name}</h4>
                <p>City: {singleGroup.attributes.citystate}</p> 
                <p>Distance (from 90210 hardcoded): {singleGroup.attributes.distance} miles</p> 
                <p>Email: {singleGroup.attributes.email}</p> 
                <p>Phone: {singleGroup.attributes.phone}</p> 
                <p>Website:<a href={singleGroup.attributes.url} target="_blank">{singleGroup.attributes.url}</a> </p>

                <p>Services: {singleGroup.attributes.phone}</p> 

                <Link to={`/show/${index}`}>
                  <div>Change ME!!</div>
                </Link>

                
                <button >FLY</button>

              </div>
            )
          })}  
        </div>
      </>
    )
  } 
}

export default AnimalShelters