const footerLinks = [
    { name: "Products", path: "#products" },
    { name: "Tokenomics", path: "#tokenomics" },
    { name: "Buy CRX", path: "#buy-crx" },
    { name: "Ambassadors", path: "#ambassadors" },
    { name: "Team", path: "#team" },
];

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-row'>
                <div className='footer-links-buttons'>
                    <div className="footer-nav-links">
                        {footerLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="footer-link"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="footer-socials">
                        <button className='btn-footer-audit'>
                            Request Audit
                        </button>
                        <div className='flex gap-[12.53px]'>
                            <button className="footer-social-btn">
                                {/* Gradient border */}
                                <div className="footer-social-btn-border" />
                                <svg className="w-4.5 md:w-5 lg:w-5.25 xl:w-5.5 2xl:w-5.75" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.34491 4.7088C4.69352 4.66817 5.0359 4.8242 5.23393 5.11396C6.62721 7.15263 8.30068 8.00072 10.1575 8.19367C10.2487 7.39929 10.463 6.61439 10.866 5.92335C11.4571 4.90945 12.4184 4.163 13.7917 3.88717C15.6893 3.50603 17.1341 4.19323 17.9725 5.03485L19.6646 4.71853C20.0261 4.65097 20.3938 4.79933 20.6073 5.09876C20.8206 5.3982 20.8408 5.79426 20.6589 6.11384L19.0351 8.96775C19.1832 13.0864 18.0386 15.9608 15.5983 17.9411C14.3038 18.9915 12.4515 19.5873 10.4182 19.7712C8.369 19.9566 6.05266 19.7324 3.75003 19.06C3.34606 18.9421 3.06889 18.571 3.07038 18.1502C3.07187 17.7293 3.35164 17.3603 3.75644 17.2452C4.91442 16.9159 5.79578 16.6312 6.59248 16.134C5.46072 15.5331 4.6268 14.7476 4.03659 13.852C3.21626 12.6073 2.91207 11.2196 2.85168 9.9681C2.7913 8.71668 2.97214 7.55762 3.16261 6.72108C3.27103 6.24489 3.39767 5.76647 3.57222 5.30945C3.699 4.98006 3.99631 4.74945 4.34491 4.7088Z" fill="url(#paint0_linear_2509_2432)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2509_2432" x1="11.8112" y1="3.7793" x2="11.8112" y2="19.8337" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4E27BC" />
                                            <stop offset="1" stop-color="#A68AF9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                            <button className="footer-social-btn">
                                {/* Gradient border */}
                                <div className="footer-social-btn-border" />
                                <svg className="w-4.5 md:w-5 lg:w-5.25 xl:w-5.5 2xl:w-5.75" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6949 4.5695C18.5638 4.20364 19.4953 4.93838 19.3419 5.8686L17.5297 16.8559C17.355 17.9152 16.1915 18.5231 15.2195 17.9952C14.4062 17.5534 13.1996 16.8735 12.1121 16.1629C11.5691 15.8081 9.9063 14.6703 10.1107 13.8603C10.2854 13.1678 13.0808 10.5657 14.6781 9.01829C15.3056 8.41044 15.0198 8.05928 14.2788 8.61895C12.4405 10.0073 9.48925 12.1181 8.51329 12.7122C7.6522 13.2363 7.20261 13.3258 6.66633 13.2363C5.68704 13.0731 4.77912 12.8204 4.03788 12.5132C3.03603 12.0979 3.08483 10.7211 4.0372 10.3201L17.6949 4.5695Z" fill="url(#paint0_linear_2509_2437)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2509_2437" x1="11.3316" y1="4.47363" x2="11.3316" y2="18.1889" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4E27BC" />
                                            <stop offset="1" stop-color="#A68AF9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                            <button className="footer-social-btn">
                                {/* Gradient border */}
                                <div className="footer-social-btn-border" />
                                <svg className="w-4.5 md:w-5 lg:w-5.25 xl:w-5.5 2xl:w-5.75" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1164 2.83984C17.7242 2.83984 19.8382 4.95385 19.8382 7.5616V15.1164C19.8382 17.7242 17.7242 19.8382 15.1164 19.8382H7.5616C4.95385 19.8382 2.83984 17.7242 2.83984 15.1164L2.83984 7.5616C2.83984 4.95385 4.95385 2.83984 7.5616 2.83984L15.1164 2.83984ZM11.339 7.5616C9.2528 7.5616 7.5616 9.2528 7.5616 11.339C7.5616 13.4252 9.2528 15.1164 11.339 15.1164C13.4252 15.1164 15.1164 13.4252 15.1164 11.339C15.1164 9.2528 13.4252 7.5616 11.339 7.5616ZM11.339 9.45031C12.3821 9.45031 13.2277 10.2959 13.2277 11.339C13.2277 12.3821 12.3821 13.2277 11.339 13.2277C10.2959 13.2277 9.45031 12.3821 9.45031 11.339C9.45031 10.2959 10.2959 9.45031 11.339 9.45031ZM15.5886 6.14508C15.067 6.14508 14.6442 6.56788 14.6442 7.08943C14.6442 7.61097 15.067 8.03378 15.5886 8.03378C16.1102 8.03378 16.5329 7.61097 16.5329 7.08943C16.5329 6.56788 16.1102 6.14508 15.5886 6.14508Z" fill="url(#paint0_linear_2509_2444)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2509_2444" x1="11.339" y1="2.83984" x2="11.339" y2="19.8382" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#4E27BC" />
                                            <stop offset="1" stop-color="#A68AF9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='footer-subscribe'>
                    <p className='footer-subscribe-label'>
                        Subscribe
                    </p>
                    <div className="footer-subscribe-wrap">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="footer-subscribe-input"
                        />
                        <button className="footer-subscribe-btn">
                            <svg className="w-5.5 sm:w-6 md:w-6.5 lg:w-7 xl:w-7.5 2xl:w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <rect width="31.3333" height="31.3333" rx="15.6667" fill="url(#paint0_linear_2509_2451)" />
                                <path d="M16.45 19.5833L20.3667 15.6667L16.45 11.75M20.3667 15.6667H10.9667" stroke="white" strokeWidth="1.01833" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_2509_2451" x1="15.6667" y1="0" x2="15.6667" y2="31.3333" gradientUnits="userSpaceOnUse" >
                                        <stop stopColor="#4E27BC" /> <stop offset="1" stopColor="#A68AF9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-divider-bottom">
                <p className="footer-copy">
                    &copy; CryptEx. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-3.5 sm:gap-3.75 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-[31.33px]">
                    <p className="footer-legal-link">
                        Terms and Conditions
                    </p>
                    <p className="footer-legal-link">
                        Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
