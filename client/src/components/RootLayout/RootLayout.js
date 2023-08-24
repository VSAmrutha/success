import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import {Outlet} from 'react-router-dom';
//import {Provider} from "react-redux"
//import store from "../../redux/store"
const RootLayout = () => {
  return (
    //<Provider store={store}>
    <div>
    <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
    //</Provider>
  )
}
export default RootLayout


