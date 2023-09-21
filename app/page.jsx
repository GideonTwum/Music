import Image from 'next/image'
import Navbar from './components/Navbar'
import Firstpage from './components/Firstpage'

export default function Home() {
  return (
    <main className="flex min-h-screen  bg-[#b462d1] flex-col ">

    <Navbar />
    <Firstpage />

    </main>
  )
}
