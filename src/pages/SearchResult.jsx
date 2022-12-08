import Search from "../components/Search";
import Map from "../components/Map";
import AnimalShelters from "../components/AnimalShelters";

const SearchResult = () => {
    return (
        <div className="container">
            {/* <Header /> */}
            <Search />
            <AnimalShelters />
            <Map />
            {/* <Footer /> */}

        </div>
    );
}

export default SearchResult;