import { useNavigate, useLocation } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <CurrencyExchangeOutlinedIcon style={{ fontSize: '72px', marginRight: '0px', margin: '0 0px' }} /> */}

          <span style={{
            color: "#ffffff",
            fontSize: "72px",  // Ajusta el tamaño de la fuente
            transform: "scale(.2, 1)",  // Escala horizontalmente en 1 y aplasta verticalmente a la mitad
            display: "inline-block",  // Necesario para que el span respete el transform
          }}>
            MeCAE

          </span></div>
      </nav>
      <nav className="navbarNav">
        <ul className="navbarListItems">

          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <PersonIcon
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
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
            <PersonIcon className={
                pathMatchRoute("/user/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
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

          <li className="navbarListItem" onClick={() => navigate("/Ayuda")}>
            <QuestionMarkIcon className={
                pathMatchRoute("/Ayuda")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            />
            <p
              className={
                pathMatchRoute("/Ayuda")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Ayuda
            </p>
          </li>

        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
