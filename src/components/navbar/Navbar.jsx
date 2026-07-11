import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import navbar_logo from "../../assets/image/navbar_logo.png";
import navbar_logo2 from "../../assets/image/navbar_logo2.png";
import navbar_logo3 from "../../assets/image/navbar_logo3.png";

const navItems = [
    { name: "Products", path: "#products" },
    { name: "Tokenomics", path: "#tokenomics" },
    { name: "Buy CRX", path: "#buy-crx" },
    { name: "Team", path: "#team" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 20);

            if (currentScrollY <= 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll while the mobile sidebar is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeSidebar = () => setIsOpen(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeSidebar();
    };

    return (
        <div>
            <div
                className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out
                ${isVisible ? "translate-y-0" : "-translate-y-full"}
                ${isScrolled ? "bg-[#05051F]/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
            >
                <div className="crx-navbar ">
                    <img onClick={scrollToTop} src={navbar_logo} alt="Logo" className="h-[31.33px] w-[110.5999984741211px] cursor-pointer" />
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                    <div className="hidden md:flex gap-[31.33px]">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="crx-navbar-link"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:flex gap-[9.4px]">
                        <div className="crx-icon-btn">
                            <div className="crx-icon-btn-border" />
                            <img src={navbar_logo2} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px]" />
                        </div>
                        <div className="crx-icon-btn">
                            <div className="crx-icon-btn-border" />
                            <img src={navbar_logo3} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px]" />
                        </div>
                        <button className="crx-audit-btn" >
                            <span className="crx-icon-btn-border" />
                            <span className="crx-audit-btn-label">
                                Request audit
                            </span>
                            <span className="crx-audit-btn-icon">
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.13905 5.7547L6.83176 3.06199L4.13905 0.369286M6.83176 3.06199H0.369263" stroke="white" stroke-width="0.738571" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div className={`fixed top-0 right-0 h-screen w-60 sm:w-70 md:w-80 bg-[#05051F] z-50 transform transition-transform duration-300 
                    ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <div className="flex justify-between items-center p-6 border-b border-white/10">
                            <h2 className="text-white font-semibold">
                                Menu
                            </h2>
                            <button
                                className="text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col p-6 gap-6">
                            <div className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.path}
                                        className="crx-navbar-link"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="flex flex-col gap-6">
                                <button className="crx-audit-btn w-40" >
                                    <span className="crx-icon-btn-border" />
                                    <span className="crx-audit-btn-label">
                                        Request audit
                                    </span>
                                    <span className="crx-audit-btn-icon">
                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.13905 5.7547L6.83176 3.06199L4.13905 0.369286M6.83176 3.06199H0.369263" stroke="white" stroke-width="0.738571" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <div className="flex gap-6">
                                    <div className="crx-icon-btn">
                                        <div className="crx-icon-btn-border" />
                                        <img src={navbar_logo2} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px]" />
                                    </div>
                                    <div className="crx-icon-btn">
                                        <div className="crx-icon-btn-border" />
                                        <img src={navbar_logo3} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overlay */}
            <div className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px] transition-all duration-200 md:hidden
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
            />
        </div>
    )
}

export default Navbar
