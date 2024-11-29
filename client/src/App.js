import React from "react";
import Home from "./Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ProductDisplay from "./ProductDisplay";
import CartPage from "./CartPage";
import HeightsItSolutions from "./HeightsItSolutions";
import HeightsItsolutionsHomepage from "./HeightsItsolutionsHomepage";
import HeightsITsolutionsRegistrationPage from "./HeightsITsolutionsRegistrationPage";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/productDisplay/:id" element={<ProductDisplay/>}/>
          <Route path="/cartPage" element={<CartPage/>}/>
          <Route path="/heightsItSolutionsHomepage" element={<HeightsItsolutionsHomepage/>}/>
          <Route path="/heightsItSolutionsRegistrationPage" element={<HeightsITsolutionsRegistrationPage/>}/>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
