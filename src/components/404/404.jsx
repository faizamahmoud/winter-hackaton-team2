import React from 'react';
import pup from './amazon_dog.jpg'

function NotFound(props) {
    return (
        <div>
            <img src={pup} alt="pup"></img>
            <h2> Sorry, we couldn’t find that page.</h2>
            <p>Go Back to our main page to continue your visit</p>
        </div>
    );
}

export default NotFound;
