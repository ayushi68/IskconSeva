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
import Introduction from "@/components/home/Introduction";
import EventsPage from "@/pages/EventsPage"; // Importing the EventsPage component
import Gaudiya from "@/components/philosophy/Gaudiya";
import Sprabhpada from "@/components/philosophy/Sprabhpada";
import Nityanand from "@/components/philosophy/nityanand";
import Chaitanya from "@/components/philosophy/Chaitanya";
import DivineCouple from "@/components/philosophy/Divinecouple";
import Donation from "@/pages/Donationpage";
import FeaturedDonations from "@/components/FeaturedDonations";
import DonationForm from "@/components/donation/DonationForm";
import Bhagavadgita from "@/components/philosophy/Bhagavadgita";
import Bhaktiyoga from "@/components/philosophy/Bhaktiyoga";
import Srilaprabhupada from "@/components/home/Srilaprabhupada";
import Krishna from "@/components/philosophy/Krishna";
import Mahamantra from "@/components/philosophy/Mahamantra";
import Activities from "@/components/home/Activitieslp";
import Blog from "@/components/home/Bloglp";
import Festivals from "@/components/home/Festival";
import Media from "@/components/home/Media";
import AboutUs from "@/components/home/AboutUs"
import IAmNew from "@/components/home/IAmNew"
import Photo from "@/components/media/Photo";
import Video from "@/components/media/Video";
import Janmashtami from "@/components/festival/Janmashtami";
import Audio from "@/components/media/Audio";
import OurVision from "@/components/about/OurVision";
import Objectives from "@/components/about/Objectives";
import CenterList from "@/components/about/CenterList";
import History from "@/components/about/History";
import TempleScheduleB from "@/components/temple/Tsbhilai";
import TempleScheduleR from "@/components/temple/Tsraipur";
import Annadana from "@/components/donation/Annadana";
import Gaushala from "@/components/donation/Gaushala";
import Nityaseva from "@/components/donation/Nityaseva";
import Radharani from "@/components/donation/Radharani";
import Rajbhog from "@/components/donation/Rajbhog";
import Generaldonation from "@/components/donation/Generaldonation";
import Offlinedonation from "@/components/donation/Offlinedonation";
import Corpusdonation from "@/components/donation/Corpusdonation";
import Vigrahaseva from "@/components/donation/Vigrahaseva";
import Youthempowerment from "@/components/donation/Youthempowerment"
import Specialseva from "@/components/donation/Specialseva";
import Pranammantra from "@/components/temple/Pranammantra";
import Volunteer from "@/components/donation/Volunteer";
import Bhagavatam from "@/components/Special Seva/Bhagavatam";
import Ekadashiseva from "@/components/Special Seva/Ekadashiseva";
import GitaDaan from "@/components/Special Seva/Gitadaan";
import Gyaandaan from "@/components/Special Seva/Gyaandaan";
import MahaSudarshanaNarasimhaYajnaSeva from "@/components/Special Seva/Mahanarasimha";
import Sadhuseva from "@/components/Special Seva/Sadhuseva";
import Narasimhayajna from "@/components/Special Seva/SriNarasimha";
import GauraPurnima from "@/components/festival/Gaurapurnima";
import Akhandaharinaam from "@/components/festival/Akhandaharinaam";
import Deepotsava from "@/components/festival/Deepotsava";
import GitaJayanti from "@/components/festival/GitaJayanti";
import Govardhanpuja from "@/components/festival/Govardhanpuja";
import JhulanYatra from "@/components/festival/JhulanYatra";
import NarasimhaChaturdashi from "@/components/festival/NarasimhaChaturdashi";
import Nityananda from "@/components/festival/Nityananda";
import Panihati from "@/components/festival/Panihati";
import Purushottam from "@/components/festival/Purushottam";
import Radhashtami from "@/components/festival/Radhashtami";
import Ramnavami from "@/components/festival/Ramnavami";
import Vaikuntha from "@/components/festival/Vaikuntha";
import Vyasapuja from "@/components/festival/Vyasapuja";
import Akshaypatra from "@/components/activities/Akshaypatra";
import BookCeremony from "@/components/activities/BookCeremony";
import BooksCorner from "@/components/activities/Bookscorner";
import Catering from "@/components/activities/Catering";
import FamilyCorner from "@/components/activities/Familycorner";
import Gifts from "@/components/activities/Gifts";
import Harinam from "@/components/activities/Harinam";
import KidsCorner from "@/components/activities/Kidscorner";
import Pilgrimage from "@/components/activities/Pilgrimage";
import Youthcorner from "@/components/activities/Youthcorner";
import LoginRegister from "@/pages/Login";
import Folkform from "@/components/activities/Folkform";
import GopalSakha from "@/components/activities/GopalSakha";
import CulturalFest from "@/components/activities/CulturalFest";
import HeritageFest from "@/components/activities/HeritageFest";
import CulturalForm from "@/components/activities/CulturalForm";
import GopalsakhaForm from "@/components/activities/GopalsakhaForm";
import HeritageForm from "@/components/activities/HeritageForm";
import Newsletter from "@/components/media/Newsletter";
import Desktopwallpaper from "@/components/media/Desktopwallpaper";
import MobileWallpaper from "@/components/media/Mobilewallpaper";
import Invocation from "@/components/temple/Invocation";
import TempleSchedule from "@/components/temple/Templeschedule";

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
      <Route path="/Gaudiya" component={Gaudiya} />
      <Route path="/Sprabhpada" component={Sprabhpada} />
      <Route path="/nityanand" component={Nityanand} />
      <Route path="/Chaitanya" component={Chaitanya} />
      <Route path="/Divinecouple" component={DivineCouple} />
      <Route path="/donation" component={Donation} />
      <Route path="/FeaturedDonations" component={FeaturedDonations} />
      <Route path="/gaura-purnima" component={GauraPurnima} />
      <Route path="/donation-form/:categoryId">
        {() => <DonationForm />}
      </Route>
      <Route path="/donation-form">
        {() => <DonationForm />}
      </Route>
      <Route path="/Annadana" component={Annadana} />
      <Route path="/Gaushala" component={Gaushala} />
      <Route path="/Nityaseva" component={Nityaseva} />
      <Route path="/Radharani" component={Radharani} />
      <Route path="/Rajbhog" component={Rajbhog} />
      <Route path="/Generaldonation" component={Generaldonation} />
      <Route path="/Offlinedonation" component={Offlinedonation} />
      <Route path="/Corpusdonation" component={Corpusdonation} />
      <Route path="/Vigrahaseva" component={Vigrahaseva} />
      <Route path="/Youthempowerment" component={Youthempowerment} />
      <Route path="/Specialseva" component={Specialseva} />
      <Route path="/Pranammantra" component={Pranammantra} />
      <Route path="/Volunteer" component={Volunteer} />
      <Route path="/Bhagavadgita" component={Bhagavadgita} />
      <Route path="/Bhaktiyoga" component={Bhaktiyoga} />
      <Route path="/Srilaprabhupada" component={Srilaprabhupada} />
      <Route path="/Krishna" component={Krishna} />
      <Route path="/Mahamantra" component={Mahamantra} />
      <Route path="/Activitieslp" component={Activities} />
      <Route path="/Bloglp" component={Blog} />
      <Route path="/Festival" component={Festivals} />
      <Route path="/Media" component={Media} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/IAmNew" component={IAmNew} />
      <Route path={"/Photo"} component={Photo} />
      <Route path={"/video"} component={Video} />
      <Route path={"/Audio"} component={Audio} />
      <Route path={"/OurVision"} component={OurVision} />
      <Route path={"/Objectives"} component={Objectives} />
      <Route path={"/CenterList"} component={CenterList} />
      <Route path={"/History"} component={History} />
      <Route path={"/Tsbhilai"} component={TempleScheduleB} />
      <Route path={"/Tsraipur"} component={TempleScheduleR} />
      <Route path={"/Janmashtami"} component={Janmashtami} />
      <Route path={"/Bhagavatam"} component={Bhagavatam} />
      <Route path={"/Ekadashiseva"} component={Ekadashiseva} />
      <Route path={"/GitaDaan"} component={GitaDaan} />
      <Route path={"/Gyaandaan"} component={Gyaandaan} />
      <Route path={"/Mahanarasimha"} component={MahaSudarshanaNarasimhaYajnaSeva} />
      <Route path={"/Sadhuseva"} component={Sadhuseva} />
      <Route path={"/SriNarasimha"} component={Narasimhayajna} />
      <Route path={"/Gaurapurnima"} component={GauraPurnima} />
      <Route path={"/Akhandaharinaam"} component={Akhandaharinaam} />
      <Route path={"/Deepotsava"} component={Deepotsava} />
      <Route path={"/GitaJayanti"} component={GitaJayanti} />
      <Route path={"/Govardhanpuja"} component={Govardhanpuja} />
      <Route path={"/JhulanYatra"} component={JhulanYatra} />
      <Route path={"/NarasimhaChaturdashi"} component={NarasimhaChaturdashi} />
      <Route path={"/Nityananda"} component={Nityananda} />
      <Route path={"/Panihati"} component={Panihati} />
      <Route path={"/Purushottam"} component={Purushottam} />
      <Route path={"/Radhashtami"} component={Radhashtami} />
      <Route path={"/Ramnavami"} component={Ramnavami} />
      <Route path={"/Vaikuntha"} component={Vaikuntha} />
      <Route path={"/Vyasapuja"} component={Vyasapuja} />
      <Route path={"/Akshaypatra"} component={Akshaypatra} />
      <Route path={"/BookCeremony"} component={BookCeremony} />
      <Route path={"/Bookscorner"} component={BooksCorner} />
      <Route path={"/Catering"} component={Catering} />
      <Route path={"/Familycorner"} component={FamilyCorner} />
      <Route path={"/Gifts"} component={Gifts} />
      <Route path={"/Harinam"} component={Harinam} />
      <Route path={"/Kidscorner"} component={KidsCorner} />
      <Route path={"/Pilgrimage"} component={Pilgrimage} />
      <Route path={"/Youthcorner"} component={Youthcorner} />
      <Route path={"/Login"} component={LoginRegister} />
      <Route path={"/Folkform"} component={Folkform} />
      <Route path={"/GopalSakha"} component={GopalSakha} />
      <Route path={"/CulturalFest"} component={CulturalFest} />
      <Route path={"/CulturalForm"} component={CulturalForm} />
      <Route path={"/HeritageFest"} component={HeritageFest} />
      <Route path={"/GopalsakhaForm"} component={GopalsakhaForm} />
      <Route path={"/HeritageForm"} component={HeritageForm} />
      <Route path={"/Newsletter"} component={Newsletter} />
      <Route path={"/Desktopwallpaper"} component={Desktopwallpaper} />
      <Route path={"/Mobilewallpaper"} component={MobileWallpaper} />
      <Route path={"/Invocation"} component={Invocation} />
      <Route path={"/Templeschedule"} component={TempleSchedule} />
      <Route component={NotFound} />
       {/* Added TuitionFeesForm route */}
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
