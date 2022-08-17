import React from "react";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img
              src="https://camo.githubusercontent.com/2d166e29cf00d111cb44afb30ec86c4fd35fd31228a3c14e9fb293485c1ae9e7/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f33413061324e314c3346324f304c3377326e316a2f477261706869514c382e706e673f582d436c6f75644170702d56697369746f722d49643d3433363432"
              className="mr-2"
              alt="logo"
            />
            <div>Project and Client Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
