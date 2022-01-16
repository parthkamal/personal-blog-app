import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import AboutUpload from "./components/AboutUpload";
import ContactUpload from "./components/ContactUPload";
import ProjectUpload from "./components/ProjectUpload";
import ResumeUpload from "./components/ResumeUpload";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import MainDashboard from "./pages/MainDashboard";


class App extends Component {
  render() {
    return (
      <>
       <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route exact path="/" element={<MainDashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/posts" element={<Posts/>}/>
        {/* create routes */}
        <Route path="/about/create" element={<AboutUpload/>}/>
        <Route path="/contact/create" element={<ContactUpload/>}/>
        <Route path="/projects/create" element={<ProjectUpload/>}/>
        <Route path="/resume/create" element={<ResumeUpload/>}/>
        <Route path="/posts/create" element={<AboutUpload/>}/>
        {/* edit routes */}

      </Routes>
      </>
     
    );
  }
}

export default App;
