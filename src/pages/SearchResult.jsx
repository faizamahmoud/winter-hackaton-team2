import Search from "../components/Search";
import Map from "../components/Map";
import AnimalShelters from "../components/AnimalShelters";

const SearchResult = () => {
    return (
        <div className="container">
            {/* <Header /> */}
            <Search />

                <div className="row">
                    <Map className="col"/>
                    <AnimalShelters className="col"/>
                </div>

            {/* <Footer /> */}

        </div>
    );
}

export default SearchResult;