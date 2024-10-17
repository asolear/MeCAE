import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
// import { ReactComponent as LogoIcon } from "../assets/svg/logoefi.svg";
import mySvg from "../assets/svg/energy-efficiency-154006.svg"; // Ajusta la ruta

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
        <span style={{
          color: "#ffffff",
          fontSize: "72px",  // Ajusta el tamaño de la fuente
          transform: "scale(.2, 1)",  // Escala horizontalmente en 1 y aplasta verticalmente a la mitad
          display: "inline-block",  // Necesario para que el span respete el transform
        }}>

          MeCAE
        </span>
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
