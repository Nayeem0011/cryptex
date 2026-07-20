import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const stats = [
    { value: "$2.82M Locked", label: "985 projects" },
    { value: "$2.82M Locked", label: "985 projects" },
    { value: "$2.82M Locked", label: "985 projects" },
];

// "$2.82M Locked" -> { prefix: "$", number: 2.82, decimals: 2, suffix: "M Locked" }
const parseStatValue = (str) => {
    const match = str.match(/^([^\d]*)([\d.]+)(.*)$/);
    if (!match) return { prefix: "", number: 0, decimals: 0, suffix: str };

    const [, prefix, numStr, suffix] = match;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    return { prefix, number: parseFloat(numStr), decimals, suffix };
};


const Hero = () => {
    const heroRef = useRef(null);
    const badgeRef = useRef(null);
    const headingRef = useRef(null);
    const subTextRef = useRef(null);
    const buttonRef = useRef(null);
    const statsBarRef = useRef(null);
    const statItemsRef = useRef([]);
    const statValueRefs = useRef([]);

    

    const addStatRef = (el) => {
        if (el && !statItemsRef.current.includes(el)) {
            statItemsRef.current.push(el);
        }
    };
    const addStatValueRef = (el) => {
        if (el && !statValueRefs.current.includes(el)) {
            statValueRefs.current.push(el);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
            },
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        tl.from(badgeRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.4,
        })
            .from(
                headingRef.current,
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=0.2"
            )
            .from(
                subTextRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.4,
                },
                "-=0.25"
            )
            .from(
                buttonRef.current,
                {
                    y: 20,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.4,
                },
                "-=0.2"
            )
            .from(
                statsBarRef.current,
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.5,
                },
                "-=0.2"
            )
            .from(
                statItemsRef.current,
                {
                    y: 20,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.35,
                },
                "-=0.3"
            );

        // Counter Animation
        tl.call(() => {
            statValueRefs.current.forEach((el, i) => {
                const { prefix, number, decimals, suffix } =
                    parseStatValue(stats[i].value);

                const obj = { value: 0 };

                gsap.to(obj, {
                    value: number,
                    duration: 1,
                    ease: "power2.out",
                    onUpdate: () => {
                        el.textContent =
                            `${prefix}${obj.value.toFixed(decimals)}${suffix}`;
                    },
                });
            });
        });

    }, { scope: heroRef });
    return (
        <div ref={heroRef} className='hero-container'>
            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center">
                <div ref={badgeRef} className="badge">
                    <p>
                        Innovating Sater System Security
                    </p>
                </div>
                <div className='flex flex-col items-center gap-4 md:gap-5 lg:gap-[25.07px]'>
                    <div className='hero-title'>
                        <h1 ref={headingRef}>
                            Defining Security Standards <br className="hidden lg:block" /> for Sater Systems
                        </h1>
                        <p ref={subTextRef}>
                            These standards act as a foundation, guiding organizations in implementing best <br className="hidden lg:block" /> practices to protect sensitive data and thwart cyber threats.
                        </p>
                    </div>
                    <button ref={buttonRef} className='btn-run-app group'>
                        <span className='btn-run-app-label '>
                            Run The App
                        </span>
                        <span className="btn-run-app-icon transition-transform duration-300 ease-out group-hover:translate-x-1">
                            <svg className="w-1.75 sm:w-2 md:w-2.25 lg:w-2.5 xl:w-2.75 h-1.75 sm:h-2 md:h-2.25 lg:h-2.5 xl:h-2.75" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.16877 8.91044L9.59585 5.48336L6.16877 2.05627M9.59585 5.48336H1.37085" stroke="white" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-full ">
                <div ref={statsBarRef} className='stats-bar-inner'>
                    {stats.map((stat, index) => (
                        <>
                            <div
                                key={index}
                                ref={addStatRef}
                                className="stats-bar-item"
                            >
                                <h2 ref={addStatValueRef} className='stats-bar-value'>
                                    {(() => {
                                        const { prefix, decimals, suffix } = parseStatValue(stat.value);
                                        return `${prefix}${(0).toFixed(decimals)}${suffix}`;
                                    })()}
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
