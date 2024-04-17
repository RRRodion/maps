import React from 'react';
import './searchPanel.css';
import search_big from "../../icons/search_big.png";
import gasStation from '../../icons/markers/gasStation.png'
import sport from '../../icons/markers/sport.png'
import shop from '../../icons/markers/shop.png'
import nature from '../../icons/markers/nature.png'
import ero from '../../icons/markers/18+.png'
import bank from '../../icons/markers/bank.png'
import bed from '../../icons/markers/bed.png'
import coffee from '../../icons/markers/coffee.png'
import culture from '../../icons/markers/culture.png'
import entertainment from '../../icons/markers/entertainment.png'
import history from '../../icons/markers/history.png'
import food from '../../icons/markers/food.png'
import other from '../../icons/markers/other.png'
import religion from '../../icons/markers/religion.png'
import car from '../../icons/markers/car.png'
import architecture from '../../icons/markers/architecture.png'
import bicycle from '../../icons/markers/bicycle.png'
import factory from '../../icons/markers/factory.png'
import SearchElement from "../SearchElement";
import SearchTags from "../SearchTags";


const TAGS = [
    {title: 'Природа', icon: nature},
    {title: 'Культура', icon: culture},
    {title: 'История', icon: history},
    {title: 'Религия', icon: religion},
    {title: 'Архитектура', icon: architecture},
    {title: 'Индустриальные объекты', icon: factory},
    {title: 'Разное', icon: other},
    {title: 'Развлечения', icon: entertainment},
    {title: 'Спорт', icon: sport},
    {title: '18+', icon: ero},
    {title: 'Авто', icon: car},
    {title: 'Заправки', icon: gasStation},
    {title: 'Велосипеды', icon: bicycle},
    {title: 'Магазины', icon: shop},
    {title: 'Еда', icon: food},
    {title: 'Кофе/чай', icon: coffee},
    {title: 'Банки', icon: bank},
    {title: 'Место для сна', icon: bed},
];
/* поменять картинки */

const Index = () => {
    return (
        <div className="search-panel">
            <SearchElement/>
            <div className="text1">Искать:</div>
            <SearchTags tags={TAGS}/>
            <div className="text2">В радиусе:</div>
            <div className="radius">
                <input
                    className="radiusInput"
                    placeholder="1"
                    type="number"
                    min="1"
                    max="50"
                    /*onChange={handleRadiusChange}*/
                />
                км
            </div>
            <button className="searchButton" onClick={() => console.log("1")}>
                <img src={search_big} alt="поиск"/>
            </button>
        </div>
    );
}

export default Index;
