import "./App.css";
import {ThemeProvider} from '@mui/material'
import theme from './assets/theme'
import { lazy, Suspense, useEffect} from "react";
import { AnimatePresence} from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import MotionDiv from "./components/MotionDiv";



const NotFound = lazy(() => import("./components/NotFound"));

const Auth = ({ children }) => {
  const isLogged = localStorage.getItem("logged"); //falta auth en Login
  if (!isLogged) {
    return <Navigate to="/login" replace={true} />;
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
