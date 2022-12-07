import { createContext, useState } from "react";
import { useEffect, useContext } from "react";

const ShelterContext = createContext()

// creating context object and passing the default values.
// export const shelterContext = React.createContext(null);

export const ShelterProvider = ({children}) => {

const [item, setItems] = useState([]);
const [rescueGroupData, setRescueGroupData] = useState()
const [postalCode, setPostalCode] = useState()
const [distance, setDistance] = useState('25')
const [coords, setCoords] = useState([])
 
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
                'postalcode': `${postalCode}`,
                'miles': `${distance}`               
              }
            }
          }),
        })
        .then(response => response.json())
        .then(json => setRescueGroupData(json.data))
      }
       catch (error) {
        console.log(error)
      }
    }
    if(postalCode) {
      fetchData()          
    }
  }, [postalCode, distance])

  // This useEffect will take the lat and lon from the rescueGroupData, if it exists, and set the coords array to objects with the lat and lon of each shelter.
  // This info will be used with the map, to provide markers for the user
  useEffect(()=> {
    if(rescueGroupData) {      
      setCoords([]) 
      rescueGroupData.map((item) => {setCoords((prevState) => [...prevState, {'lat': item.attributes.lat, 'lon': item.attributes.lon}])})
    }
  }, [rescueGroupData])

  console.log(rescueGroupData)
  console.log(coords)

    return(
        <ShelterContext.Provider value={{item:1, rescueGroupData, postalCode, setPostalCode, distance, setDistance, coords}}>
            {children}
        </ShelterContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ShelterContext)
}

export default ShelterContext