import Navbar from "./Navbar";
import data from "./assets/data";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
