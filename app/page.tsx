import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustValues from '@/components/TrustValues'
import PropertyGrid from '@/components/PropertyGrid'
import AboutUs from '@/components/AboutUs'
import AboutRegion from '@/components/AboutRegion'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustValues />
      <PropertyGrid />
      <AboutUs />
      <AboutRegion />
      <Testimonials />
      <Footer />
    </main>
  )
}


