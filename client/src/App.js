import {RootLayout} from "./components"
import {Dashboard,Ideas,Register} from "./pages"
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import "./styles/index.scss"
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
  
    <Route>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/ideas" element={<Ideas/>}></Route>
    </Route>
    <Route path="/register" element={<Register/>}></Route>
    </Route>

  ))
  return (
    <div className="App">
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
