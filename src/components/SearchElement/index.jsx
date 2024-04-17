import './searchElement.css';
import searchIcon from "../../icons/search-icon.png";

const SearchElement = () => {
    return (
        <div className="searchInput">
            <img src={searchIcon} alt="Поиск" />
            <input placeholder="Место, адрес..." />
        </div>
    );
};

export default SearchElement;
