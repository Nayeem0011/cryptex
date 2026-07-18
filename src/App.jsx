import Header from "./components/header/Header"
import CoreProducts from "./components/coreProducts/CoreProducts"
import AcquireCRX from "./components/acquireCRX/AcquireCRX"
import Tokenomics from "./components/tokenomics/Tokenomics"
import Partners from "./components/partners/Partners"
import Testimonials from "./components/testimonials/Testimonials"
import CTABanner from "./components/catBanner/CTABanner"
import Footer from "./components/footer/Footer"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  return (
    <div className='bg-[#05051F]'>
      <Header />
      <CoreProducts />
      <AcquireCRX />
      <Tokenomics />
      <Partners />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App


// import { useEffect } from "react"
// import Lenis from "lenis"

// import Header from "./components/header/Header"
// import CoreProducts from "./components/coreProducts/CoreProducts"
// import AcquireCRX from "./components/acquireCRX/AcquireCRX"
// import Tokenomics from "./components/tokenomics/Tokenomics"
// import Partners from "./components/partners/Partners"
// import Testimonials from "./components/testimonials/Testimonials"
// import CTABanner from "./components/catBanner/CTABanner"
// import Footer from "./components/footer/Footer"

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const App = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // GSAP ScrollTrigger Lenis sync
//     lenis.on("scroll", ScrollTrigger.update);

//     // GSAP ticker lenis (double rAF)
//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });
//     gsap.ticker.lagSmoothing(0);

//     return () => {
//       lenis.destroy();
//       gsap.ticker.remove(lenis.raf);
//     };
//   }, []);

//   return (
//     <div className='bg-[#05051F]'>
//       <Header />
//       <CoreProducts />
//       <AcquireCRX />
//       <Tokenomics />
//       <Partners />
//       <Testimonials />
//       <CTABanner />
//       <Footer />
//     </div>
//   )
// }

// export default App
