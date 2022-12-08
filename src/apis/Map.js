import React, {useRef, useEffect, useState} from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mapboxgl from 'mapbox-gl';
import markers from './marker.json'
import { useGlobalContext } from '../context/shelterContext'

const T = process.env.REACT_APP_TOKEN
mapboxgl.accessToken=T

// const {coords} = useGlobalContext()
// console.log(coords)
function Map() {
// const {flyThis} = useGlobalContext()


  const {coords} = useGlobalContext()


    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.26);
    const [lat, setLat] = useState(37.79);
    const [zoom, setZoom] = useState(5);

    
    useEffect(() => {
        
        // if (map.current) return; // initialize map only once
        // map.current = new mapboxgl.Map({
            
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng,lat],
                zoom: zoom,
            });
            
         
        markers.map((marker) => new mapboxgl.Marker()
                .setLngLat(marker)
                .setPopup(new mapboxgl.Popup({offset:50})
                // looking to populate shelter name in line below
                .setHTML("<h1>Hi Team 'This should work'</h1>"))
                .addTo(map));

            // flyThis()
        }, []);


        useEffect(() => {
            if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            });
    });
   
    // document.getElementById('fly').addEventListener('click', () => {
        // Fly to a random location
        // map.flyTo({
        // center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
        // essential: true // this animation is considered essential with respect to prefers-reduced-motion
        // });
      
    // });    

  return (
    <div>
        {/* <h1>Name of Site</h1> */}
        {/* Gives the map with the inital coordinates */}
        <div ref={mapContainer} className="map-container" />

        {/* not sure if we need the next line, used for showing lat/long on screen */}
        {/* <div className="sidebar">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div> */}
    </div>
  )
}

export default Map