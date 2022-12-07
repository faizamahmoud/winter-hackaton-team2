

import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useGlobalContext } from '../context/shelterContext';



// const T = process.env.REACT_APP_TOKEN
// mapboxgl.accessToken = T
// 'pk.eyJ1IjoibXZya2xqYW4iLCJhIjoiY2w1bXYzdjIxMDE3cjNjbXR5ejl2bWFveSJ9.KD9v7tW8kslwNGmg-fOjcQ'
function Map() {

  const {coords} = useGlobalContext()

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.26);
    const [lat, setLat] = useState(37.79);
    const [zoom, setZoom] = useState(10);


// function Map() {

//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   const [lng, setLng] = useState(-122.26);
//   const [lat, setLat] = useState(37.79);
//   const [zoom, setZoom] = useState(10);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       // center: [lng,lat],
//       center: [-87.65, 41.84],
//       // zoom: zoom
//       zoom: 10
//     });


//     // Create default markers
//     geoJson.features.map((feature) =>
//       new mapboxgl.Marker()
//         .setLngLat(feature.geometry.coordinates)
//         .addTo(map)
//     );

//     // Add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), "top-right");

//     // Clean up on unmount
//     return () => map.remove();
//   }, []);




//   return (
//     <div>
//       <h1>MapS!!</h1>
//       {/* Gives the map with the inital coordinates */}
//       {/* <div className="sidebar">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div> */}
//       <div ref={mapContainer} className="map-container" />

//       {/* not sure if we need the next line, used for showing lat/long on screen */}
//     </div>
//   )
// }

// export default Map

}