import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceSteps from "./pages/ServiceSteps";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Breadcrumbs from "./components/Breadcrumbs";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // إرسال event للـ prerender عند اكتمال تحميل الصفحة
    const timer = setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Support both non-trailing and trailing slash routes */}
              <Route path="/about/" element={<About />} />
              <Route path="/services/" element={<Services />} />
              <Route path="/service-steps/" element={<ServiceSteps />} />
              <Route path="/faq/" element={<FAQ />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/privacy/" element={<Privacy />} />
              <Route path="/terms/" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
