import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return (<header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="text-2xl font-bold text-blue-600">
        MeuSite
      </a>

      {/* Links Desktop */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Início
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Sobre
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Contato
        </a>
      </nav>

      {/* Botão de Login */}
      <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Login
      </button>

      {/* Menu Mobile */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Menu Mobile Dropdown */}
    {menuOpen && (
      <nav className="md:hidden bg-white border-t">
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Início
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Sobre
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Contato
        </a>
        <a href="#" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">
          Login
        </a>
      </nav>
    )}
  </header>)
}