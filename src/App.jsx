import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import FAQ from './components/pages/FAQ';
import MarketPlace from './components/pages/MarketPlace';
import SingleProperty from './components/pages/SingleProperty';
import NotFound from './components/pages/NotFound';

// Styles
import './index.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-dark-gradient cyber-bg relative overflow-hidden">
          {/* Matrix Rain Effect */}
          <div className="matrix-rain"></div>
          
          {/* Data Stream Effects */}
          <div className="data-stream"></div>
          <div className="data-stream" style={{ top: '20%', animationDelay: '1s' }}></div>
          <div className="data-stream" style={{ top: '40%', animationDelay: '2s' }}></div>
          <div className="data-stream" style={{ top: '60%', animationDelay: '3s' }}></div>
          <div className="data-stream" style={{ top: '80%', animationDelay: '4s' }}></div>
          
          <Layout>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="relative z-10"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/marketplace" element={<MarketPlace />} />
                <Route path="/property/:id" element={<SingleProperty />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </Layout>
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(15, 23, 42, 0.95)',
                color: '#f8fafc',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 245, 255, 0.2)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                backdropFilter: 'blur(10px)',
              },
              success: {
                iconTheme: {
                  primary: '#00ff41',
                  secondary: '#0f172a',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ff0080',
                  secondary: '#0f172a',
                },
              },
            }}
          />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;