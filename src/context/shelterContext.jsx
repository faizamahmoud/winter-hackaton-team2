import { createContext, useState } from "react";
import { useEffect, useContext } from "react";

const ShelterContext = createContext()

// creating context object and passing the default values.
// export const shelterContext = React.createContext(null);

export const ShelterProvider = ({children}) => {

const [item, setItems] = useState([]);

const maps = (lat, lan) => {
    setItems((prevState) => [...prevState, {lat, lan}]);
}

const [rescueGroupData, setRescueGroupData] = useState()

// function flyThis () {map.flyTo({
//   center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
//   essential: true // this animation is considered essential with respect to prefers-reduced-motion
//   })};


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

    return(
        <ShelterContext.Provider value={{item:1, rescueGroupData}}>
            {children}
        </ShelterContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ShelterContext)
}

export default ShelterContext



