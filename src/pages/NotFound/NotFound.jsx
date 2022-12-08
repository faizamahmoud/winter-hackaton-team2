import not_found_dog from './not_found_dog.png'
import './NotFound.css'
import {BiRightArrowCircle} from 'react-icons/bi'
const NotFound = () => {

    return (
        <div className="b-flex text-center">
            <img className="img-fluid dog-img" src={not_found_dog} alt="Cute dog, wanting to help you find your way home." />
            <h3>Sorry, we couldn't find that page</h3>
            <h4>Go back to our main page to continue your visit</h4>
            <a href="/"><button className="go-back-btn">Back to main page {<BiRightArrowCircle />}</button></a>
        </div>
    );
}

export default NotFound;
