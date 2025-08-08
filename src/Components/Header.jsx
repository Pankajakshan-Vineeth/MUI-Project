import  { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CustomButton from "./CustomBotton/CustomButton";
import logoImg from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({});

  const slideMenu = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const nav_headings = [
    { path: "/", display: "Home" },
    { path: "/", display: "Dishes" },
    { path: "/", display: "Services" },
    { path: "/", display: "About Us" },
  ];

  const list = (anchor) => {
    return (
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        }}
        role="presentation"
        onClick={slideMenu(anchor, false)}
        onKeyDown={slideMenu(anchor, false)}
      >
        <List>
          {nav_headings.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <PhoneIcon />}
                </ListItemIcon>
                <ListItemText primary={item.display} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLink = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: "4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavBarlogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        backgroundColor: "#FED801",
        marginLeft: "0px",
        marginBottom: "-24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <CustomMenuIcon onClick={slideMenu("left", true)} />
        <Drawer
          anchor="left"
          open={mobileMenu["left"] || false}
          onClose={slideMenu("left", false)}
        >
          {list("left")}
        </Drawer>
        <NavBarlogo src={logoImg} alt="Logo" />
        <NavBarLinksBox>
          {nav_headings.map((item, index) => (
            <NavBarLink key={index} variant="body2">
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <NavBarLink variant="body2">Sign Up</NavBarLink>
        <CustomButton
          backgroundColor="#0F184C"
          color="#FFF"
          buttonText="Register"
        />
      </Box>
    </Box>
  );
};

export default Header;
