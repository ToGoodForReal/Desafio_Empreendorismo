import '../style.css'
import { useState } from 'react'


export default function Header() {

    // Mobile Menu Toggle
    const [menuMobile, setMenuMobile] = useState(false);

    const toggleMenuMobile = () => {
        setMenuMobile(!menuMobile);
    };

    return (

        <header id="inicio" className="bg-luminis-deep/80 bg-white/80 backdrop-blur-sm sticky top-0 z-50">

            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-3xl font-serif-alt text-luminis-dark tracking-widest">Luminis</h1>

                {/* Navegação */}
                <nav className="hidden md:flex space-x-8"> 
                    <a href="#portfolio" className="hover:text-luminis-accent transition-colors duration-300">Portfólio</a>
                    <a href="#sobre" className="hover:text-luminis-accent transition-colors duration-300">Sobre Nós</a>
                    <a href="#precos" className="hover:text-luminis-accent transition-colors duration-300">Orçamentos</a>
                    <a href="#duvidas" className="hover:text-luminis-accent transition-colors duration-300">Dúvidas & Reserva</a>
                </nav>

                {/* Botão do Menu Mobile */}
                <button id="mobile-menu-button" className="md:hidden text-2xl" onClick={toggleMenuMobile}>
                    <img src="/menu-hamburguer.svg" alt="Menu" className="w-6 h-6" />
                </button>
            </div>

            {/* Menu Mobile */}
            <div id="mobile-menu" className="hidden md:hidden px-6 pb-4" style={{ display: menuMobile ? 'block' : 'none' }}>
                <a href="#portfolio" className="block py-2 hover:text-luminis-accent">Portfólio</a>
                <a href="#sobre" className="block py-2 hover:text-luminis-accent">Sobre Nós</a>
                <a href="#precos" className="block py-2 hover:text-luminis-accent">Orçamentos</a>
                <a href="#duvidas" className="block py-2 hover:text-luminis-accent">Dúvidas & Reserva</a>
            </div>

        </header>

    )
}