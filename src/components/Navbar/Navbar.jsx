import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navbarRedes = [
        {
            id: 1,
            title: "Facebook",
            link: "https://www.facebook.com/profile.php?id=100038067288619",
            icon: "bi bi-facebook",
        },
        {
            id: 2,
            title: "WhatsApp",
            link: "https://wa.me/69605774", 
            icon: "bi bi-whatsapp",            
        },
        {
            id: 3,
            title: "Instagram",
            link: "https://www.instagram.com/rosa_negra_potosi/",
            icon: "bi bi-instagram",
        },
        {
            id: 4,
            title: "Tiktok",
            link: "https://www.tiktok.com/@pub.rosa.negra",
            icon: "bi bi-tiktok",
        },
    ];

    const navbarLinks = [
        {
            id: 1,
            title: "Inicio",
            link: "/",
        },
        {
            id: 2,
            title: "Nosotros",
            link: "#nosotros",
        },
        {
            id: 3,
            title: "Bebida",
            link: "#bebida",
        },
        {
            id: 4,
            title: "Comida",
            link: "#comida",
        },
        {
            id: 5,
            title: "Contacto",
            link: "#contacto",
        },
    ];

    return (
        <nav className="fixed p-0 top-0 left-0 w-full bg-purple-900 bg-opacity-30 backdrop-blur-md z-50 transition-all duration-300">
            <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
                <div className="flex items-center gap-2">
                    <a href="/"><img src={Logo} alt="Logo" className="w-[120px]"/></a>
                </div>

                <button
                    className="md:hidden text-white p-2"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                <div className="hidden md:block">
                    <ul className="flex sm:space-x-8 space-x-4 px-4">
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.link}
                                    className="sm:text-lg text-sm text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-110 inline-block"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform duration-300 transform hover:scale-125"
                                >
                                    <i
                                        className={`${link.icon} sm:text-2xl text-lg text-white transition-all duration-300 hover:text-sky-100`}
                                    ></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <ul className="flex flex-col px-4 py-2">
                    {navbarLinks.map((link) => (
                        <li key={link.id} className="py-2 text-center">
                            <a
                                href={link.link}
                                className="text-white hover:text-sky-100 block"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
                    {navbarRedes.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                                onClick={() => setIsOpen(false)}
                            >
                                <i
                                    className={`${link.icon} text-lg text-white hover:text-sky-100`}
                                ></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
