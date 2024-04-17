import React from 'react';
import "./setImage.css";

import gasStation from "../../icons/markers/gasStation.png";
import culture from "../../icons/markers/culture.png";
import entertainment from "../../icons/markers/entertainment.png";
import sport from "../../icons/markers/sport.png";
import nature from "../../icons/markers/nature.png";
import shop from "../../icons/markers/shop.png";
import other from "../../icons/markers/other.png";
import food from "../../icons/markers/food.png";
import bg from "../../icons/background.png";


const images = [
    { src: gasStation, alt: "Gas Station" },
    { src: culture, alt: "Culture" },
    { src: entertainment, alt: "Entertainment" },
    { src: sport, alt: "Sport" },
    { src: nature, alt: "Nature" },
    { src: shop, alt: "Shop" },
    { src: other, alt: "Other" },
    { src: food, alt: "Food" }
];

const SetImage = () => {
    return (
        <div className="leaves">
            <div className="set">
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} style={{ width: '50px', height: '50px' }} alt={image.alt} />
                    </div>
                ))}
            </div>
            <div>
                <img src={bg} className="bg" alt="" />
            </div>
        </div>
    );
};

export default SetImage;
