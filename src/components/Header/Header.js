import "./Header.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__img" src={logo} alt="logo" />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Header;
