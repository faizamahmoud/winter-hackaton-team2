import RescueGroups from './apis/RescueGroups'
import { useState, useEffect } from 'react'

function AnimalShelters() {

  // const [rescueGroupData, setRescueGroupData] = useState()
  // // curl --location -g --request POST '{{url}}/public/animals/search/available/haspic?fields[animals]=distance&include=breeds,locations&sort=random&limit=1' \

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.rescuegroups.org/v5/public/orgs/search', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type':'application/vnd.api+json',
  //           'Authorization': 'GPKNSuYF'
  //         },
  //         body: JSON.stringify({
  //           data: {
  //             'filterRadius':{
  //               'postalcode': 90210,
  //               'miles': 25
  //             }
  //           }
  //         })
  //       })
  //       console.log(response.json())
  //     }
  //      catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()

  // }, [])



  return (
    <>
      <div>Animal Shelter Info</div>    
    </>
  )
}

export default AnimalShelters