import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials11 from "@/components/Testimonials11";
import Gallery from '@/components/Galerry';
import BookingCalendar from "@/components/BookingCalendar";


export default function Home() {

  const houseImages = [
    '/images/house1.jpg',
    '/images/house2.jpg',
    '/images/house3.jpg',
    '/images/house4.jpg',
    '/images/house5.jpg',
    '/images/house6.jpg',
  ];

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Testimonials11 />
        <BookingCalendar />
        <Gallery images={houseImages} />
        <Problem />
        <FeaturesAccordion />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}