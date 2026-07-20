import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

    // GSAP refs
    const navBarRef = useRef(null);
    const logoRef = useRef(null);
    const navLinksRef = useRef([]);
    const iconsWrapRef = useRef(null);
    const sidebarRef = useRef(null);
    const overlayRef = useRef(null);
    const menuBtnRef = useRef(null);

    const addLinkRef = (el) => {
        if (!el) return;

        if (!navLinksRef.current.includes(el)) {
            navLinksRef.current.push(el);
        }
    };

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

    useGSAP(() => {
        gsap.set(sidebarRef.current, { xPercent: 100 });
        gsap.set(overlayRef.current, { opacity: 0, visibility: "hidden" });

        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            delay: 0.2,
        });

        tl.fromTo(
            logoRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.7 },
            0
        )
            .fromTo(
                menuBtnRef.current,
                { opacity: 0, x: 30, scale: 0.9 },
                { opacity: 1, x: 0, scale: 1, duration: 0.7 },
                0
            )
            .fromTo(
                navLinksRef.current,
                { opacity: 0, y: -15 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
                0.2
            )

            .fromTo(
                iconsWrapRef.current?.children || [],
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.7, stagger: 0.08 },
                0
            );
    }, { scope: navBarRef });

    // 2. Scroll navbar hide/show — GSAP smooth
    useGSAP(() => {
        gsap.to(navBarRef.current, {
            yPercent: isVisible ? 0 : -100,
            duration: 0.5,
            ease: "power3.inOut",
        });
    }, [isVisible]);

    // ৩. Mobile sidebar open/close animation
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (isOpen) {
            tl.to(overlayRef.current, {
                opacity: 1,
                visibility: "visible",
                duration: 0.3,
            }, 0).to(sidebarRef.current, {
                xPercent: 0,
                duration: 0.45,
                ease: "power3.out",
            }, 0);
        } else {
            tl.to(sidebarRef.current, {
                xPercent: 100,
                duration: 0.4,
                ease: "power3.in",
            }, 0).to(overlayRef.current, {
                opacity: 0,
                duration: 0.25,
            }, 0).set(overlayRef.current, { visibility: "hidden" });
        }
    }, [isOpen]);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(sidebarRef.current, {
                x: 0,
                duration: .45,
                ease: "power3.out"
            });
            gsap.to(overlayRef.current, {
                autoAlpha: 1,
                duration: .3
            });

        } else {
            gsap.to(sidebarRef.current, {
                x: "100%",
                duration: .35,
                ease: "power3.in"
            });
            gsap.to(overlayRef.current, {
                autoAlpha: 0,
                duration: .25
            });
        }
    }, [isOpen]);

    return (
        <div>
            <div ref={navBarRef}
                className={`fixed top-0 left-0 w-full z-50 ease-in-out
                ${isVisible ? "translate-y-0" : "-translate-y-full"}
                ${isScrolled ? "bg-[#05051F]/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
            >
                <div className="crx-navbar ">
                    <img
                        ref={logoRef}
                        onClick={scrollToTop}
                        src={navbar_logo}
                        alt="Logo"
                        className="h-[31.33px] w-[110.5999984741211px] cursor-pointer"
                    />
                    <button
                        ref={menuBtnRef}
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                    <div className="hidden md:flex gap-[31.33px]">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                ref={addLinkRef}
                                href={item.path}
                                className="crx-navbar-link"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div ref={iconsWrapRef} className="hidden md:flex gap-[9.4px]">
                        <button className="crx-icon-btn group overflow-visible">
                            <div className="crx-icon-btn-border" />
                            <img src={navbar_logo2} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px] transform transition-transform duration-300 ease-out group-hover:scale-110" />
                        </button>
                        <button className="crx-icon-btn group overflow-visible">
                            <div className="crx-icon-btn-border" />
                            <img src={navbar_logo3} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px] transform transition-transform duration-300 ease-out group-hover:scale-110" />
                        </button>
                        <button className="crx-audit-btn group" >
                            <span className="crx-icon-btn-border" />
                            <span className="crx-audit-btn-label">
                                Request audit
                            </span>
                            <span className="crx-audit-btn-icon transition-transform duration-300 ease-out group-hover:translate-x-1">
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.13905 5.7547L6.83176 3.06199L4.13905 0.369286M6.83176 3.06199H0.369263" stroke="white" stroke-width="0.738571" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className="fixed top-0 right-0 h-screen w-60 sm:w-70 md:w-80 bg-[#05051F] z-50"
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
                                onClick={closeSidebar}
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
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px] md:hidden"
                onClick={closeSidebar}
            />
        </div>
    )
}

export default Navbar
