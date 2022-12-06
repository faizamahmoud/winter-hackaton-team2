import RescueGroups from './apis/RescueGroups'
import { useState, useEffect } from 'react'

function Rescue_Groups_test() {

  useEffect(() => {
    let isMounted = true 
    const fetchData = async () => {
      try {
        const response = await RescueGroups.get('/public/animals/search/available/cats')
        // const data = response.JSON
        const data = response.data
        console.log(data.data)
      }
       catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])



  return (
    <div>Rescue_Groups_test</div>
  )
}

export default Rescue_Groups_test