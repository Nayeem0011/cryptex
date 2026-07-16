import company from "../../assets/image/company_logo.png";
import company2 from "../../assets/image/company_logo2.png";
import company3 from "../../assets/image/company_logo3.png";
import company4 from "../../assets/image/company_logo4.png";
import company5 from "../../assets/image/company_logo5.png";
import company6 from "../../assets/image/company_logo6.png";

const companies = [
    { logo: company, width: "w-[203.6666717529297px]" },
    { logo: company2, width: "w-[203.6666717529297px]" },
    { logo: company3, width: "w-[203.6666717529297px]" },
    { logo: company4, width: "w-[203.6666717529297px]" },
    { logo: company5, width: "w-[203.6666717529297px]" },
    { logo: company6, width: "w-[203.6666717529297px]" },
];

const Partners = () => {
    return (
        <div id="buy-crx" className='w-full max-w-[1550px] mx-auto pt-16 sm:pt-18 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-35.25'>
            <div className='flex items-center justify-between'>
                <h1 className='font-medium text-[56.4px] leading-[120%] tracking-[0%] text-[#D0D1E3]'>
                    Partners
                </h1>
                <div className='flex items-center justify-center gap-[7.83px]'>
                    <p className='font-medium text-[17.23px] leading-[120%] tracking-[0%] text-[#D0D1E3]'>
                        Browse audit reports
                    </p>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28.2" height="28.2" rx="14.1" fill="url(#paint0_linear_2509_2054)" />
                        <path d="M14.8834 18.0167L18.8 14.1L14.8834 10.1833M18.8 14.1H9.40002" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_2509_2054" x1="14.1" y1="0" x2="14.1" y2="28.2" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4E27BC" />
                                <stop offset="1" stop-color="#A68AF9" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-[23.5px] pt-[46.37px]'>
                {companies.map((item, index) => (
                    <div
                        key={index}
                        className='relative w-full h-[155.1px] rounded-[25.07px] overflow-hidden bg-transparent shadow-[inset_0px_0px_37.6px_0px_rgba(199,211,234,0.05)]'>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 381 156" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <rect y="-130.033" width="380.7" height="285.133" fill="url(#paint0_radial_2509_2092)" />
                            <defs>
                                <radialGradient id="paint0_radial_2509_2092" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(190.35 12.5335) scale(190.35 142.567)">
                                    <stop offset="0.101224" stop-color="#613AD4" stop-opacity="0.25" />
                                    <stop offset="1" stop-color="#05050B" stop-opacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        {/* Content */}
                        <div className="relative flex h-full items-center justify-center">
                            <img
                                src={item.logo}
                                alt={`Company ${index + 1}`}
                                className={`${item.width} object-contain transition-transform duration-300 hover:scale-105`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center pt-[37.6px]">
                <button className='btn-clients'>
                    <span className='btn-clients-label'>
                        See all clients
                    </span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21.9333" height="21.9333" rx="10.9667" fill="white" />
                        <path d="M11.6521 14.3937L15.0792 10.9666L11.6521 7.53955M15.0792 10.9666H6.85419" stroke="#05051F" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default Partners
