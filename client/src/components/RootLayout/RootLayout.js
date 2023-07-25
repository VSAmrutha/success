import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import {Outlet} from 'react-router-dom';
const RootLayout = () => {
  return (
    <div>
    <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
export default RootLayout


