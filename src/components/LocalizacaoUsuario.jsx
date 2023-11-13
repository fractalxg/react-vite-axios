//NÃO FINALIZADO


import { useState, useEffect } from 'react'

function userLocation(){

const [latitude, setLatitude] = useState("");
const [longitude, setLongitude] = useState("");



  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    };

    getLocation();
  }, []); 

  useEffect(() => {

    console.log(latitude, longitude);
  }, [latitude, longitude]); 

}

export default userLocation