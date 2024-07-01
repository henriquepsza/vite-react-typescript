// src/components/ResponsiveDrawer.tsx

import { Box, CssBaseline, Drawer, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/NavBar.tsx";

// Define a largura do Drawer
const drawerWidth = 240;

// Define a interface para as props do componente ResponsiveDrawer
interface ResponsiveDrawerProps {
  window?: () => Window; // Propriedade opcional para fornecer uma referência à janela
}

const ResponsiveDrawer = ({ window }: ResponsiveDrawerProps) => {
  const [mobileOpen, setMobileOpen] = useState(false); // Estado para gerenciar a visibilidade do Drawer no mobile

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Alterna a visibilidade do Drawer
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Typography variant="h6" noWrap>
          Sidebar content
        </Typography>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Melhor performance de abertura no mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8, // Ajusta a margem superior baseado na altura da AppBar
        }}
      >
        <Toolbar />
        <Typography paragraph>Main content goes here.</Typography>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
