import image from "../../assets/image/tokenomics.png";

const Icon = ({ type }) => {
    switch (type) {
        case "lock":
            return (
                <svg className="w-3.25 md:w-3.5 lg:w-3.75 xl:w-4 2xl:w-4.75 h-3.25 md:h-3.5 lg:h-3.75 xl:h-4 2xl:h-4.75" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7621 8.25336V5.69656C13.7621 3.29016 11.8069 1.33496 9.40051 1.33496C6.99411 1.33496 5.03891 3.29016 5.03891 5.69656V8.25336C4.19291 8.36616 3.55371 9.09936 3.55371 9.96416V15.7358C3.55371 16.6946 4.32451 17.4654 5.28331 17.4654H13.5177C14.4765 17.4654 15.2473 16.6946 15.2473 15.7358V9.96416C15.2473 9.09936 14.5893 8.36616 13.7621 8.25336ZM9.40051 3.19616C10.7917 3.19616 11.9197 4.32416 11.9197 5.71536V8.23456H6.88131V5.71536C6.88131 4.32416 8.00931 3.19616 9.40051 3.19616Z" fill="#D0D1E3" />
                </svg>
            );
        case "card":
            return (
                <svg className="w-3.25 md:w-3.5 lg:w-3.75 xl:w-4 2xl:w-4.75 h-3.25 md:h-3.5 lg:h-3.75 xl:h-4 2xl:h-4.75" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0377 5.2873C17.0377 4.97568 16.9139 4.67681 16.6935 4.45645C16.4732 4.2361 16.1743 4.1123 15.8627 4.1123H2.9377C2.62607 4.1123 2.3272 4.2361 2.10684 4.45645C1.88649 4.67681 1.7627 4.97568 1.7627 5.2873V6.4623H17.0377V5.2873Z" fill="#D0D1E3" />
                    <path d="M17.0377 7.6377H1.7627V8.8127H17.0377V7.6377Z" fill="#D0D1E3" />
                    <path d="M1.7627 13.5123C1.7627 13.8239 1.88649 14.1228 2.10684 14.3432C2.3272 14.5635 2.62607 14.6873 2.9377 14.6873H15.8627C16.1743 14.6873 16.4732 14.5635 16.6935 14.3432C16.9139 14.1228 17.0377 13.8239 17.0377 13.5123V9.9873H1.7627V13.5123ZM12.3377 11.7498H14.6877C14.8435 11.7498 14.9929 11.8117 15.1031 11.9219C15.2133 12.0321 15.2752 12.1815 15.2752 12.3373C15.2752 12.4931 15.2133 12.6426 15.1031 12.7527C14.9929 12.8629 14.8435 12.9248 14.6877 12.9248H12.3377C12.1819 12.9248 12.0324 12.8629 11.9223 12.7527C11.8121 12.6426 11.7502 12.4931 11.7502 12.3373C11.7502 12.1815 11.8121 12.0321 11.9223 11.9219C12.0324 11.8117 12.1819 11.7498 12.3377 11.7498Z" fill="#D0D1E3" />
                </svg>
            );
        case "layers":
            return (
                <svg className="w-3.25 md:w-3.5 lg:w-3.75 xl:w-4 2xl:w-4.75 h-3.25 md:h-3.5 lg:h-3.75 xl:h-4 2xl:h-4.75" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2509_2310)">
                        <path d="M18.0173 9.40022C18.0173 9.25466 17.9768 9.11195 17.9003 8.98811C17.8238 8.86428 17.7143 8.76421 17.5841 8.69914L15.0688 7.44189L17.5841 6.18856C17.7144 6.12359 17.8241 6.02357 17.9007 5.89972C17.9774 5.77588 18.018 5.63312 18.018 5.48747C18.018 5.34183 17.9774 5.19907 17.9007 5.07522C17.8241 4.95138 17.7144 4.85136 17.5841 4.78639L9.75075 0.869724C9.64202 0.815394 9.52215 0.787109 9.4006 0.787109C9.27906 0.787109 9.15918 0.815394 9.05045 0.869724L1.21712 4.78639C1.08677 4.85136 0.977107 4.95138 0.900458 5.07522C0.823808 5.19907 0.783203 5.34183 0.783203 5.48747C0.783203 5.63312 0.823808 5.77588 0.900458 5.89972C0.977107 6.02357 1.08677 6.12359 1.21712 6.18856L3.7324 7.44189L1.21712 8.69914C1.08677 8.76411 0.977107 8.86413 0.900458 8.98798C0.823808 9.11182 0.783203 9.25458 0.783203 9.40022C0.783203 9.54587 0.823808 9.68863 0.900458 9.81248C0.977107 9.93632 1.08677 10.0363 1.21712 10.1013L3.7324 11.3586L1.21712 12.6158C1.08677 12.6808 0.977107 12.7808 0.900458 12.9046C0.823808 13.0285 0.783203 13.1712 0.783203 13.3169C0.783203 13.4625 0.823808 13.6053 0.900458 13.7291C0.977107 13.853 1.08677 13.953 1.21712 14.018L9.05045 17.9346C9.15918 17.989 9.27906 18.0173 9.4006 18.0173C9.52215 18.0173 9.64202 17.989 9.75075 17.9346L17.5841 14.018C17.7144 13.953 17.8241 13.853 17.9007 13.7291C17.9774 13.6053 18.018 13.4625 18.018 13.3169C18.018 13.1712 17.9774 13.0285 17.9007 12.9046C17.8241 12.7808 17.7144 12.6808 17.5841 12.6158L15.0688 11.3586L17.5841 10.1052C17.7149 10.0399 17.8248 9.93918 17.9014 9.81459C17.9779 9.68999 18.0181 9.54646 18.0173 9.40022ZM15.4824 13.3169L9.4006 16.3578L3.3188 13.3169L5.48393 12.2343L9.05045 14.0219C9.15918 14.0762 9.27906 14.1045 9.4006 14.1045C9.52215 14.1045 9.64202 14.0762 9.75075 14.0219L13.3173 12.2343L15.4824 13.3169ZM9.4006 12.4411L3.3188 9.40022L5.48393 8.31766L9.05045 10.1052C9.15918 10.1596 9.27906 10.1878 9.4006 10.1878C9.52215 10.1878 9.64202 10.1596 9.75075 10.1052L13.3173 8.31766L15.4824 9.40022L9.4006 12.4411Z" fill="#D0D1E3" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2509_2310">
                            <rect width="18.8" height="18.8" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case "shield":
            return (
                <svg className="w-3.25 md:w-3.5 lg:w-3.75 xl:w-4 2xl:w-4.75 h-3.25 md:h-3.5 lg:h-3.75 xl:h-4 2xl:h-4.75" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3528 2.81984C15.1961 2.66318 14.9611 2.58484 14.7261 2.66318C13.0028 3.05484 11.2795 2.66318 9.86948 1.64484C9.63448 1.48818 9.24281 1.48818 9.00781 1.64484C7.51948 2.66318 5.79615 3.05484 4.07281 2.66318C3.68115 2.58484 3.21115 2.89818 3.13281 3.28984C3.13281 3.36818 3.13281 3.36818 3.13281 3.44651V9.32151C3.13281 11.5932 4.22948 13.7082 6.10948 15.0398L9.00781 17.0765C9.24281 17.2332 9.63448 17.2332 9.94781 17.0765L12.8461 15.0398C14.7261 13.7082 15.8228 11.5932 15.8228 9.32151V3.44651C15.6661 3.21151 15.5878 2.97651 15.3528 2.81984ZM11.7495 8.61651L9.08615 11.2798C8.77281 11.5932 8.30281 11.5932 7.98948 11.2798L6.73615 10.0265C6.42281 9.71318 6.42281 9.24318 6.73615 8.92984C7.04948 8.61651 7.51948 8.61651 7.83281 8.92984L8.53781 9.63484L10.6528 7.51984C10.9661 7.20651 11.4361 7.20651 11.7495 7.51984C12.0628 7.83318 12.0628 8.30318 11.7495 8.61651Z" fill="#D0D1E3" />
                </svg>
            );
        default:
            return null;
    }
};

const features = [
    {
        icon: "lock",
        title: "CRX Staking Rewards",
        description: (
            <>
                50% of fees generated from services oon
                <br className="hidden xl:block" />
                the CryptEx platform go directly to CRX
                <br className="hidden xl:block" />
                Stakers upon CRX Staking launch
            </>
        ),
    },
    {
        icon: "card",
        title: "CRX Payment Discounts",
        description: (
            <>
                Users and teams choosing to pay
                <br className="hidden xl:block" />
                for platform services with CRX tokens can
                <br className="hidden xl:block" />
                enjoy exclusive discounts.
            </>
        ),
    },
    {
        icon: "layers",
        title: "CRX Staking Rewards",
        description: (
            <>
                50% of fees generated from services oon
                <br className="hidden xl:block" />
                the CryptEx platform go directly to CRX
                <br className="hidden xl:block" />
                Stakers upon CRX Staking launch
            </>
        ),
    },
    {
        icon: "shield",
        title: "CRX Access Requirement",
        description: (
            <>
                Future security tool implementations will
                <br className="hidden xl:block" />
                require users to hold amount CRX tokens to
                <br className="hidden xl:block" />
                gain access. Requirement is designed.
            </>
        ),
    },
];

const Tokenomics = () => {
    return (
        <div id="tokenomics" className='relative w-full pt-16 sm:pt-18 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-35.25'>
            <svg className='absolute left-0 top-1/2 -translate-y-1/1 w-1/5 z-10' viewBox="0 0 564 970" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2509_2473)">
                    <ellipse cx="50.595" cy="484.54" rx="149.938" ry="121.073" fill="url(#paint0_linear_2509_2473)" />
                </g>
                <defs>
                    <filter id="filter0_f_2509_2473" x="-462.809" y="3.05176e-05" width="1026.81" height="969.08" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="181.733" result="effect1_foregroundBlur_2509_2473" />
                    </filter>
                    <linearGradient id="paint0_linear_2509_2473" x1="-99.3428" y1="484.54" x2="200.533" y2="484.54" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4F2AC0" />
                        <stop offset="1" stop-color="#8B65FE" />
                    </linearGradient>
                </defs>
            </svg>

            <div className='tokenomics'>
                <div className='tokenomics-section'>
                    <svg className='absolute right-0 top-0 max-w-139.5' height="550" viewBox="0 0 558 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.25" filter="url(#filter0_f_2509_2329)">
                            <circle cx="495.067" cy="54.8329" r="181.733" fill="#613AD4" />
                        </g>
                        <defs>
                            <filter id="filter0_f_2509_2329" x="0" y="-440.234" width="990.133" height="990.133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="156.667" result="effect1_foregroundBlur_2509_2329" />
                            </filter>
                        </defs>
                    </svg>
                    <svg className='absolute left-0 bottom-0 w-1/3' height="638" viewBox="0 0 653 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.25" filter="url(#filter0_f_2509_2330)">
                            <circle cx="79.1161" cy="573.4" r="181.733" fill="#613AD4" />
                        </g>
                        <defs>
                            <filter id="filter0_f_2509_2330" x="-494.284" y="9.15527e-05" width="1146.8" height="1146.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="195.833" result="effect1_foregroundBlur_2509_2330" />
                            </filter>
                        </defs>
                    </svg>
                    <div className='tokenomics-section-inner'>
                        <div className='flex flex-col gap-5 md:gap-6 lg:gap-8 xl:gap-9 2xl:gap-[39.17px]'>
                            <div className='flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-[13.8px] z-10'>
                                <h1 className='tokenomics-section-header'>
                                    Tokenomics Without <br className="hidden lg:block" /> the Price Tag
                                </h1>
                                <p className='tokenomics-section-desc'>
                                    Provides businesses with the opportunity to design and implement <br className="hidden lg:block" /> robust tokenomics models without the burden of high costs. By <br className="hidden lg:block" /> removing financial barriers.
                                </p>
                            </div>
                            <div className="feature-section-main">
                                <svg width="2" className='h-full absolute left-1/2 -translate-x-1/2 top-0 sm:block hidden' viewBox="0 0 2 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.30866" y1="0.475475" x2="1.30865" y2="269.942" stroke="url(#paint0_linear_1239_2380)" stroke-width="0.783333" />
                                    <line x1="1.30866" y1="0.475475" x2="1.30865" y2="269.942" stroke="url(#paint1_linear_1239_2380)" stroke-width="0.783333" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1239_2380" x1="0.416992" y1="0.475475" x2="0.41698" y2="269.942" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#BACFF7" stop-opacity="0" />
                                            <stop offset="0.25" stop-color="#BACFF7" stop-opacity="0.16" />
                                            <stop offset="0.75" stop-color="#BACFF7" stop-opacity="0.16" />
                                            <stop offset="1" stop-color="#BACFF7" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1239_2380" x1="0.916986" y1="135.209" x2="-0.0830137" y2="135.209" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#222338" stop-opacity="0.2" />
                                            <stop offset="0.501564" stop-color="#373952" />
                                            <stop offset="1" stop-color="#222338" stop-opacity="0.2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="feature-section">
                                    {features.slice(0, 2).map((item, index) => (
                                        <div key={index} className="feature-item">
                                            <div className="feature-itemcard">
                                                <div className="feature-icon-wrap">
                                                    <Icon type={item.icon} />
                                                </div>

                                                <h3 className="feature-item-title">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p className="feature-item-desc">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <svg className='w-full sm:block hidden' height="1" viewBox="0 0 568 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="567.017" y1="0.600483" x2="0.667114" y2="0.600483" stroke="url(#paint0_linear_1239_2381)" stroke-width="0.783333" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1239_2381" x1="567.017" y1="-0.291183" x2="0.667114" y2="-0.291183" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#BACFF7" stop-opacity="0" />
                                            <stop offset="0.25" stop-color="#BACFF7" stop-opacity="0.16" />
                                            <stop offset="0.75" stop-color="#BACFF7" stop-opacity="0.16" />
                                            <stop offset="1" stop-color="#BACFF7" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="feature-section">
                                    {features.slice(2).map((item, index) => (
                                        <div key={index} className="feature-item">
                                            <div className="feature-itemcard">
                                                <div className="feature-icon-wrap">
                                                    <Icon type={item.icon} />
                                                </div>

                                                <h3 className="feature-item-title">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p className="feature-item-desc">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <button className='btn-staking'>
                            <span className='btn-staking-label'>
                                Start Staking
                            </span>
                            <svg className="w-3.5 md:w-4 lg:w-4.5 xl:w-5 2xl:w-[25.07px] h-3.5 md:h-3.5 lg:h-4 xl:h-5 2xl:h-[25.07px]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="21.9333" height="21.9333" rx="10.9667" fill="white" />
                                <path d="M11.6521 14.3937L15.0792 10.9666L11.6521 7.53955M15.0792 10.9666H6.85416" stroke="#0E0E27" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <img src={image} alt="Tokenomics" className="w-fit h-full" />
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
