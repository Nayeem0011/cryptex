const CTABanner = () => {
    return (
        <div className='cta-banner'>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1191 398" preserveAspectRatio="none"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2509_2476)">
                    <ellipse cx="642.333" cy="200.158" rx="380.121" ry="47.3764" transform="rotate(-30 642.333 200.158)" fill="url(#paint0_linear_2509_2476)" />
                </g>
                <g opacity="0.25" filter="url(#filter1_f_2509_2476)">
                    <ellipse cx="595.725" cy="198.967" rx="464.908" ry="256.15" fill="#613AD4" fill-opacity="0.7" />
                </g>
                <defs>
                    <filter id="filter0_f_2509_2476" x="136.806" y="-169.788" width="1011.05" height="739.892" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="87.7333" result="effect1_foregroundBlur_2509_2476" />
                    </filter>
                    <filter id="filter1_f_2509_2476" x="-260.85" y="-448.849" width="1713.15" height="1295.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="195.833" result="effect1_foregroundBlur_2509_2476" />
                    </filter>
                    <linearGradient id="paint0_linear_2509_2476" x1="262.212" y1="200.158" x2="1022.45" y2="200.158" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4F2AC0" />
                        <stop offset="1" stop-color="#8B65FE" />
                    </linearGradient>
                </defs>
            </svg>
            <div className='cta-banner-inner'>
                <h1 className='cta-banner-title'>
                    <span className='banner-title-gradient'>Ready</span>
                    <span className='text-[#F5FCFF]'> to access best-in-breed <br className="hidden lg:block" /> cyber</span>
                    <span className='banner-title-gradient'> Security</span>
                </h1>
                <div className="flex items-center justify-center pt-[24.27px]">
                    <button className='btn-Run'>
                        <span className='btn-Run-label'>
                            Run The App
                        </span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="31.3333" height="31.3333" rx="15.6667" fill="white" />
                            <path d="M16.45 19.5833L20.3667 15.6667L16.45 11.75M20.3667 15.6667H10.9667" stroke="#0B0B20" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CTABanner
