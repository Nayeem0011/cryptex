import company from "../../assets/image/company_logo.png";
import company2 from "../../assets/image/company_logo2.png";
import company3 from "../../assets/image/company_logo3.png";
import company4 from "../../assets/image/company_logo4.png";
import company5 from "../../assets/image/company_logo5.png";
import company6 from "../../assets/image/company_logo6.png";

const companies = [
    { logo: company, width: "w-20 sm:w-30 md:w-36 lg:w-40 xl:w-46 2xl:w-[203.6666717529297px]" },
    { logo: company2, width: "w-20 sm:w-30 md:w-36 lg:w-40 xl:w-46 2xl:w-[203.6666717529297px]" },
    { logo: company3, width: "w-20 sm:w-30 md:w-36 lg:w-40 xl:w-46 2xl:w-[203.6666717529297px]" },
    { logo: company4, width: "w-20 sm:w-30 md:w-36 lg:w-40 xl:w-46 2xl:w-[203.6666717529297px]" },
    { logo: company5, width: "w-20 sm:w-30 md:w-36 lg:w-40 xl:w-46 2xl:w-[203.6666717529297px]" },
    { logo: company6, width: "w-20 sm:w-30 md:w-36 lg:w-40 xl:w-46 2xl:w-[203.6666717529297px]" },
];

const Partners = () => {
    return (
        <div id="buy-crx" className='partners-section'>
            <div className='partners-header'>
                <h1 className='section-title-lg'>
                    Partners
                </h1>
                <div className='partners-browse'>
                    <p className='partners-browse-label'>
                        Browse audit reports
                    </p>
                    <svg className="w-4.5 sm:w-5 md:w-5.5 lg:w-6 xl:w-6.5 2xl:w-[28.2px] h-4.5 sm:h-5 md:h-5.5 lg:h-6 xl:h-6.5 2xl:h-[28.2px]" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div className='partner-grid'>
                {companies.map((item, index) => (
                    <div key={index} className='partner-card'>
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
                        <div className="partner-card-content">
                            <img
                                src={item.logo}
                                alt={`Company ${index + 1}`}
                                className={`partner-card-logo ${item.width}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center pt-5 md:pt-6 lg:pt-7 xl:pt-8 2xl:pt-[37.6px]">
                <button className='btn-clients'>
                    <span className='btn-clients-label'>
                        See all clients
                    </span>
                    <svg className="w-3.5 md:w-4 lg:w-4.5 xl:w-5 2xl:w-5.5 h-3.5 md:h-3.5 lg:h-4 xl:h-5 2xl:h-5.5" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21.9333" height="21.9333" rx="10.9667" fill="white" />
                        <path d="M11.6521 14.3937L15.0792 10.9666L11.6521 7.53955M15.0792 10.9666H6.85419" stroke="#05051F" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Partners;
