import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import geoJson from "../chicago.json";
import testapi from '../testapi.json'



const T = process.env.REACT_APP_TOKEN
mapboxgl.accessToken = T


const Map2 = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-87.65, 41.84],
      zoom: 10,
    });

  
testapi.map((shelter) =>
      new mapboxgl.Marker().setLngLat(shelter).addTo(map)
    //   console.log(mapboxgl)
    );


    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map2;