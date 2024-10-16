import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };

  return (
    <footer className="navbar">
      <nav
        className="navbarBrand"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        {/* <img
          src="/logo.png" // Cambia 'logo.png' al nombre de tu archivo
          alt="Logo"
          style={{ height: '40px', marginRight: '8px' }} // Aumenta la altura según sea necesario
        /> */}
        <span style={{ color: "#ffffff", }}>MeCAE</span>
      </nav>
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#ffffff" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Ahorros
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers") ? "#ffffff" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Ofertas
            </p>
          </li>



          <li
            className="navbarListItem" onClick={() => navigate("/user/profile")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/user") ? "#ffffff" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/user/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Usuario
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
