import Image from 'next/image'
import Navbar from './components/Navbar'
import Firstpage from './components/Firstpage'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen  bg-[#F9FAFD] flex-col ">

    <Navbar />
    <Firstpage />
    <Footer />
    </main>
  )
}
