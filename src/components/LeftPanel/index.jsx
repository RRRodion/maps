import React, { useState } from 'react';
import './panel.css';
import SignOut from '../LogoutButton';
import SearchPanel from '../SearchPanel';
import FavouritePanel from "../FavouritePanel";
function LeftPanel() {
    const [isAuthDetailsVisible, setIsAuthDetailsVisible] = useState(false);
    const [isSearchPanelVisible, setIsSearchPanelVisible] = useState(false);
    const [isFavouritesPanelVisible, setIsFavouritesPanelVisible] = useState(false)

    const toggleAuthDetails = () => {
        setIsAuthDetailsVisible(!isAuthDetailsVisible);
        setIsSearchPanelVisible(false);
        setIsFavouritesPanelVisible(false);
    };

    const toggleSearchPanel = () => {
        setIsSearchPanelVisible(!isSearchPanelVisible);
        setIsAuthDetailsVisible(false);
        setIsFavouritesPanelVisible(false);
    };

    const toggleFavouritesPanel = () => {
        setIsFavouritesPanelVisible(!isFavouritesPanelVisible);
        setIsAuthDetailsVisible(false);
        setIsSearchPanelVisible(false);
    }

    return (
        <div className="panel">
            <div className="up">
                <button className="button" onClick={toggleSearchPanel}><img src={require(isSearchPanelVisible ? "../../icons/searchbtn_off.png" : "../../icons/searchbtn_on.png")} style={{ width: '50px', height: '50px' }} alt="Search"/></button>
                <button className="button" onClick={toggleFavouritesPanel}><img src={require(isFavouritesPanelVisible ? "../../icons/favourites_on.png" : "../../icons/favourites.png")} alt="Favorite"/></button>
            </div>
            <div className="down">
                <button className="button1" onClick={toggleAuthDetails}><img src={require("../../icons/user.png")} alt="User"/></button>
                {isAuthDetailsVisible && <SignOut />}
            </div>
            {isSearchPanelVisible && <SearchPanel style={{ zIndex: 101 }} />}
            {isFavouritesPanelVisible && <FavouritePanel style={{ zIndex: 101 }} />}
        </div>
    );
}


export default LeftPanel;