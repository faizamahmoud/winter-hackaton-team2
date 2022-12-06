import RescueGroups from './apis/RescueGroups'
import { useState, useEffect } from 'react'

function AnimalShelters() {

  const [rescueGroupData, setRescueGroupData] = useState()
  
  useEffect(() => {
    async function fetchData() {
      try {
       fetch('https://api.rescuegroups.org/v5/public/orgs/search', {
          method: 'POST',
          headers: {
            'Content-Type':'application/vnd.api+json',
            'Authorization': 'GPKNSuYF'
          },
          body: JSON.stringify({
            data: {
              'filterRadius':{
                'postalcode': 90210,
                'miles': 25
              }
            }
          })
        })
        .then(response => response.json())
        .then(json => setRescueGroupData(json.data)) 
        .then(() => console.log(rescueGroupData)) 
      }
       catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [])

if(!rescueGroupData) {
  return (
    <h4>Loading</h4>
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
          {rescueGroupData.map((singleGroup) => {
            return (
              <div>
                <h4>{singleGroup.attributes.name}</h4>
                <p>City: {singleGroup.attributes.citystate}</p> 
                <p>Distance (from 90210 hardcoded): {singleGroup.attributes.distance} miles</p> 
                <p>Email: {singleGroup.attributes.email}</p> 
                <p>Phone: <a href={singleGroup.attributes.url} target="_blank">{singleGroup.attributes.url}</a></p> 
                <p>Website: {singleGroup.attributes.phone}</p> 
                <p>Services: {singleGroup.attributes.phone}</p> 
              </div>
            )
          })}  
        </div>
      </>
    )
  } 
}

export default AnimalShelters