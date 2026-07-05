import AcquireCRX from "./components/acquireCRX/AcquireCRX"
import CoreProducts from "./components/coreProducts/CoreProducts"
import Header from "./components/header/Header"

const App = () => {
  return (
    <div className='bg-[#05051F]'>
      <Header />
      <CoreProducts />
      <AcquireCRX />
    </div>
  )
}

export default App
