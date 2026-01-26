import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Bell, Search, Wallet, Zap, Shield, TrendingUp } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: TrendingUp },
    { name: 'Marketplace', href: '/marketplace', icon: Zap },
    { name: 'About', href: '/about', icon: Shield },
    { name: 'FAQ', href: '/faq', icon: User },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-lg border-b border-neon-blue/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Logo size="lg" />
                <div className="absolute -inset-1 bg-neon-blue/20 rounded-full blur-sm"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-display font-bold text-white">
                  Billion <span className="gradient-text">Towers</span>
                </h1>
                <p className="text-xs text-neon-blue/80 font-mono">INVESTMENT PLATFORM</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-neon-blue bg-neon-blue/10'
                        : 'text-white/80 hover:text-neon-blue hover:bg-neon-blue/5'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue rounded-full"></div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="p-2 text-white/80 hover:text-neon-blue transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              className="p-2 text-white/80 hover:text-neon-blue transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-pink rounded-full animate-pulse"></span>
            </motion.button>

            <motion.button
              className="btn btn-neon flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-white/80 hover:text-neon-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-4 space-y-2 border-t border-dark-600/50">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                          isActive
                            ? 'text-neon-blue bg-neon-blue/10'
                            : 'text-white/80 hover:text-neon-blue hover:bg-neon-blue/5'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        {isActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-blue rounded-r-full"></div>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  className="pt-4 border-t border-dark-600/50"
                  variants={itemVariants}
                >
                  <div className="flex flex-col space-y-2">
                    <motion.button
                      className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-neon-blue hover:bg-neon-blue/5 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Search className="w-5 h-5" />
                      <span>Search</span>
                    </motion.button>
                    
                    <motion.button
                      className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-neon-blue hover:bg-neon-blue/5 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Bell className="w-5 h-5" />
                      <span>Notifications</span>
                    </motion.button>
                    
                    <motion.button
                      className="btn btn-neon w-full justify-center mt-2"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Wallet className="w-4 h-4" />
                      <span>Connect Wallet</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-20"></div>
      </div>
    </motion.header>
  );
};

export default Header;