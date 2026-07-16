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
];

const Testimonials = () => {
    return (
        <div id="team" className='pb-[156.67px]'>
            <div className='w-full max-w-[1550px] mx-auto flex items-center justify-between pb-[79.83px]'>
                <h1 className='font-medium text-[56.4px] leading-[120%] tracking-[0%] text-[#D0D1E3]'>
                    Powered by HashEx
                </h1>
                <p className='font-normal text-[15.67px] leading-[150%] tracking-[0%] text-[#7F8799]'>
                    HashEx is a leading tech advisory firm in the
                    <br className="hidden xl:block" />
                    EMEA region, renowned for its impactful
                    <br className="hidden xl:block" />
                    blockchain solutions.
                </p>
            </div>
            <div className='flex items-center justify-between gap-[37.6px] pb-11.75'>
                {teamCards.map((item, index) => (
                    <div
                        key={index}
                        className="relative rounded-[18.8px] overflow-hidden bg-[#BAD6F705]" >
                        {/* Gradient border */}
                        <div className="absolute inset-0 rounded-[18.8px] pointer-events-none"
                            style={{
                                padding: '0.78px',
                                background: 'linear-gradient(180deg, rgba(34,35,56,0) 0%, #141733 100%)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                            }}
                        />
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 194 160" fill="none" preserveAspectRatio="none" >
                            <rect x="-187.217" y="-125.333" width="380.7" height="285.133" fill="url(#paint0)" />
                            <defs>
                                <radialGradient id="paint0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.13 17.23) scale(190.35 142.56)" >
                                    <stop stopColor="#613AD4" stopOpacity="0.25" />
                                    <stop offset="1" stopColor="#05050B" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="relative z-10 h-full">
                            <div className="flex items-start p-[18.8px]">
                                <div className="pr-[18.8px] shrink-0">
                                    <img
                                        src={item.company}
                                        alt="Company"
                                        className={`w-23.5 object-contain transition-transform duration-300 hover:scale-105`}
                                    />
                                </div>
                                <div className="p-[18.8px] z-10 flex flex-col gap-[62.67px] rounded-[12.53px] bg-[#FFFFFF01] shadow-[inset_0_0_37.6px_0_rgba(199,211,234,0.05)]">
                                    <p className="font-normal text-[15.67px] leading-[140%] tracking-[0%] text-[#B4BBCC]">
                                        The burgeoning realm of decentralized finance (DeFi) demands security solutions that are both reliable and accessible to sustain its growth and evolution. The security Recognizing this vital need, we introduced CryptEx
                                    </p>
                                    <div className="flex items-center gap-[9.4px]">
                                        <div className="">
                                            <img
                                                src={item.profile}
                                                alt="Company"
                                                className={`w-11.75 h-11.75 object-contain transition-transform duration-300 hover:scale-105 rounded-full`}
                                            />
                                        </div>
                                        <div className="fale flex-col gap-[3.13px]">
                                            <p className="font-normal text-[14.1px] leading-[145%] tracking-[0%] text-[#9DA4B2]">
                                                {item.role}
                                            </p>
                                            <p className="font-medium text-[15.67px] leading-[120%] tracking-[0%] text-[#D0D1E3]">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center gap-[18.8px]'>
                <div className='flex items-center justify-center cursor-pointer'
                    style={{
                        width: '62.67px',
                        height: '62.67px',
                        borderRadius: '9999px',
                        background: '#99C1EF0A',
                        backdropFilter: 'blur(6.27px)',
                        WebkitBackdropFilter: 'blur(6.27px)',
                        position: 'relative',
                    }}
                >
                    {/* Gradient border */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '9999px',
                            padding: '0.78px',
                            background: 'linear-gradient(280deg, rgba(34,35,56,0) 0%, #1B1C33 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                        }}
                    />
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9666 20.3669L3.1333 12.5335L10.9666 4.7002M3.1333 12.5335H21.9333" stroke="white" stroke-width="1.56667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex items-center justify-center cursor-pointer'
                    style={{
                        width: '62.67px',
                        height: '62.67px',
                        borderRadius: '9999px',
                        background: '#99C1EF0A',
                        backdropFilter: 'blur(6.27px)',
                        WebkitBackdropFilter: 'blur(6.27px)',
                        position: 'relative',
                    }}
                >
                    {/* Gradient border */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '9999px',
                            padding: '0.78px',
                            background: 'linear-gradient(90deg, rgba(34,35,56,0) 0%, #1B1C33 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                        }}
                    />
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1 20.3669L21.9334 12.5335L14.1 4.7002M21.9334 12.5335H3.13336" stroke="white" stroke-width="1.56667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
