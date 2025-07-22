import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';
import ScrollToTop from './components/ScrollToTop';
import HomeShowcaseSection from './components/HomeShowcaseSection';
import TermsAndConditions from './components/TermsAndConditions';
import WebDevelopmentPage from './components/WebDevelopmentPage';
import MobileAppDevelopmentPage from './components/MobileAppDevelopmentPage';
import ChatbotsAIAgentsPage from './components/ChatbotsAIAgentsPage';
import SocialMediaManagementPage from './components/SocialMediaManagementPage';
import SEOWebsiteOptimizationPage from './components/SEOWebsiteOptimizationPage';
import UXUIDesignPage from './components/UXUIDesignPage';
import AIIntegrationApplicationsPage from './components/AIIntegrationApplicationsPage';
import EcommerceDevelopmentPage from './components/EcommerceDevelopmentPage';
import GameDevelopmentPage from './components/GameDevelopmentPage';
import VideoAnimationProductionPage from './components/VideoAnimationProductionPage';
import DatabaseCloudInfrastructurePage from './components/DatabaseCloudInfrastructurePage';
// Προσθήκη placeholders για όλες τις υπηρεσίες
const Placeholder = ({ name }: { name: string }) => <div style={{padding:40, textAlign:'center', color:'#555'}}>Η σελίδα "{name}" δεν έχει υλοποιηθεί ακόμα.</div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
    <div className="min-h-screen">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={
              <>
        <Hero />
                <HomeShowcaseSection />
        <Services />
        <About />
        <Portfolio />
              </>
            } />
            <Route path="/services" element={<Services />} />
            {/* Εδώ θα μπουν τα νέα premium service pages, π.χ.: */}
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/services/chatbots-ai-agents" element={<ChatbotsAIAgentsPage />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagementPage />} />
            <Route path="/services/video-animation-production" element={<VideoAnimationProductionPage />} />
            <Route path="/services/seo-website-optimization" element={<SEOWebsiteOptimizationPage />} />
            <Route path="/services/multimedia-content-creation" element={<Placeholder name="Multimedia Content Creation" />} />
            <Route path="/services/ux-ui-design" element={<UXUIDesignPage />} />
            <Route path="/services/database-cloud-infrastructure" element={<DatabaseCloudInfrastructurePage />} />
            <Route path="/services/ai-integration-applications" element={<AIIntegrationApplicationsPage />} />
            <Route path="/services/ecommerce-development" element={<EcommerceDevelopmentPage />} />
            <Route path="/services/game-development" element={<GameDevelopmentPage />} />
            {/* <Route path="/services/:slug" element={<ServiceDetails />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactme" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;