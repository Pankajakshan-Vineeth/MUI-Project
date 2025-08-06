import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CustomButton from "./CustomBotton/CustomButton";

const Header = () => {
  const nav_headings = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "Dishes",
    },
    {
      path: "/",
      display: "Services",
    },
    {
      path: "/",
      display: "About Us",
    },
  ];

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

  return (
    <Box>
      <Box>
        <NavBarLinksBox>
          {nav_headings.map((item, index) => (
            <NavBarLink variant="body2">{item.display}</NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>
      <NavBarLink variant="body2">Sign Up</NavBarLink>
      <CustomButton
        backgroundColor="#0F184C"
        color="#FFF"
        buttonText="Register"
      />
    </Box>
  );
};

export default Header;
