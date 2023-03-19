import logo from '../../../images/logo2.png';
import './header.css';
import NavBar from '../navbar/Navbar';
import MobileNav from '../mobileNav/MobileNav';

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="" className="logo" />
      </a>
      <NavBar></NavBar>
      <MobileNav></MobileNav>
    </header>
  );
};

export default Header;
