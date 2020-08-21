import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("About")

  let handlePageChange = setCurrentPage

  let renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
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
