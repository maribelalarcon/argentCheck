import React from "react";
import Anadir from "../assets/anadir.png";
import Usuario from "../assets/usuario.png";

export default function Navbar() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="font-fontsemibold text-2xl">ADR</span>
        <nav className="flex mt-4 md:mt-0">
          <button>
            <img src={Anadir} alt="Anadir" className="w-6 h-6 mr-2" />
          </button>
          <button>
            <img src={Usuario} alt="Usuario" className="w-6 h-6 mr-2" />
          </button>
        </nav>
      </div>
    </header>
  );
}
