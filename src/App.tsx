import "./App.css";
import { Suspense, lazy } from "react";
// import  Dashboard  from "./components/Dashboard/dashboard";
import HeroPage from "./components/heroPage/heroPage";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard/dashboard"));
function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
