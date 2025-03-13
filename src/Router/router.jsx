import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import DoctorDetail from "../Component/DoctorDetail";

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
          path : "/doctorDetail/:id",
          element : <DoctorDetail/>
        }
    ]
  },
]);


export default router