import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import DoctorDetail from "../Component/DoctorDetail";
import AllDoctors from "../Page/All Doctors/AllDoctors";

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
          path : "/doctorDetail/:id",
          element : <DoctorDetail/>
        }
    ]
  },
]);


export default router