import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import SEO from "./components/seo/SEO";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import ScrollToAnchor from "./components/ui/ScrollToAnchor";
import PageTransition from "./components/layout/PageTransition";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <SEO />
      <ScrollToAnchor />

      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex min-h-screen flex-col bg-background text-text">
          <Navbar />

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects/:slug" element={<ProjectPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </AnimatePresence>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;