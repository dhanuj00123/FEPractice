import { Grid } from "@mui/material";
import "./heroPage.css";
import { useRecoilState } from "recoil";
import { countAtom } from "../../store/atoms/count";
// import { useContext } from "react";
// import { CountContext } from "../../context";
const HeroPage = () => {
  // const count = useContext(CountContext); //context: not required since using recoil
  // const count = useRecoilValue(countAtom); // recoil: gives only the value
  // const setCount = useSetRecoilState(countAtom); //recoil: gives only the setState
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      <div className="hero-page">
        <Grid container={true}>
          <Grid item={true} xs={6}>
            <h1>{count}</h1>

            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              count
            </button>
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
