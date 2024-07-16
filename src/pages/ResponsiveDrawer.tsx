// src/components/ResponsiveDrawer.tsx
import {
  Box,
  Button,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";

const drawerWidth = 240;

interface ResponsiveDrawerProps {
  window?: () => Window;
}

const ResponsiveDrawer = ({ window }: ResponsiveDrawerProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePrint = async () => {
    try {
      const response = await axios.post("http://localhost:3001/print", {
        text: "Hello, this is a test print!",
      });
      alert(response.data);
    } catch (error) {
      console.error(error);
      alert("Error printing");
    }
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
            keepMounted: true,
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
          mt: 8,
        }}
      >
        <Toolbar />
        <Typography paragraph>Main content goes here.</Typography>
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print Test
        </Button>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
