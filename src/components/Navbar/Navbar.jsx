import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className="brand-name">Ankit Yadav</h1>
        <Link to="/getuser">
          <button>Get Users</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
