import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="py-10"></div>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App