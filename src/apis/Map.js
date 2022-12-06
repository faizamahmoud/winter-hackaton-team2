import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

 
mapboxgl.accessToken='pk.eyJ1IjoibXZya2xqYW4iLCJhIjoiY2w1bXYzdjIxMDE3cjNjbXR5ejl2bWFveSJ9.KD9v7tW8kslwNGmg-fOjcQ'


function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.26);
    const [lat, setLat] = useState(37.79);
    const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
      });
    }, []);

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on('move', () => {
//     setLng(map.current.getCenter().lng.toFixed(4));
//     setLat(map.current.getCenter().lat.toFixed(4));
//     setZoom(map.current.getZoom().toFixed(2));
//      });
//     });
   

  return (
    <div>
        <h1>MapS!!</h1>
        {/* Gives the map with the inital coordinates */}
        <div ref={mapContainer} className="map-container" />

        {/* not sure if we need the next line, used for showing lat/long on screen */}
        {/* <div className="sidebar">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div> */}
    </div>
  )
}

export default Map