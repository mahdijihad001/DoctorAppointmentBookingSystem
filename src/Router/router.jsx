import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import DoctorDetail from "../Component/DoctorDetail";
import AllDoctors from "../Page/All Doctors/AllDoctors";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Profile from "../Page/Profile/Profile";
import Appointment from "../Page/Appointment/Appointment";
import DashboardHome from "../Page/Dashboard/DashboardHome/DashboardHome";
import AdminOverview from "../Page/Dashboard/DashboardComponents/AdminOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
        {
            path : "/",
            element : <Home/>
        },
        {
          path : "/allDoctor",
          element : <AllDoctors/>
        },
        {
          path : "/about",
          element : <About/>
        },
        {
          path : "/contact",
          element : <Contact/>
        },
        {
          path : `/profile`,
          element : <Profile/>
        },
        {
          path : "/appointment",
          element : <Appointment/>
        },
        {
          path : "/doctorDetail/:id",
          element : <DoctorDetail/>
        }
    ]
  },
  {
    path : "/dashboard",
    element : <DashboardHome/>,
    children : [
      {
        path : "",
        element : <AdminOverview/>
      }
    ]
  }
]);


export default router