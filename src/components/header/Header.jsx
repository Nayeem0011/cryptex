import Hero from "../heroSection/Hero";
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <header className="px-[7.83px]">
            <div className="relative overflow-hidden rounded-b-[31.33px] bg-[linear-gradient(180deg,#010214_0%,#010214_16.55%,#4E27BC_63.32%,#A68AF9_100%)]">
                {/* Background SVG */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg className='w-full h-full px-0 xl:px-29.25' viewBox="0 0 1271 936" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.783374 -0.0917969L0.783333 935.208M106.533 -0.0917969L106.533 935.208M212.283 -0.0917969L212.283 935.208M318.034 -0.0917969L318.033 935.208M423.784 -0.0917969L423.784 935.208M529.534 -0.0917969L529.534 935.208M635.284 -0.0917969L635.284 935.208M741.034 -0.0917969L741.034 935.208M846.784 -0.0917969V935.208M952.534 -0.0917969V935.208M1058.28 -0.0917969V935.208M1164.03 -0.0917969V935.208M1269.78 -0.0917969V935.208M0 0.691536H1270.57M0 103.308H1270.57M0 207.492H1270.57M0 311.675H1270.57M0 415.858H1270.57M0 520.042H1270.57M0 624.225H1270.57M0 728.408H1270.57M0 832.592H1270.57M0 934.425H1270.57" stroke="url(#paint0_linear_2509_227)" stroke-width="1.56667" />
                        <path d="M0.783374 -0.0917969L0.783333 935.208M106.533 -0.0917969L106.533 935.208M212.283 -0.0917969L212.283 935.208M318.034 -0.0917969L318.033 935.208M423.784 -0.0917969L423.784 935.208M529.534 -0.0917969L529.534 935.208M635.284 -0.0917969L635.284 935.208M741.034 -0.0917969L741.034 935.208M846.784 -0.0917969V935.208M952.534 -0.0917969V935.208M1058.28 -0.0917969V935.208M1164.03 -0.0917969V935.208M1269.78 -0.0917969V935.208M0 0.691536H1270.57M0 103.308H1270.57M0 207.492H1270.57M0 311.675H1270.57M0 415.858H1270.57M0 520.042H1270.57M0 624.225H1270.57M0 728.408H1270.57M0 832.592H1270.57M0 934.425H1270.57" stroke="url(#paint1_linear_2509_227)" stroke-width="1.56667" />
                        <line opacity="0.5" x1="318.816" y1="520.041" x2="423" y2="520.041" stroke="url(#paint2_linear_2509_227)" stroke-width="1.56667" />
                        <rect x="847.566" y="520.824" width="104.183" height="102.617" fill="white" fill-opacity="0.02" />
                        <rect x="1059.07" y="416.642" width="104.183" height="102.617" fill="url(#paint3_linear_2509_227)" fill-opacity="0.02" />
                        <rect x="107.316" y="416.642" width="104.183" height="102.617" fill="url(#paint4_linear_2509_227)" fill-opacity="0.02" />
                        <line opacity="0.5" x1="952.533" y1="520.824" x2="952.533" y2="625.008" stroke="url(#paint5_linear_2509_227)" stroke-width="1.56667" />
                        <defs>
                            <linearGradient id="paint0_linear_2509_227" x1="1270.57" y1="670.442" x2="0.39172" y2="670.442" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0" />
                                <stop offset="0.502661" stop-color="white" stop-opacity="0.04" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_2509_227" x1="635.284" y1="-0.0917969" x2="635.284" y2="935.208" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#010214" />
                                <stop offset="0.227312" stop-color="#010214" stop-opacity="0" />
                                <stop offset="0.475884" stop-color="white" stop-opacity="0.03" />
                                <stop offset="0.651004" stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_2509_227" x1="318.816" y1="519.824" x2="423" y2="519.824" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5D39C4" />
                                <stop offset="0.501564" stop-color="white" stop-opacity="0.5" />
                                <stop offset="1" stop-color="#5F3BC5" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_2509_227" x1="1059.07" y1="468.342" x2="1163.25" y2="468.342" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="#321C7A" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_2509_227" x1="107.316" y1="468.342" x2="211.5" y2="468.342" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#321C7A" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_2509_227" x1="952.75" y1="520.824" x2="952.75" y2="625.008" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5D39C4" />
                                <stop offset="0.501564" stop-color="white" stop-opacity="0.5" />
                                <stop offset="1" stop-color="#5F3BC5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative z-60 w-full h-full">
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </header>
    );
};

export default Header;
