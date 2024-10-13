import { Container, Typography } from "@mui/material";
import logo from "/favicon.png";

const Navbar = () => {
  return (
    <Container maxWidth="xl"
      style={{width:"100%"}}
      sx={{
        position: "fixed",
        zIndex: 1001,
        top: 0,
        padding: 1,
        bgcolor: "white",
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 2,
      }}
    >
      <img src={logo} style={{ width: "3em" }} />
      <Typography variant="h4">
        Chat App | Redux and MUI
      </Typography>
    </Container>
  );
};

export default Navbar;
