import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/PhotoGallery";
import Video from "./components/VideoGallery";
import Software from "./components/SoftwareGallery";
import UXUI from "./components/UXUIGallery";
import NavigationTabs from "./components/NavigationTabs";

const App = () => {
  return (
    <div className="main-content">
      <Header />
      <NavigationTabs />

      <div className="page-body">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/video" element={<Video />} />
          <Route path="/frontend" element={<Software />} />
          <Route path="/uxui" element={<UXUI />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
