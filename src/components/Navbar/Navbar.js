import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Button, createTheme, IconButton, List, ListItemButton, ListItemText, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import './Navbar.css';

const theme = createTheme({
  Palette: {
    mode: 'dark',
  },
});

const StyledButton = styled(Button)({
  marginLeft:'1rem',
  padding:'0.5rem 1rem',
  borderRadius:'2rem',
  border:0,
  fontWeight:'bold',
  boxShadow:'none',
  color: "white",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundImage: "linear-gradient(to bottom, #003eff, #006eff",
  },

}
)
function Navbar() {
    const {isDrawerOpen, setIsDrawerOpen} = useState(false)

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen)
    }

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId)
      if(section){
        section.scrollIntoView({behavior:'smooth'})
      }
    }

  return(
    <ThemeProvider theme={theme}>
          <AppBar position="fixed">
            <toolbar>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon/> 
              <div className="nav-buttons">
                <StyledButton onClick={() => scrollToSection('home')}> Home </StyledButton>
                <StyledButton onClick={() => scrollToSection('value')}> Value Proposition </StyledButton>
                <StyledButton onClick={() => scrollToSection('contact')}> Contact </StyledButton>
                <StyledButton onClick={() => scrollToSection('about')}> About us</StyledButton>

              </div>
              </IconButton>
            </toolbar>
          </AppBar>
          <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}> 
              <List>
                  <ListItemButton onClick={() => scrollToSection('home')}>
                      <ListItemText primary='Home'/>
                  </ListItemButton>
                  <ListItemButton onClick={() => scrollToSection('value')}>
                      <ListItemText primary='Value Proposition'/>
                  </ListItemButton>
                  <ListItemButton onClick={() => scrollToSection('contact')}>
                      <ListItemText primary='Contact'/>
                  </ListItemButton>
              </List>
          </Drawer>
    </ThemeProvider>
  ) 
}

export default Navbar;
