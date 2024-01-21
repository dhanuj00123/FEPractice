import "./App.css";
import { Suspense, lazy } from "react";
// import  Dashboard  from "./components/Dashboard/dashboard";
import HeroPage from "./components/heroPage/heroPage";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { evenSelector } from "./store/selectors/count";
// import { CountContext } from "./context";
const Dashboard = lazy(() => import("./components/Dashboard/dashboard"));
function App() {
  // const [count, setCount] = useState<number>(0); // not required since using recoil
  return (
    <>
      <BrowserRouter>
        {/* <CountContext.Provider value={count}> */}
        <RecoilRoot>
          {/*recoil provider*/}
          <NavBar />
          <EvenCountRender />
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={"...loading"}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Routes>
        </RecoilRoot>
        {/* </CountContext.Provider> */}
      </BrowserRouter>
    </>
  );
}
const EvenCountRender = () => {
  const isEven = useRecoilValue(evenSelector); // selector
  return isEven ? <div> it is even </div> : <></>;
};

export default App;
