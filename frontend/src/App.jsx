import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./Create.jsx"
import View from "./View.jsx"
import Edit from "./Edit.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/view/:id' element={<View/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
