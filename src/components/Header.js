import React from "react";
import logo from "../Images/cdaily.png"; 
import "../CSS/Header.css";

function Header() {
  return (
    <header className="bg-black h-26">
      <div className="flex justify-between items-center h-full">
        <a href="/"><img src={logo} alt="logo" className="logo mt-1 mb-1 ml-5" /></a>
        <div className="flex mb-5 mr-3 text-3xl">
        <a href="/ratesExtension" className="text-white tab mt-4">Rates Extension</a>
          <a href="/extension" className="text-white tab mt-4">Extension</a>
        </div>
      </div>
    </header>
  );
}

export default Header;