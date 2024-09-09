import { AppBar, Box, Toolbar, Typography, Button, Container } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { main_routes } from "../../path/path";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#333",
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
              letterSpacing: 1.2,
            }}
          >
            My Application
          </Typography>
          <Box display="flex" gap={3}>
            <Button 
              component={Link} 
              to={main_routes.posts}
              sx={{
                color: isActive(main_routes.posts) ? "#1976d2" : "#333",
                fontWeight: isActive(main_routes.posts) ? "bold" : "normal",
                borderBottom: isActive(main_routes.posts) ? "2px solid #1976d2" : "2px solid transparent",
                borderRadius: 0,
                "&:hover": {
                  color: "#1976d2",
                  borderBottom: "2px solid #1976d2",
                },
              }}
            >
              Posts
            </Button>
            <Button 
              component={Link} 
              to={main_routes.comments}
              sx={{
                color: isActive(main_routes.comments) ? "#1976d2" : "#333",
                fontWeight: isActive(main_routes.comments) ? "bold" : "normal",
                borderBottom: isActive(main_routes.comments) ? "2px solid #1976d2" : "2px solid transparent",
                borderRadius: 0,
                "&:hover": {
                  color: "#1976d2",
                  borderBottom: "2px solid #1976d2",
                },
              }}
            >
              Comments
            </Button>
            <Button 
              component={Link} 
              to={main_routes.users}
              sx={{
                color: isActive(main_routes.users) ? "#1976d2" : "#333",
                fontWeight: isActive(main_routes.users) ? "bold" : "normal",
                borderBottom: isActive(main_routes.users) ? "2px solid #1976d2" : "2px solid transparent",
                borderRadius: 0,
                "&:hover": {
                  color: "#1976d2",
                  borderBottom: "2px solid #1976d2",
                },
              }}
            >
              Users
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
