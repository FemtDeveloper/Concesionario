import React from "react";
import credentials from "./credentials";
import GoogleMaps from "simple-react-google-maps";

const Maps = () => {
  return (
    <div className="container-map">
      <GoogleMaps
        apiKey={credentials.mapsKey}
        style={{ height: "300px", width: "90%", margin: "0 auto" }}
        zoom={13}
        center={{ lat: 4.644881, lng: -74.130758 }}
        markers={{ lat: 4.644881, lng: -74.130758 }} //optional
      />
    </div>
  );
};

export default Maps;
