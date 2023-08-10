import './Header.scss'
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/images/logo.png";

const Header = ({ onSearchSubmit }) => {
  return (
    <div className="header">
      <div className='header__icon-container'>
      <img width="30" height="30" src="https://img.icons8.com/badges/48/shopping-cart.png" alt="shopping-cart"/>
      <img width="30" height="30" src="https://img.icons8.com/badges/48/like.png" alt="like"/>
      <img width="30" height="30" src="https://img.icons8.com/badges/48/head-profile.png" alt="head-profile"/>
      </div>
      <div className="header__container">
      <div className='header__logo-container'>
        <img className="header__img" src={logo} alt="logo" />
        </div>
          <SearchBar onSubmit={onSearchSubmit} />
      </div>
    </div>
  );
};

export default Header;

