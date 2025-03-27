import React, { Suspense, useEffect } from "react";
import "./index.css";
import LandingPage from "./Pages/LandingPage";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Landinglayout from "./Layouts/Landinglayout";
import Contact from "./Pages/Contact";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";
import Organization from "./Pages/auth/Organization";
import Cooperative from "./Pages/auth/Cooperative";
import Frontpage from "./Pages/auth/Frontpage";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./redux/loadingSlice";
import Loader from "./Components/Loader";

const Loading = () => <div><Loader /></div>;

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(setLoading(true));

    const timeout = setTimeout(() => {
      dispatch(setLoading(false));
    }, 500);

    return () => clearTimeout();
  }, [location, dispatch]);
  return <div>
    { isLoading && <Loading />}
    {
      !isLoading && (
        <Routes>
          <Route
            path="/"
            element={
              <Landinglayout>
                <LandingPage />
              </Landinglayout>
            }
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signup/organization" element={<Organization />} />
          <Route path="/auth/signup/cooperative" element={<Cooperative />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth" element={<Frontpage />} />
        </Routes>
      )
    }
  </div>;
};

export default App;
