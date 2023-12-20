import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SalesPage from "./pages/SalesPage";
import MenuPage from "./pages/MenuPage";
import OthersPage from "./pages/OthersPage";
import DrinksPage from "./pages/DrinksPage";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import OrderPage from "./pages/OrderPage";
import LocationPage from "./pages/LocationPage";

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/sales' element={<SalesPage/>}/>
            <Route path='/menu' element={<MenuPage/>}/>
            <Route path='/others' element={<OthersPage/>}/>
            <Route path='/drinks' element={<DrinksPage/>}/>
            <Route path='/order' element={<OrderPage/>}/>
            <Route path='/location' element={<LocationPage/>}/>
        </Routes>
        <Footer/>
        <Modal/>
    </>
  );
}

export default App;
