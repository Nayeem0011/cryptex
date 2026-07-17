import { useRef } from "react";

import company7 from "../../assets/image/company_logo7.png";
import company8 from "../../assets/image/company_logo8.png";
import company9 from "../../assets/image/company_logo9.png";
import profile from "../../assets/image/profile.jpg";
import profile2 from "../../assets/image/profile2.jpg";
import profile3 from "../../assets/image/profile3.jpg";

const teamCards = [
    {
        company: company7,
        profile: profile,
        role: "Chief Technical Officer",
        name: "Gled Zykov",
    },
    {
        company: company8,
        profile: profile2,
        role: "Chief Executive Founder",
        name: "Dmitry Mishunin",
    },
    {
        company: company9,
        profile: profile3,
        role: "Chief Operating Officer",
        name: "Ksenia Borodulina",
    },
    {
        company: company7,
        profile: profile,
        role: "Chief Technical Officer",
        name: "Gled Zykov",
    },
    {
        company: company8,
        profile: profile2,
        role: "Chief Executive Founder",
        name: "Dmitry Mishunin",
    },
    {
        company: company9,
        profile: profile3,
        role: "Chief Operating Officer",
        name: "Ksenia Borodulina",
    },
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scrollByCards = (direction) => {
        if (!scrollRef.current) return;

        const firstCard = scrollRef.current.querySelector("[data-card]");

        if (!firstCard) return;

        const gap = 38;
        const scrollAmount = firstCard.offsetWidth + gap;

        scrollRef.current.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div id="team" className='team-section'>
            <div className='team-section-inner'>
                <h1 className='team-title-lg'>
                    Powered by HashEx
                </h1>
                <p className='team-section-desc'>
                    HashEx is a leading tech advisory firm in the
                    <br className="hidden lg:block" />
                    EMEA region, renowned for its impactful
                    <br className="hidden lg:block" />
                    blockchain solutions.
                </p>
            </div>
            <div
                ref={scrollRef}
                className="team-card-scroll overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
                {teamCards.map((item, index) => (
                    <div
                        key={index}
                        data-card
                        className="team-card" >
                        {/* Gradient border */}
                        <div className="team-card-border" />
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 194 160" fill="none" preserveAspectRatio="none" >
                            <rect x="-187.217" y="-125.333" width="380.7" height="285.133" fill="url(#paint0)" />
                            <defs>
                                <radialGradient id="paint0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.13 17.23) scale(190.35 142.56)" >
                                    <stop stopColor="#613AD4" stopOpacity="0.25" />
                                    <stop offset="1" stopColor="#05050B" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="relative flex flex-col lg:flex-row items-start p-2.75 sm:p-3 md:p-3.25 lg:p-3.5 xl:p-4 2xl:p-[18.8px]">
                            <div className="shrink-0 pb-1">
                                <img
                                    src={item.company}
                                    alt="Company"
                                    className={`w-23.5 object-contain transition-transform duration-300 hover:scale-105`}
                                />
                            </div>
                            <div className="team-card-body">
                                <p className="team-card-quote">
                                    The burgeoning realm of decentralized finance (DeFi) demands security solutions that are both reliable and accessible to sustain its growth and evolution. The security Recognizing this vital need, we introduced CryptEx
                                </p>
                                <div className="flex items-center gap-[5.4px] md:gap-[7.4px] lg:gap-[9.4px]">
                                    <div className="">
                                        <img
                                            src={item.profile}
                                            alt="Company"
                                            className={`w-7 md:w-8 lg:w-9 xl:w-10 2xl:w-11.75 h-7 md:h-8 lg:h-9 xl:h-10 2xl:h-11.75 object-contain transition-transform duration-300 hover:scale-105 rounded-full`}
                                        />
                                    </div>
                                    <div className="fale flex-col gap-0 md:gap-[3.13px]">
                                        <p className="team-card-role">
                                            {item.role}
                                        </p>
                                        <p className="team-card-name">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center gap-[10.8px] sm:gap-[12.8px] md:gap-[16.8px] lg:gap-[18.8px]'>
                <button
                    type="button"
                    onClick={() => scrollByCards(-1)}
                    className="scroll-btn">
                    {/* Gradient border */}
                    <div className="scroll-btn-border scroll-btn-border-left" />
                    <svg className="w-4 sm:w-4.5 md:w-5 lg:w-5.5 xl:w-6 2xl:w-6.5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9666 20.3669L3.1333 12.5335L10.9666 4.7002M3.1333 12.5335H21.9333" stroke="white" stroke-width="1.56667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => scrollByCards(1)}
                    className="scroll-btn">
                    {/* Gradient border */}
                    <div className="scroll-btn-border scroll-btn-border-right" />
                    <svg className="w-4 sm:w-4.5 md:w-5 lg:w-5.5 xl:w-6 2xl:w-6.5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1 20.3669L21.9334 12.5335L14.1 4.7002M21.9334 12.5335H3.13336" stroke="white" stroke-width="1.56667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Testimonials;
