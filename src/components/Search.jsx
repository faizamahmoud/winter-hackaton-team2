import { useState } from "react";
import { AddressAutofill, Auto } from "@mapbox/search-js-react";
import { useGlobalContext } from "../context/shelterContext";

const Search = () => {
    const TOKEN = process.env.REACT_APP_TOKEN

    const { postalCode, setPostalCode } = useGlobalContext()
    
    return (
        <form>
            <AddressAutofill accessToken={`${TOKEN}`}>
                <input name="address" placeholder="Address" type="text" autoComplete="street-address" />
            </AddressAutofill>
            <input name="city" placeholder="City" type="text" autoComplete="address-level2" />
            <input name="state" placeholder="State" type="text" autoComplete="address-level1" />
            <input name="country" placeholder="Country" type="text" autoComplete="country"/>
            <input name="postcode" placeholder="Postcode" type="text" autoComplete="postal-code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
        </form>
    )
}

export default Search;
