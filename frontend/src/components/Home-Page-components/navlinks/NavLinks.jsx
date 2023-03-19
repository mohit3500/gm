import './navLinks.css';

const NavLink = () => {
  return (
    <ul className="navlist">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Contact us</a>
      </li>
      <li>
        <button className="btn">
          <a href="#" id="login">
            Log in
          </a>
        </button>
      </li>
      <li>
        <button className="btn">
          <a href="#" id="signup">
            Sign up
          </a>
        </button>
      </li>
    </ul>
  );
};
export default NavLink;
