import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if user has seen splash screen before
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setShowSplash(false);
      setIsFirstLoad(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setTimeout(() => {
      setShowSplash(false);
    }, 500);
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#333',
                color: '#fff',
                padding: '16px',
                borderRadius: '8px',
              },
              success: {
                iconTheme: {
                  primary: '#8B1538',
                  secondary: '#fff',
                },
              },
            }}
          />
          <AnimatePresence>
            {showSplash && isFirstLoad && (
              <SplashScreen key="splash" onComplete={handleSplashComplete} />
            )}
          </AnimatePresence>

          {!showSplash && (
            <>
              <ScrollToTop />
              <div className="app">
                <Header />
                <main id="main-content" role="main">
                  <AnimatedRoutes />
                </main>
                <Footer />
                <WhatsAppButton />
              </div>
            </>
          )}
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
