import About from "@/components/About";
import Book from "@/components/Book";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import StatsJumbotron from "@/components/StatsJumbotron";

export default function Home() {
  return (
<div>
   <section> 
    <Hero />
   </section>

  <section id='about'> 
    <About />
  </section>

  <section id='services' > 
    <Services />
  </section>

  <section id='book' > 
    <Book />
  </section>

  <section> 
    <SpecialOffer />
  </section>

  <section>
    <StatsJumbotron />
  </section>

  <section id='contactUs'> 
    <ContactUs />
  </section>

  <section> 
    <Reviews />
  </section>

  <section> 
    <Footer />
  </section>
  
</div>
  );
}

