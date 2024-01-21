import { Grid } from "@mui/material";
import "./heroPage.css";
import { useContext } from "react";
import { CountContext } from "../../context";
const HeroPage = () => {
  const count = useContext(CountContext);

  return (
    <>
      <div className="hero-page">
        <Grid container={true}>
          <Grid item={true} xs={6}>
            <h1>{count}</h1>
          </Grid>
          <Grid item={true} xs={6}>
            <div className="hero-image"></div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default HeroPage;
