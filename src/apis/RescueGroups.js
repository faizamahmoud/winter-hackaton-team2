import axios from "axios";

const TOKEN = process.env.RESCUE_GROUPS_API_KEY

export default axios.create({
    baseURL: 'https://api.rescuegroups.org/v5',
    headers: {
        "Content-Type": "application/vnd.api+json",
        "Authorization": 'GPKNSuYF',
    },
})

// This is only needed for axios, which hasn't been working the way it should
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