import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import SevaCategories from "@/components/home/SevaCategories";
import AnnadanaSeva from "@/components/seva/AnnadanaSeva";
import GaushalaSeva from "@/components/seva/GaushalaSeva";
import RecentDonors from "@/components/home/RecentDonors";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactInfo from "@/components/home/ContactInfo";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ISKCON Raipur-Bhilai - Offer Seva</title>
        <meta name="description" content="Contribute to ISKCON Raipur-Bhilai through various seva options including Annadana, Gaushala and Temple Development." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Hero />
      <Introduction />
      <SevaCategories />
      <AnnadanaSeva categorySlug="annadana-seva" />
      <GaushalaSeva categorySlug="gaushala-seva" />
      <RecentDonors />
      <Testimonials />
      <FAQ />
      <ContactInfo />
    </>
  );
}
