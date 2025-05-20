import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import SevaDetail from "@/pages/SevaDetail";
import PrivacyPolicy from "@/components/home/privacypolicy";
import TermsAndServices from "@/components/home/Terms&Services";
import DonationCancel from "@/components/home/Donationcancel";
import RefundPolicy from "@/components/home/refundpolicy";
import ContactUs from "@/pages/ContactUs";
import { VaishnavCalendar, UpcomingEvents } from "@/components/home/vaishnavcalender"; // Updated import to use named exports
import Introduction from "./components/home/Introduction";
import AnnadanaSeva from "@/components/seva/AnnadanaSeva";
import EventsPage from "@/pages/EventsPage"; // Importing the EventsPage component
import Gaudiya from "@/components/philosophy/Gaudiya";
import Sprabhpada from "./components/philosophy/Sprabhpada";
import Nityanand from "./components/philosophy/nityanand";
import Chaitanya from "./components/philosophy/Chaitanya";
import DivineCouple from "./components/philosophy/Divinecouple";
import Donation from "@/pages/Donationpage";
import FeaturedDonations from "./components/FeaturedDonations";
import DonationForm from "./components/donation/DonationForm";
import Bhagavadgita from "./components/philosophy/Bhagavadgita";
import Bhaktiyoga from "./components/philosophy/Bhaktiyoga";
import Srilaprabhupada from "./components/home/Srilaprabhupada";
import Krishna from "./components/philosophy/Krishna";
import Mahamantra from "./components/philosophy/Mahamantra";
import Activities from "./components/home/Activitieslp";
import Blog from "./components/home/Bloglp";
import Festivals from "./components/home/Festival";
import Media from "./components/home/Media";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:slug" component={SevaDetail} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-services" component={TermsAndServices} />
      <Route path="/donation-cancel" component={DonationCancel} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/vaishnav-calendar" component={VaishnavCalendar} />
      <Route path="/upcoming-events" component={UpcomingEvents} /> {/* Added UpcomingEvents route */}
      <Route path="/all-events" component={EventsPage} /> {/* Added EventsPage route */}
      <Route path="/about-iskcon" component={Introduction} />
      <Route path="/AnnadanaSeva" component={AnnadanaSeva} />
      <Route path="/philosophy/Gaudiya" component={Gaudiya} />
      <Route path="/philosophy/Sprabhpada" component={Sprabhpada} />
      <Route path="/philosophy/nityanand" component={Nityanand} />
      <Route path="/philosophy/Chaitanya" component={Chaitanya} />
      <Route path="/philosophy/Divinecouple" component={DivineCouple} />
      <Route path="/donation" component={Donation} />
      <Route path="/FeaturedDonations" component={FeaturedDonations} />
      <Route path="/donation-form" component={DonationForm} />
      <Route path="/philosophy/Bhagavadgita" component={Bhagavadgita} />
      <Route path="/philosophy/Bhaktiyoga" component={Bhaktiyoga} />
      <Route path="/Srilaprabhupada" component={Srilaprabhupada} />
      <Route path="/philosophy/Krishna" component={Krishna} />
      <Route path="/philosophy/Mahamantra" component={Mahamantra} />
      <Route path="/Activitieslp" component={Activities} />
      <Route path="/Bloglp" component={Blog} />
      <Route path="/Festival" component={Festivals} />
      <Route path="/Media" component={Media} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
