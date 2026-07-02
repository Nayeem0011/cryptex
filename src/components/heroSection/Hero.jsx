const stats = [
    { value: "$2.82M Locked", label: "985 projects" },
    { value: "$2.82M Locked", label: "985 projects" },
    { value: "$2.82M Locked", label: "985 projects" },
];

const Hero = () => {
    return (
        <div className='hero-container'>
            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center">
                <div className="badge">
                    <p>
                        Innovating Sater System Security
                    </p>
                </div>
                <div className='flex flex-col items-center gap-4 md:gap-5 lg:gap-[25.07px]'>
                    <div className='hero-title'>
                        <h1>
                            Defining Security Standards <br className="hidden lg:block" /> for Sater Systems
                        </h1>
                        <p>
                            These standards act as a foundation, guiding organizations in implementing best <br className="hidden lg:block" /> practices to protect sensitive data and thwart cyber threats.
                        </p>
                    </div>
                    <button className='btn-run-app'>
                        <span className='btn-run-app-label '>
                            Run The App
                        </span>
                        <span className="btn-run-app-icon">
                            <svg className="w-1.75 sm:w-2 md:w-2.25 lg:w-2.5 xl:w-2.75 h-1.75 sm:h-2 md:h-2.25 lg:h-2.5 xl:h-2.75" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.16877 8.91044L9.59585 5.48336L6.16877 2.05627M9.59585 5.48336H1.37085" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-full ">
                <div className='stats-bar-inner'>
                    {stats.map((stat, index) => (
                        <>
                            <div key={index} className='stats-bar-item '>
                                <h2 className='stats-bar-value'>
                                    {stat.value}
                                </h2>
                                <p className='stats-bar-label'>
                                    {stat.label}
                                </p>
                            </div>
                            {index < stats.length - 1 && (
                                <div className='stats-bar-divider bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,#FFFFFF_50.16%,rgba(255,255,255,0.2)_100%)]' />
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
