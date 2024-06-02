import { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import AddProducts from "./Components/AddProducts";
import UpdateProducts from "./Components/UpdateProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import Pages from "./Components/Pages";
import "./index.css";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import ViewProducts from "./Components/ViewProducts";

export default function App() {
  return (
    <main>
      <>
        <BrowserRouter>
             <Sidebar />
          <div className="ms-[250px]">
            <Header /> 
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/updateproducts" element={<UpdateProducts />} />
            <Route path="/viewproducts" element={<ViewProducts/>} />
            {/* <Route path="/" element={<Home/>} />
            <Route path="/Shop" element={<Shop/>} />
            <Route path="/Blogs" element={<Blogs/>} />
            <Route path="/Pages" element={<Pages/>} />
            <Route path="/Contact" element={<Contact/>} /> */}
          </Routes>
            </div>
        </BrowserRouter>
      </>
    </main>
  );
}
