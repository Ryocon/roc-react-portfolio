import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Footer from './Footer'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CVPage from './pages/CVPage';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <HomePage />;
    }
    if (currentPage === 'Projects') {
      return <ProjectsPage />;
    }
    if (currentPage === 'Contact') {
      return <ContactPage />;
    }
    return <CVPage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <MenuBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
