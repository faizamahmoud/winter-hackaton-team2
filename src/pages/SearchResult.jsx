import Map from "../components/Map";
import AnimalShelters from "../components/AnimalShelters";
import SearchBar2 from '../components/SearchBar2/SearchBar2'


const SearchResult = () => {
    return (
        <div className="container">
            <SearchBar2 />
                <div className="d-flex flex-row mb-3">
                    <AnimalShelters className="p-1"/>
                    <Map className="p-1"/>
                </div>
        </div>
    );
}

export default SearchResult;