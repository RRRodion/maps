import React from 'react';
import './favouritesPanel.css';
import SearchElement from "../SearchElement";

const FavouritePanel = () => {
    return (
        <div className="favourites-panel">
            <SearchElement/>
            <div className="text1">избранное:</div>
        </div>
    );
}

export default FavouritePanel;