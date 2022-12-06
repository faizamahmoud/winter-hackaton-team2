import { createContext, useState } from "react";

const ShelterContext = createContext()

// creating context object and passing the default values.
// export const shelterContext = React.createContext(null);

export const ShelterProvider = ({children}) => {

const [item, setItems] = useState([]);

const maps = (lat, lan) => {
    setItems((prevState) => [...prevState, {lat, lan}]);
}

    return(
        <ShelterContext.Provider value={{item:1}}>
            {children}
        </ShelterContext.Provider>
    )
}

export default ShelterContext



