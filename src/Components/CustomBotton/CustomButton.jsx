import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
//   guiddeBtn,
//   getStartButton,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    // [theme.breakpoints.down("md")]: {
    //   margin: (welcomeBtn || getStartedBtn) && (0, "auto", 3, "auto"),
    //   width: (welcomeBtn || getStartedBtn) && "98%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: guideBtn && theme.spacing(3),
    //   width: guideBtn && "90%",
    // },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;
