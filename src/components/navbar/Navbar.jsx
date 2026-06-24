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

    return (
        <div className="py-[25.07px] flex items-center justify-between px-37">
            <div className="flex items-center gap-[6.27px]">
                <img src={navbar_logo} alt="Logo" className="h-[31.33px] w-auto cursor-pointer" />
                <p className="font-medium text-[18.8px] text-[#CDD6DA] leading-[120%] tracking-[0%]">
                    CryptEx
                </p>
            </div>

            <div className="flex gap-[31.33px]">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.path}
                        className="text-[#CDD6DA] text-[14.1px] font-normal leading-[120%] tracking-[0%]"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="flex gap-[9.4px]">
                <div className="relative p-[12.53px] rounded-full cursor-pointer"
                    style={{
                        background: 'linear-gradient(180deg, rgba(5,5,31,0.1) 0%, rgba(255,255,255,0.1) 100%)',
                    }}>
                    <div className="absolute p-[0.87px] inset-0 rounded-full"
                        style={{
                            background: 'linear-gradient(180deg, #1B1C33 0%, rgba(34,35,56,0) 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                        }} />
                    <img src={navbar_logo2} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px]" />
                </div>
                <div className="relative p-[12.53px] rounded-full cursor-pointer"
                    style={{
                        background: 'linear-gradient(180deg, rgba(5,5,31,0.1) 0%, rgba(255,255,255,0.1) 100%)',
                    }}>
                    <div className="absolute p-[0.87px] inset-0 rounded-full"
                        style={{
                            background: 'linear-gradient(180deg, #1B1C33 0%, rgba(34,35,56,0) 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                        }} />
                    <img src={navbar_logo3} alt="Logo" className="h-[21.933332443237305px] w-[21.933332443237305px]" />
                </div>

                <button className="relative flex items-center gap-[6.15px] py-[14.88px] pl-[25.07px] pr-[15.67px] rounded-full"
                    style={{
                        background: 'linear-gradient(180deg, rgba(5,5,31,0.1) 0%, rgba(255,255,255,0.1) 100%)',
                    }}>
                    <span style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '47px',
                        padding: '0.78px',
                        background: 'linear-gradient(180deg, #1B1C33 0%, rgba(34,35,56,0) 100%)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        pointerEvents: 'none',
                    }} />
                    <span className="font-medium text-[14.1px] text-[#F5FCFF] leading-[120%] tracking-[0%]">
                        Request audit
                    </span>
                    <span className="flex items-center justify-center w-[17.23px] h-[17.23px] rounded-[36.93px] bg-[#724BE4] p-[4.31px]">
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.13905 5.7547L6.83176 3.06199L4.13905 0.369286M6.83176 3.06199H0.369263" stroke="white" stroke-width="0.738571" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
