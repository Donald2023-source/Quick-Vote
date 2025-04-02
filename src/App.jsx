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
import OrganizationDashboard from "./Pages/Dashboards/Organization";
import Cooperative from "./Pages/auth/Cooperative";
import Frontpage from "./Pages/auth/Frontpage";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./redux/loadingSlice";
import Loader from "./Components/Loader";
import Student from "./Pages/Dashboards/Student";
import Dashboard from "./Layouts/Dashboard";
import Vote from "./Pages/Vote";

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
          <Route path="/auth/signup/student" element={<Signup />} />
          <Route path="/auth/signup/organization" element={<Organization />} />
          <Route path="/auth/signup/cooperative" element={<Cooperative />} />
          <Route path="/auth/student/login" element={<Login />} />
          <Route path="/auth" element={<Frontpage />} />
          <Route path="/student/vote" element={<Dashboard><Vote /></Dashboard>} />
          <Route path="/student-dashboard" element={<Dashboard><Student /></Dashboard>} />
          <Route path="/cooperative-dashboard" element={<Dashboard><Cooperative /></Dashboard>} />
          <Route path="/dashboard/:name" element={<OrganizationDashboard />} />
        </Routes>
      )
    }
  </div>;
};

export default App;
