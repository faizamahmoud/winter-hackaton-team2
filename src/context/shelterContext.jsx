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

const maps = (lat, lan) => {
    setItems((prevState) => [...prevState, {lat, lan}]);}
  
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
          })
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

  console.log(rescueGroupData)
    return(
        <ShelterContext.Provider value={{item:1, rescueGroupData, postalCode, setPostalCode, distance, setDistance}}>
            {children}
        </ShelterContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(ShelterContext)
}

export default ShelterContext



