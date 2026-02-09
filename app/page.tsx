import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Gallery from '@/components/Gallery';
import Plans from '@/components/Plans';
import Features from '@/components/Features';
import SmartHome from '@/components/SmartHome';
import VideoPopup from '@/components/VideoPopup';

import Office from '@/components/Office';
import Agent from '@/components/Agent';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <VideoPopup />
      <Header />
      <Hero />
      <div id="summary" />
      <Summary />
      <Gallery />
      <Plans />
      <Features />
      <SmartHome />
      <Office />

      <Agent />
      <Contact />
      <Footer />
    </main>
  );
}
