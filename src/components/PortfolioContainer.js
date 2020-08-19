import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("Home")

  let handlePageChange = setCurrentPage

  let renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        console.log("err")
    }
  };

  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}


export default Portfolio;
