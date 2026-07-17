import Header from "./components/header/Header"
import CoreProducts from "./components/coreProducts/CoreProducts"
import AcquireCRX from "./components/acquireCRX/AcquireCRX"
import Tokenomics from "./components/tokenomics/Tokenomics"
import Partners from "./components/partners/Partners"
import Testimonials from "./components/testimonials/Testimonials"
import CTABanner from "./components/catBanner/CTABanner"
import Footer from "./components/footer/Footer"

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
