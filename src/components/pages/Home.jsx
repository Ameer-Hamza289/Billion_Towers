import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star,
  Building2,
  DollarSign,
  Users,
  CheckCircle,
  Play,
  Wallet,
  Home as HomeIcon,
  TrendingDown,
  ShoppingCart,
  Sparkles,
  Target,
  Lock,
  Globe
} from 'lucide-react';
import Header from '../layout/Header';
import Property from '../ui/Property';
import QnA from '../ui/QnA';
import Logo from '../ui/Logo';

// Import images
import vrmobile from '../../assets/images/vrmobile.png';
import connect_wallet from '../../assets/images/connect_wallet.png';
import home1 from '../../assets/images/home.jpg';
import trading from '../../assets/images/trading.jpg';
import sellhome from '../../assets/images/sellhome.jpg';

// Import data
import faq from '../../data/faq';
import properties from '../../data/properties';

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const propertiesRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const propertiesInView = useInView(propertiesRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: Wallet,
      title: "Connect your wallet",
      description: "Connect your wallet to Billion Towers",
      color: "text-neon-blue"
    },
    {
      icon: HomeIcon,
      title: "Browse properties",
      description: "Go to the marketplaces to buy real estate",
      color: "text-neon-purple"
    },
    {
      icon: TrendingDown,
      title: "Receive returns",
      description: "You receive your rental return each month",
      color: "text-neon-green"
    },
    {
      icon: ShoppingCart,
      title: "Sell anytime",
      description: "Sell your real estate whenever you want",
      color: "text-neon-pink"
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Profitability",
      description: "We will try to base this on an average of 7%",
      color: "text-neon-green",
      bgColor: "bg-neon-green/10"
    },
    {
      icon: Zap,
      title: "Liquidity",
      description: "You buy and sell your NFTs whenever you want",
      color: "text-neon-yellow",
      bgColor: "bg-neon-yellow/10"
    },
    {
      icon: Shield,
      title: "No hidden fees",
      description: "No entry, exit or capital gains fees",
      color: "text-neon-blue",
      bgColor: "bg-neon-blue/10"
    },
    {
      icon: Building2,
      title: "No management",
      description: "Don't worry, Billion Towers takes care of everything",
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10"
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Investors', color: 'text-neon-blue' },
    { icon: DollarSign, value: '$50M+', label: 'Total Investments', color: 'text-neon-green' },
    { icon: Building2, value: '500+', label: 'Properties Listed', color: 'text-neon-purple' },
    { icon: TrendingUp, value: '8.5%', label: 'Average Returns', color: 'text-neon-pink' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

    return (
    <div className="min-h-screen bg-dark-gradient relative overflow-hidden">
            <Header />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-mono mb-8"
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4" />
              <span>NEXT-GEN REAL ESTATE INVESTMENT</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
              variants={itemVariants}
            >
              Invest in Real Estate
              <span className="block holographic text-6xl sm:text-7xl lg:text-8xl mt-2">
                From $10
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Our revolutionary platform allows everyone to build wealth through real estate investment. 
              <span className="text-neon-blue"> Start with just $10</span> and watch your portfolio grow.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-cyber text-lg px-8 py-4 flex items-center space-x-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Investing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="btn btn-neon text-lg px-8 py-4 flex items-center space-x-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative mb-4">
                  <motion.div
                    className="w-16 h-16 mx-auto bg-dark-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-neon-blue/20 group-hover:border-neon-blue/50 transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </motion.div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              How to invest and trade in real estate with{' '}
              <span className="gradient-text">Billion Towers?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 mx-auto bg-dark-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-neon-blue/20 group-hover:border-neon-blue/50 transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
              </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
              </div>
            </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              The advantages, without the disadvantages
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Our unique solution allows everyone to build up their own assets, from as little as $10.
                Investing your savings is finally simple and really rewarding.
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-glow p-6 text-center group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${feature.bgColor} border border-neon-blue/20 group-hover:border-neon-blue/50 transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
              </div>
            </div>
      </motion.section>

      {/* How Billion Towers Works */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              How <span className="gradient-text">Billion Towers</span> works?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              variants={itemVariants}
            >
              {[
                {
                  number: "1",
                  title: "A building is selected",
                  description: "We divide it by $10 to have a supply NFTs on it.",
                  color: "from-neon-blue to-neon-purple"
                },
                {
                  number: "2",
                  title: "NFTs are created",
                  description: "You can now buy NFTs against the property in question.",
                  color: "from-neon-purple to-neon-pink"
                },
                {
                  number: "3",
                  title: "Monthly returns",
                  description: "Each month, you will receive the rents collected on your wallet.",
                  color: "from-neon-pink to-neon-green"
                },
                {
                  number: "4",
                  title: "Sell anytime",
                  description: "When you decide, you can put your NFT up for sale, otherwise take advantage of the passive income.",
                  color: "from-neon-green to-neon-blue"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-dark-900 font-bold text-xl relative z-10`}>
                      {item.number}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                </h3>
                    <p className="text-white/60">
                      {item.description}
                    </p>
              </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={vrmobile}
                  alt="Billion Towers mobile"
                  className="w-full max-w-md mx-auto rounded-2xl border border-neon-blue/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-neon-blue/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-neon-blue/30"
                  animate={{ y: -10 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Target className="w-6 h-6 text-neon-blue" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-4 left-4 w-12 h-12 bg-neon-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-neon-purple/30"
                  animate={{ y: 10 }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Lock className="w-6 h-6 text-neon-purple" />
                </motion.div>
              </div>
            </motion.div>
            </div>
            </div>
      </motion.section>

      {/* Properties Section */}
      <motion.section
        ref={propertiesRef}
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={propertiesInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 sm:mb-0">
              Among our properties already financed
            </h2>
            <Link
              to="/marketplace"
              className="btn btn-neon flex items-center space-x-2 group"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {properties.slice(0, 6).map((property, index) => (
              <motion.div
                key={property.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Property property={property} />
              </motion.div>
            ))}
          </motion.div>
            </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Your most frequently asked questions
            </h2>
            <p className="text-xl text-white/80">
              Based on your feedback, we try to answer your questions and expectations.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
          >
            {faq.map((q, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
              >
                <QnA n={i + 1} q={q} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
            </div>
  );
};

export default Home;