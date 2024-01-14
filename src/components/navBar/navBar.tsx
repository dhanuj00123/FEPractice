import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import "./navBar.css";
import Logo from "../../assets/Logo.png";
import User from "../../assets/User.svg";
const NavBar = () => {
  return (
    <>
      <AppBar position="sticky" className="nav-bar">
        <Toolbar variant="dense">
          <IconButton disableRipple={true}>
            <Avatar alt="Remy Sharp" src={Logo} />
          </IconButton>
          <Grid container={true} justifyContent={"space-between"}>
            <Grid
              item={true}
              xs={4}
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Typography variant="body1" className="nav-link">
                Home
              </Typography>
              <Typography variant="body1" className="nav-link">
                Gift
              </Typography>
              <Typography variant="body1" className="nav-link">
                Order
              </Typography>
              <Typography variant="body1" className="nav-link">
                Store
              </Typography>
            </Grid>
            <Grid item={true}>
              <IconButton disableRipple={true} size="small">
                <Avatar alt="Remy Sharp" src={User} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
