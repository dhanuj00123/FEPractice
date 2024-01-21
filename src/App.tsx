import "./App.css";
import { Suspense, lazy, useState } from "react";
// import  Dashboard  from "./components/Dashboard/dashboard";
import HeroPage from "./components/heroPage/heroPage";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountContext } from "./context";
const Dashboard = lazy(() => import("./components/Dashboard/dashboard"));
function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <BrowserRouter>
        <CountContext.Provider value={count}>
          <NavBar />
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
        </CountContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
