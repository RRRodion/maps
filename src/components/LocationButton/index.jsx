import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";

import location_on from '../../icons/location_on.png';
import location_off from '../../icons/location_off.png';
import "./locationButton.css";

const LocationButton = ({ onLocateClick }) => {
    const map = useMapEvents({});
    const [locationAvailable, setLocationAvailable] = useState(false);

    const handleLocateButtonClick = () => {
        onLocateClick();

        map.locate();
        map.once("locationfound", handleLocationFound);
    };

    const handleLocationFound = (e) => {
        // Центрирование
        map.flyTo(e.latlng, map.getZoom());
        setLocationAvailable(true);
    };

    return (
        <button
            className="locationButton"
            onClick={handleLocateButtonClick}
        >
            <img
                src={locationAvailable ? location_on : location_off}
                alt={locationAvailable ? "current location" : "location off"}
            />
        </button>
    );
}

export default LocationButton;
