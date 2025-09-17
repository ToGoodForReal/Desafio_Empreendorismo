import '../style.css'
export default function Header() {
    return (
        <header id="inicio" class="bg-luminis-deep/80 backdrop-blur-sm sticky top-0 z-50">

            <div class="container mx-auto px-6 py-4 flex justify-between items-center">

                <!-- Logo -->
                <h1 class="text-3xl font-serif-alt text-white tracking-widest">Luminis</h1>

                <!-- Navegação -->
                <nav class="hidden md:flex space-x-8">
                    <a href="#portfolio" className="hover:text-luminis-accent transition-colors duration-300">Portfólio</a>
                    <a href="#sobre" class="hover:text-luminis-accent transition-colors duration-300">Sobre Nós</a>
                    <a href="#precos" class="hover:text-luminis-accent transition-colors duration-300">Orçamentos</a>
                    <a href="#duvidas" class="hover:text-luminis-accent transition-colors duration-300">Dúvidas &
                        Reserva</a>
                </nav>

                <!-- Botão do Menu Mobile -->
                <button id="mobile-menu-button" class="md:hidden text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <!-- Menu Mobile -->
            <div id="mobile-menu" class="hidden md:hidden px-6 pb-4">
                <a href="#portfolio" class="block py-2 hover:text-luminis-accent">Portfólio</a>
                <a href="#sobre" class="block py-2 hover:text-luminis-accent">Sobre Nós</a>
                <a href="#precos" class="block py-2 hover:text-luminis-accent">Orçamentos</a>
                <a href="#duvidas" class="block py-2 hover:text-luminis-accent">Dúvidas & Reserva</a>
            </div>

        </header>
    )
}