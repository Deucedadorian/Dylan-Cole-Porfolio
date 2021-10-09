import React from 'react';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs(props) {
  return (
    <div className="default-tag-structure" id="nav-section">
      <h1 id="title">Dylan Cole Portfolio</h1>
      <nav className="nav nav-tabs link-list">
        <a
          href="#about" onClick={() => props.handlePageChange('about')}
          className={props.currentPage === 'about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="#my-work" onClick={() => props.handlePageChange('my-work')}
          className={props.currentPage === 'my-work' ? 'nav-link active' : 'nav-link'}
        >
          My Work
        </a>
        <a
          href="#contact" onClick={() => props.handlePageChange('contact')}
          className={props.currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        <a
          href="#resume"
          onClick={() => props.handlePageChange('resume')}
          className={props.currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </nav>
    </div>
  );
}

export default NavTabs;
