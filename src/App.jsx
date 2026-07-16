import AcquireCRX from "./components/acquireCRX/AcquireCRX"
import CTABanner from "./components/catBanner/CTABanner"
import CoreProducts from "./components/coreProducts/CoreProducts"
import Header from "./components/header/Header"
import Partners from "./components/partners/Partners"
import Testimonials from "./components/testimonials/Testimonials"
import Tokenomics from "./components/tokenomics/Tokenomics"

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
    </div>
  )
}

export default App
