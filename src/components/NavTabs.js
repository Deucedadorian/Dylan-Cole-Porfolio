import React from 'react';
import headshot from '../assets/images/headshot.png';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="default-tag-structure">
      <div>
          <img className="headShot" src={headshot} alt="A headshot of the author." />
      </div>
      <h1>Dylan Cole</h1>
    <nav className="nav nav-tabs link-list">
        <a
          href="#about" onClick={() => handlePageChange('about')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="#my-work" onClick={() => handlePageChange('my-work')}
          // Check to see if the currentPage is `MyWork`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'my-work' ? 'nav-link active' : 'nav-link'}
        >
          My Work
        </a>
        <a
          href="#contact" onClick={() => handlePageChange('contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange('resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
    </nav>
  </div>
  );
}

export default NavTabs;
