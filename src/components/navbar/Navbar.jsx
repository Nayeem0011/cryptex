import { useState } from "react";
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

    return (
        <div className="crx-navbar">
            <div className="flex items-center gap-[6.27px]">
                <img src={navbar_logo} alt="Logo" className="h-[31.33px] w-auto cursor-pointer" />
                <p className="font-medium text-[18.8px] text-[#CDD6DA] leading-[120%] tracking-[0%]">
                    CryptEx
                </p>
            </div>
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

            {/* Overlay */}
            <div className={`fixed inset-0 bg-white/15 z-40 transition-all duration-200 md:hidden
                    ${isOpen ? "opacity-23 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
            />

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
    )
}

export default Navbar
