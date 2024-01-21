import { Grid } from "@mui/material";
import "./heroPage.css";
const HeroPage = () => {
  return (
    <>
      <div className="hero-page">
        <Grid container={true}>
          <Grid item={true} xs={6}></Grid>
          <Grid item={true} xs={6}>
            <div className="hero-image"></div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default HeroPage;
