import './App.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import Home from './components/Home';
import Login from './components/Login';
// import Details from './components/Details';
import Errror from './components/Errror';
import Footer from "./components/Footer";
import {Routes,Route} from "react-router-dom"
import News from "./components/News";
function App() {
  return (
  <>
    <Header />
    <Routes>
    
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/login' element={<Login />} />
      {/* <Route path='/details' element={<Details />} /> */}
            <Route path='/news' element={<News />} />
      <Route path='*' element={<Errror />} />

    </Routes>
    <Footer />

  </>
  );
}

export default App;
