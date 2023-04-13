import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import "./style.scss"
import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Catalog";
import Content from "./Components/Content/Content";
import Second from './Components/Content/Concept/second/Second'


function App() {
  return (
    <div className="App">
         <Routes>
             <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/card' element={<Content/>}/>
                <Route path='/swiper' element={<Second/>}/>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
