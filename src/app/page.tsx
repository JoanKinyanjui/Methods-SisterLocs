"use client"
import About from "@/components/About";
import Availability from "@/components/Availability";
import Book from "@/components/Book";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import StatsJumbotron from "@/components/StatsJumbotron";
import Head from "next/head";

export default function Home() {
  return (
<div className="grid gap-[20px] md:gap-[50px]">
  <Head>
        <title>Methods Sisterlocs</title>
        <meta name="description" content="Sisterlocs Salon in Nairobi, Kenya" />
        <meta name="keywords" content="sisterlocs, salon, nairobi , Kenya" />
        <meta name="author" content="Methods Sisterlocs" />
        <meta property="og:title" content="Your Site Title - Elevate Your Web Experience" />
        <meta property="og:description" content="Explore the world of possibilities with us. Learn more about our services and products." />
        <meta property="og:image" content="URL-to-your-image-for-social-sharing.jpg" />
        <meta property="og:url" content="URL-to-your-site-page" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Site Title - Elevate Your Web Experience" />
        <meta name="twitter:description" content="Explore the world of possibilities with us. Learn more about our services and products." />
        <meta name="twitter:image" content="URL-to-your-image-for-twitter.jpg" />
        <link rel="icon" href="/favicon.ico" />
  </Head>
<section>
  <About />  
</section>
  <section id='services' > 
    <Services />
  </section>
  <section>
    <SpecialOffer />
  </section>
  <section> 
    <Footer />
  </section>
  
</div>
  );
}

