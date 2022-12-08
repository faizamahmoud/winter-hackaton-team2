import Map from "../components/Map";
import AnimalShelters from "../components/AnimalShelters";
import SearchBar2 from '../components/SearchBar2/SearchBar2'


const SearchResult = () => {
    return (
        <div className="container">
            <SearchBar2 />
                <div className="row">
                    <Map className="col"/>
                    <AnimalShelters className="col"/>
                </div>
        </div>
    );
}

export default SearchResult;