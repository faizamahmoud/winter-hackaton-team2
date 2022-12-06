import RescueGroups from './apis/RescueGroups'
import { useState, useEffect } from 'react'

function AnimalShelters() {

  const [rescueGroupData, setRescueGroupData] = useState()
  // curl --location -g --request POST '{{url}}/public/animals/search/available/haspic?fields[animals]=distance&include=breeds,locations&sort=random&limit=1' \

  useEffect(() => {
    let isMounted = true 
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.rescuegroups.org/v5/public/orgs/search', {
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
        console.log(response.json())
      }
      // try {
      //   const response = await RescueGroups.get('/public/orgs/search/', {
      //     method: "post",  
      //     body: JSON.stringify({
      //       data: {
      //         filterRadius: {
      //           miles: 25,
      //           postalcode: 90210
      //         }           
      //       }
      //     })     
      //   })
      //   if(isMounted) {
      //     setRescueGroupData(response.data.data)
      //   }
      //   console.log(response.data.data)
      // }
       catch (error) {
        console.log(error)
      }
    }
    fetchData()
    return () => (isMounted = false)
  }, [])



  return (
    <>
      <div>Animal Shelter Info</div>    
    </>
  )
}

export default AnimalShelters