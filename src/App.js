import "./App.css";
import {ThemeProvider} from '@mui/material'
import theme from './assets/theme'
import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route,  useNavigate  } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MotionDiv from "./components/MotionDiv";



const NotFound = lazy(() => import("./components/NotFound"));

const Auth = ({ children }) => {
  const navigateTo = useNavigate();
  const isLogged = localStorage.getItem("logged"); //falta auth en Login
  if (!isLogged) {
    return navigateTo("/login", {replace: true})
  }
  return children;
};

export default function App() {
  // console.log(isLogged)
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <MotionDiv>
                <Auth>
                  <Home />
                </Auth>
              </MotionDiv>
            }
          />
          <Route
            path="/login"
            element={
              <MotionDiv>
                <Login />
              </MotionDiv>
            }
          />
          <Route
            path="/register"
            element={
              <MotionDiv>
                <Register />
              </MotionDiv>
            }
          />
          <Route
            path="*"
            element={
              <MotionDiv>
                <Suspense fallback={<>Loading....</>}>
                  <NotFound />
                </Suspense>
              </MotionDiv>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
    </ThemeProvider>
  );
}
