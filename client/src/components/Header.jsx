import React from "react";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img
              src="https://www.nylas.com/wp-content/uploads/GraphQL_Blog@2x-1024x536.png"
              className="mr-2"
              alt="logo"
            />
            <div>Project Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
