import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/MainDashboard";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import AboutUpload from "./components/AboutUpload";
import ContactUpload from "./components/ContactUPload";

class App extends Component {
  render() {
    return (
      <>
       <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/posts" element={<Posts/>}/>
        {/* create routes */}
        <Route path="/about/create" element={<AboutUpload/>}/>
        <Route path="/contact/create" element={<ContactUpload/>}/>
        <Route path="/projects/create" element={<AboutUpload/>}/>
        <Route path="/resume/create" element={<AboutUpload/>}/>
        <Route path="/posts/create" element={<AboutUpload/>}/>
        {/* edit routes */}

      </Routes>
      </>
     
    );
  }
}

export default App;
