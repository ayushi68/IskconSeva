import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
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
import VaishnavCalendar from "@/components/home/vaishnavcalender";
import Introduction from "./components/home/Introduction";

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
      <Route path="/about-iskcon" component={Introduction} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
