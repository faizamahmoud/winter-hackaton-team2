import React, {useRef, useEffect, useState} from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mapboxgl from 'mapbox-gl';
import { useGlobalContext } from '../context/shelterContext'

// Mapbox key
const T = process.env.REACT_APP_TOKEN
mapboxgl.accessToken=T

function Map() {

    // const {flyThis} = useGlobalContext()
    const {coords} = useGlobalContext() //??
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(5);

    useEffect(() => {
            // from Mapbox.com
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-122.26,37.79],
            zoom: zoom,
            });
         
            // from Mapbox.com
            coords.map((marker) => {
            new mapboxgl.Marker()
            .setLngLat(marker)
            .setPopup(new mapboxgl.Popup({offset:50})
            // looking to populate shelter name in line below
            .setHTML(`${marker.name}`))
            .addTo(map)
        });

            // flyThis()
        }, [coords]);

        // useEffect(() => {
        //     if (!map.current) return; // wait for map to initialize
        //     map.current.on('move', () => {
        //     setLng(map.current.getCenter().lng.toFixed(4));
        //     setLat(map.current.getCenter().lat.toFixed(4));
        //     setZoom(map.current.getZoom().toFixed(2));
        //     });
        //  });

        //  function flyThis () {map.flyTo({
        //     center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
        //     essential: true // this animation is considered essential with respect to prefers-reduced-motion
        //     })};
        //     flyThis();
   
  return (
    <div>
        {/* Gives the map with the inital coordinates */}
        <div ref={mapContainer} className="map-container mt-5" />
    </div>
  )
}

export default Map