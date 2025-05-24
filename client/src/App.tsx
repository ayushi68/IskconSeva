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
import AboutUs from "./components/home/AboutUs"
import IAmNew from "./components/home/IAmNew"
import Photo from "./components/media/Photo";
import Video from "./components/media/Video";
import Janmashtami from "./components/festival/Janmashtami";
import Audio from "./components/media/Audio";
import OurVision from "./components/about/OurVision";
import Objectives from "./components/about/Objectives";
import CenterList from "./components/about/CenterList";
import History from "./components/about/History";
import TempleScheduleB from "./components/temple/Tsbhilai";
import TempleScheduleR from "./components/temple/Tsraipur";
import Annadana from "./components/donation/Annadana";
import Gaushala from "./components/donation/Gaushala";
import Nityaseva from "./components/donation/Nityaseva";
import Radharani from "./components/donation/Radharani";
import Rajbhog from "./components/donation/Rajbhog";
import Generaldonation from "./components/donation/Generaldonation";
import Offlinedonation from "./components/donation/Offlinedonation";
import Corpusdonation from "./components/donation/Corpusdonation";
import Vigrahaseva from "./components/donation/Vigrahaseva";
import Youthempowerment from "./components/donation/Youthempowerment"
import Specialseva from "./components/donation/Specialseva";
import Pranammantra from "./components/temple/Pranammantra";
import Volunteer from "./components/donation/Volunteer";
import Bhagavatam from "./components/Special Seva/Bhagavatam";
import Ekadashiseva from "./components/Special Seva/Ekadashiseva";
import GitaDaan from "./components/Special Seva/Gitadaan";
import Gyaandaan from "./components/Special Seva/Gyaandaan";
import MahaSudarshanaNarasimhaYajnaSeva from "./components/Special Seva/Mahanarasimha";
import Sadhuseva from "./components/Special Seva/Sadhuseva";
import Narasimhayajna from "./components/Special Seva/SriNarasimha";
import GauraPurnima from "./components/festival/Gaurapurnima";
import Akhandaharinaam from "./components/festival/Akhandaharinaam";
import Deepotsava from "./components/festival/Deepotsava";
import GitaJayanti from "./components/festival/GitaJayanti";
import Govardhanpuja from "./components/festival/Govardhanpuja";
import JhulanYatra from "./components/festival/JhulanYatra";
import NarasimhaChaturdashi from "./components/festival/NarasimhaChaturdashi";
import Nityananda from "./components/festival/Nityananda";
import Panihati from "./components/festival/Panihati";
import Purushottam from "./components/festival/Purushottam";
import Radhashtami from "./components/festival/Radhashtami";
import Ramnavami from "./components/festival/Ramnavami";
import Vaikuntha from "./components/festival/Vaikuntha";
import Vyasapuja from "./components/festival/Vyasapuja";
import Akshaypatra from "./components/activities/Akshaypatra";
import BookCeremony from "./components/activities/BookCeremony";
import BooksCorner from "./components/activities/Bookscorner";
import Catering from "./components/activities/Catering";
import FamilyCorner from "./components/activities/Familycorner";
import Gifts from "./components/activities/Gifts";
import Harinam from "./components/activities/Harinam";
import KidsCorner from "./components/activities/Kidscorner";
import Pilgrimage from "./components/activities/Pilgrimage";
import Youthcorner from "./components/activities/Youthcorner";

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
      <Route path="/philosophy/Gaudiya" component={Gaudiya} />
      <Route path="/philosophy/Sprabhpada" component={Sprabhpada} />
      <Route path="/philosophy/nityanand" component={Nityanand} />
      <Route path="/philosophy/Chaitanya" component={Chaitanya} />
      <Route path="/philosophy/Divinecouple" component={DivineCouple} />
      <Route path="/donation" component={Donation} />
      <Route path="/FeaturedDonations" component={FeaturedDonations} />
      <Route path="/donation-form" component={DonationForm} />
      <Route path="/donation/Annadana" component={Annadana} />
      <Route path="/donation/Gaushala" component={Gaushala} />
      <Route path="/donation/Nityaseva" component={Nityaseva} />
      <Route path="/donation/Radharani" component={Radharani} />
      <Route path="/donation/Rajbhog" component={Rajbhog} />
      <Route path="/donation/Generaldonation" component={Generaldonation} />
      <Route path="/donation/Offlinedonation" component={Offlinedonation} />
      <Route path="/donation/Corpusdonation" component={Corpusdonation} />
      <Route path="/donation/Vigrahaseva" component={Vigrahaseva} />
      <Route path="/donation/Youthempowerment" component={Youthempowerment} />
      <Route path="/donation/Specialseva" component={Specialseva} />
      <Route path="/temple/Pranammantra" component={Pranammantra} />
      <Route path="/donation/Volunteer" component={Volunteer} />
      <Route path="/philosophy/Bhagavadgita" component={Bhagavadgita} />
      <Route path="/philosophy/Bhaktiyoga" component={Bhaktiyoga} />
      <Route path="/Srilaprabhupada" component={Srilaprabhupada} />
      <Route path="/philosophy/Krishna" component={Krishna} />
      <Route path="/philosophy/Mahamantra" component={Mahamantra} />
      <Route path="/Activitieslp" component={Activities} />
      <Route path="/Bloglp" component={Blog} />
      <Route path="/Festival" component={Festivals} />
      <Route path="/Media" component={Media} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/IAmNew" component={IAmNew} />
      <Route path={"/media/Photo"} component={Photo} />
      <Route path={"/media/video"} component={Video} />
      <Route path={"/media/Audio"} component={Audio} />
      <Route path={"/about/OurVision"} component={OurVision} />
      <Route path={"/about/Objectives"} component={Objectives} />
      <Route path={"/about/CenterList"} component={CenterList} />
      <Route path={"/about/History"} component={History} />
      <Route path={"/temple/Tsbhilai"} component={TempleScheduleB} />
      <Route path={"/temple/Tsraipur"} component={TempleScheduleR} />
      <Route path={"/festival/Janmashtami"} component={Janmashtami} />
      <Route path={"/Special Seva/Bhagavatam"} component={Bhagavatam} />
      <Route path={"/Special Seva/Ekadashiseva"} component={Ekadashiseva} />
      <Route path={"/Special Seva/GitaDaan"} component={GitaDaan} />
      <Route path={"/Special Seva/Gyaandaan"} component={Gyaandaan} />
      <Route path={"/Special Seva/Mahanarasimha"} component={MahaSudarshanaNarasimhaYajnaSeva} />
      <Route path={"/Special Seva/Sadhuseva"} component={Sadhuseva} />
      <Route path={"/Special Seva/SriNarasimha"} component={Narasimhayajna} />
      <Route path={"/festival/Gaurapurnima"} component={GauraPurnima} />
      <Route path={"/festival/Akhandaharinaam"} component={Akhandaharinaam} />
      <Route path={"/festival/Deepotsava"} component={Deepotsava} />
      <Route path={"/festival/GitaJayanti"} component={GitaJayanti} />
      <Route path={"/festival/Govardhanpuja"} component={Govardhanpuja} />
      <Route path={"/festival/JhulanYatra"} component={JhulanYatra} />
      <Route path={"/festival/NarasimhaChaturdashi"} component={NarasimhaChaturdashi} />
      <Route path={"/festival/Nityananda"} component={Nityananda} />
      <Route path={"/festival/Panihati"} component={Panihati} />
      <Route path={"/festival/Purushottam"} component={Purushottam} />
      <Route path={"/festival/Radhashtami"} component={Radhashtami} />
      <Route path={"/festival/Ramnavami"} component={Ramnavami} />
      <Route path={"/festival/Vaikuntha"} component={Vaikuntha} />
      <Route path={"/festival/Vyasapuja"} component={Vyasapuja} />
      <Route path="/activities/Akshaypatra" component={Akshaypatra} />
      <Route path="/activities/BookCeremony" component={BookCeremony} />
      <Route path="/activities/Bookscorner" component={BooksCorner} />
      <Route path="/activities/Catering" component={Catering} />
      <Route path="/activities/Familycorner" component={FamilyCorner} />
      <Route path="/activities/Gifts" component={Gifts} />
      <Route path="/activities/Harinam" component={Harinam} />
      <Route path="/activities/Kidscorner" component={KidsCorner} />
      <Route path="/activities/Pilgrimage" component={Pilgrimage} />
      <Route path="/activities/Youthcorner" component={Youthcorner} />
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
