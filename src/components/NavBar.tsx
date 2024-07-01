// src/components/Navbar.tsx

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

// Define a interface para as props do componente Navbar
interface NavbarProps {
  handleDrawerToggle: () => void; // Função para alternar a visibilidade do Drawer
}

const Navbar = ({ handleDrawerToggle }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {/* Botão do menu para dispositivos móveis */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Itens de navegação */}
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Login</Button>
          <Button variant="outlined" color="inherit" sx={{ ml: 2 }}>
            Signup
          </Button>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Services</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>
              <Button variant="outlined" color="inherit">
                Signup
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
