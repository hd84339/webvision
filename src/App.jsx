import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Aboutus from "./components/About";
import Services from "./components/Services";
import IndustriesWeServe from "./components/IndustriesWeServe";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import ChatbotSystem from "./components/ChatbotSystem";
import Footer from "./components/Footer";
import ScrollPanel from "./components/ScrollPanel";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

// Lazy-loaded page components for better performance (route-level code splitting)
// Lazy-loaded page components for better performance (route-level code splitting)
const AboutUs = lazy(() => import("./pages/AboutPage"));
const OurService = lazy(() => import("./pages/ServicesPage"));
const Portfolio = lazy(() => import("./pages/PortfolioPage"));
const OurProducts = lazy(() => import("./pages/ProductsPage"));
const OurClients = lazy(() => import("./pages/ClientsPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const AppDevlopPage = lazy(() => import("./pages/servicesPages/AppDevlopPage"));
const SoftDevlopPage = lazy(
  () => import("./pages/servicesPages/SoftDevlopPage"),
);
const WebDevlopPage = lazy(() => import("./pages/servicesPages/WebDevlopPage"));
const OutConsultingPage = lazy(
  () => import("./pages/servicesPages/Out&ConsultingPage"),
);
const ItBusinessPage = lazy(
  () => import("./pages/servicesPages/ItBusinessPage"),
);
const ERPCRMPage = lazy(() => import("./pages/servicesPages/ERPCRMPage"));
const SeoPage = lazy(() => import("./pages/servicesPages/SeoPage"));
const SmmPage = lazy(() => import("./pages/servicesPages/SmmPage"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

const Home = () => {
  return (
    <>
      <SEO
        title="Webvision Infotech"
        description="Webvision Infotech — Software, web and app development; SEO and digital services."
        url="/"
      />
      <HeroSection />

      
      
      <Aboutus />
      <Services />
      <TeamSection />
      <IndustriesWeServe />
      <Testimonials />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollPanel />
      <Navbar />
      <main>
        <Suspense
          fallback={
            <div
              className="
            p-8
            text-center
          "
            >
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<OurService />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products" element={<OurProducts />} />
            <Route path="/clients" element={<OurClients />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/terms" element={<TermsPage />} />

            {/* Clean, SEO-friendly service routes */}
            <Route
              path="/services/app-development"
              element={<AppDevlopPage />}
            />
            <Route
              path="/services/software-development"
              element={<SoftDevlopPage />}
            />
            <Route
              path="/services/web-development"
              element={<WebDevlopPage />}
            />
            <Route
              path="/services/out-consulting"
              element={<OutConsultingPage />}
            />
            <Route path="/services/it-business" element={<ItBusinessPage />} />
            <Route path="/services/erp-crm" element={<ERPCRMPage />} />
            <Route path="/services/seo" element={<SeoPage />} />
            <Route path="/services/smm" element={<SmmPage />} />
          </Routes>
        </Suspense>
      </main>
      <ChatbotSystem />
      <Footer />
    </Router>
  );
};

export default App;
