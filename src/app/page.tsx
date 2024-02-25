"use client"
import About from "@/components/About";
import Availability from "@/components/Availability";
import Book from "@/components/Book";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProffessionalTeam from "@/components/ProffessionalTeam";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import StatsJumbotron from "@/components/StatsJumbotron";
import WhatsappIcon from "@/components/WhatsappIcon";
import Head from "next/head";

export default function Home() {
  return (
<div className="relativel">
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
        <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700&display=swap" rel="stylesheet" />
  </Head>
  <section><Nav /></section>
  <section id='Home'><Hero /></section>
  <section className="my-2 md:my-[50px]" id='About'><About /></section>
  <section className="my-5 md:my-[50px]" id='Services'><Services /></section>
  <section className="my-5 md:my-[50px]" ><SpecialOffer /></section>
  <section className="my-5 md:my-[50px]" id='Team'><ProffessionalTeam /></section>
  <section className="my-5 md:my-[50px]" id='Reviews'><Reviews /></section>
   <section className="md:my-5"><StatsJumbotron /></section>
   <section className="mt-5 md:mt-[50px]"> <Footer /> </section>
   <div className="fixed bottom-0 right-0 mr-4 mb-4">
        <WhatsappIcon />
      </div>
</div>
  );
}

