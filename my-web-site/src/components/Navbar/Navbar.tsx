function Navbar() {
    return (
        <div className="flex flex-row items-center justify-center w-screen mt-10">
            <a href="#" className="px-8">
                <span className="text-2xl tracking-widest text-white hover:opacity-50 hover:border-b-2 hover:border-b-white">
                    Home
                </span>
            </a>
            <a href="#" className="px-8">
                <span className="text-2xl tracking-widest text-white hover:opacity-50 hover:border-b-2 hover:border-b-white">
                    Sobre mim
                </span>
            </a>
            <a href="#" className="px-8">
                <span className="text-2xl tracking-widest text-white hover:opacity-50 hover:border-b-2 hover:border-b-white">
                    Projetos
                </span>
            </a>
            <a href="#" className="px-8">
                <span className="text-2xl tracking-widest text-white hover:opacity-50 hover:border-b-2 hover:border-b-white">
                    Tecnologias
                </span>
            </a>
            <a href="#" className="px-8">
                <span className="text-2xl tracking-widest text-white hover:opacity-50 hover:border-b-2 hover:border-b-white">
                    Links
                </span>
            </a>
        </div>
    );
}

export default Navbar;