import Search from "../components/Search";
import Map from "../components/Map";
import AnimalShelters from "../components/AnimalShelters";
import SearchBar2 from '../components/SearchBar2/SearchBar2'

const SearchResult = () => {
    return (
        <div className="container">
            {/* <Header /> */}
            <Search />
            <SearchBar2 />
                <div className="row">
                    <Map className="col"/>
                    <AnimalShelters className="col"/>
                </div>

            {/* <Footer /> */}

        </div>
    );
}

export default SearchResult;