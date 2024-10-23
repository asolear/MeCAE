import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Importa el icono de Logout
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Icono para Ayuda
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const pages = ['Products', 'Blog']; // Quitamos 'Pricing'
const helpPage = '/ayuda'; // Ruta de la página de ayuda

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully.");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error("Failed to log out.");
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ color: 'white', position: 'absolute', zIndex: 1 }} />
            <SettingsIcon sx={{ color: 'white', zIndex: 0 }} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MeCAE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }} component={Link} to={helpPage}>
                  <HelpOutlineIcon /> Ayuda
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MeCAE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              to={helpPage}
            >
              <HelpOutlineIcon /> Ayuda
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.displayName || "User"} src={user.photoURL || "/static/images/avatar/2.jpg"} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={{ display: 'inline', mr: 2 }}>
                      Hola,
                      <br />
                      <strong>{user.email || "Usuario"}</strong> {/* Saludo personalizado con email en negrita */}
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu} sx={{ justifyContent: 'center' }}>
                    <Button
                      component={Link}
                      to="/user/profile"
                      startIcon={<PersonOutlineIcon color="inherit" />}
                      sx={{ color: 'inherit', textAlign: 'center', width: '100%' }} // Estilo uniforme
                    >
                      Mi área agente
                    </Button>
                  </MenuItem>

                  <MenuItem onClick={onLogout} sx={{ justifyContent: 'center' }}>
                    <Button
                      startIcon={<ExitToAppIcon color="inherit" />}
                      sx={{ color: 'inherit', textAlign: 'center', width: '100%' }} // Estilo uniforme
                    >
                      Cerrar sesión
                    </Button>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <IconButton component={Link} to="/login" color="inherit">
                <PersonOutlineIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
