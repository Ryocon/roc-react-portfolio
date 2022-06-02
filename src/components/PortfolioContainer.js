import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CVPage";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <HomePage />;
    }
    if (currentPage === "Projects") {
      return <ProjectsPage />;
    }
    if (currentPage === "Contact") {
      return <ContactPage />;
    }
    if (currentPage === "CV") {
      return <CVPage />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <MenuBar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer />
    </div>
  );
}
