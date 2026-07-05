import { useEffect, useRef, useState } from "react";

import icon4 from "../../assets/image/icon4.png";
import icon5 from "../../assets/image/icon5.png";

const paymentFields = [
    {
        label: "How much BNB you need to pay:",
        symbol: "BNB",
        icon: icon4,
    },
    {
        label: "How much CRX you need to pay:",
        symbol: "CRX",
        icon: icon5,
    },
];

const steps = [
    {
        id: 1,
        text: "Buy BNB with card on Moonpay.",
    },
    {
        id: 2,
        text: "I read and accept Terms & Conditions.",
    },
];

const AcquireCRX = () => {
    const [activeButton, setActiveButton] = useState("buy");
    const [hoverButton, setHoverButton] = useState(null);

    const buyRef = useRef(null);
    const crxRef = useRef(null);

    const [slider, setSlider] = useState({
        left: 0,
        width: 0,
    });

    const updateSlider = (button) => {
        const ref = button === "buy" ? buyRef.current : crxRef.current;

        if (ref) {
            setSlider({
                left: ref.offsetLeft,
                width: ref.offsetWidth,
            });
        }
    };

    useEffect(() => {
        updateSlider(activeButton);
    }, [activeButton]);

    return (
        <div className='w-full max-w-[1550px] mx-auto px-2 sm:px-3 md:px-4 pb-16 sm:pb-18 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-35.25'>
            <div className='main-card'>
                <div className='flex flex-col items-center md:items-start gap-3.25 sm:gap-3.5 md:gap-3.75 lg:gap-4 xl:gap-5 2xl:gap-[25.07px]'>
                    <div className='flex flex-col items-center md:items-start gap-1.25 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-3.75 2xl:gap-[18.8px]'>
                        <h1 className='section-title-md'>
                            Acquire CRX <br className="hidden lg:block" /> Instantly
                        </h1>
                        <p className='section-subtitle-md'>
                            take advantage of a seamless, quick, <br className="hidden lg:block" /> and secure process to add CRX to your <br className="hidden lg:block" /> portfolio.
                        </p>
                    </div>
                    <button className='btn-wallet'>
                        <span className='btn-wallet-label'>
                            Connect Wallet
                        </span>
                        <svg className="w-3.5 md:w-4 lg:w-4.5 xl:w-5 2xl:w-5.5 h-3.5 md:h-3.5 lg:h-4 xl:h-5 2xl:h-5.5" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="21.9333" height="21.9333" rx="10.9667" fill="white" />
                            <path d="M11.6521 14.3937L15.0792 10.9666L11.6521 7.53955M15.0792 10.9666H6.85416" stroke="#0E0E27" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="from-card">
                    <div className="relative flex gap-[3.92px]">
                        {/* Sliding Background */}
                        <span
                            className="from-tab-active"
                            style={{
                                left: slider.left,
                                width: slider.width,
                            }}
                        />
                        <button
                            ref={buyRef}
                            onMouseEnter={() => {
                                setHoverButton("buy");
                                updateSlider("buy");
                            }}
                            onMouseLeave={() => {
                                setHoverButton(null);
                                updateSlider(activeButton);
                            }}
                            onClick={() => setActiveButton("buy")}
                            className="from-tab-button-Buy"
                        >
                            Buy
                        </button>
                        <button
                            ref={crxRef}
                            onMouseEnter={() => {
                                setHoverButton("crx");
                                updateSlider("crx");
                            }}
                            onMouseLeave={() => {
                                setHoverButton(null);
                                updateSlider(activeButton);
                            }}
                            onClick={() => setActiveButton("crx")}
                            className="from-tab-button-CRX"
                        >
                            CRX
                        </button>
                    </div>
                    <div className='flex flex-col gap-[15.67px]'>
                        <div className='flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-[18.8px]'>
                            {paymentFields.map((field) => (
                                <div key={field.symbol} className='flex flex-col gap-1 sm:gap-1.25  md:gap-1.5 lg:gap-1.75 xl:gap-2 2xl:gap-[9.4px]'>
                                    <label className='payment-field-label'>
                                        {field.label}
                                    </label>
                                    <div>
                                        <div className="relative">
                                            <input type="text"
                                                placeholder='0'
                                                className='payment-input-text'
                                            />
                                            <div className="payment-selector">
                                                <img src={field.icon} alt={field.symbol} className="w-3.5 md:w-3.75 lg:w-4 xl:w-5 2xl:w-[25.07px] h-3.5 md:h-3.75 lg:h-4 xl:h-5 2xl:h-[25.07px]" />
                                                <p className="payment-symbol-text">
                                                    {field.symbol}
                                                </p>
                                                <svg className="w-2.5 sm:w-2.75 md:w-3 lg:w-3.25 h-2.5 sm:h-2.75 md:h-3 lg:h-3.25" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.1839 4.30859L6.26725 8.22526L2.35059 4.30859" stroke="#9FA3BB" stroke-width="1.01833" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="reference-price">
                                Reference Price
                            </p>
                            <p className="reference-price">
                                1 CRX = 0.00626 BNB
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[8.53px] md:gap-[10.53px] lg:gap-[12.53px]">
                        {steps.map((step) => (
                            <div key={step.id} className="flex items-center gap-[6.4px] md:gap-[8.4px] lg:gap-[9.4px]">
                                <div className="step-number-card">
                                    <p className="step-number">
                                        {step.id}
                                    </p>
                                </div>
                                <p className="step-text">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button className='btn-connect-wallet-full'>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AcquireCRX

