import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  TrendingUp, 
  Award, 
  Heart,
  Building2,
  DollarSign,
  Lock,
  CheckCircle
} from 'lucide-react';
import Header from '../layout/Header';

const About = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Investors', color: 'text-neon-blue' },
    { icon: Building2, value: '500+', label: 'Properties', color: 'text-neon-purple' },
    { icon: DollarSign, value: '$50M+', label: 'Total Value', color: 'text-neon-green' },
    { icon: TrendingUp, value: '8.5%', label: 'Average ROI', color: 'text-neon-pink' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your investments are protected by cutting-edge blockchain technology and smart contracts.',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Invest in real estate anywhere in the world from the comfort of your home.',
      color: 'from-neon-purple to-neon-pink'
    },
    {
      icon: Zap,
      title: 'Instant Liquidity',
      description: 'Buy and sell your real estate investments instantly on our marketplace.',
      color: 'from-neon-pink to-neon-green'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Join a community of like-minded investors building wealth together.',
      color: 'from-neon-green to-neon-blue'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      description: 'Former Goldman Sachs VP with 15+ years in real estate investment.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      description: 'Blockchain expert and former Google engineer leading our tech innovation.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Real Estate',
      image: '/api/placeholder/300/300',
      description: 'Licensed real estate broker with $2B+ in property transactions.'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Operations',
      image: '/api/placeholder/300/300',
      description: 'Former McKinsey consultant specializing in financial operations.'
    }
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
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
              variants={itemVariants}
            >
              About <span className="gradient-text">Billion Towers</span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We're revolutionizing real estate investment by making it accessible, 
              transparent, and profitable for everyone. Our platform combines cutting-edge 
              blockchain technology with traditional real estate expertise.
            </motion.p>
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

      {/* Mission Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                To democratize real estate investment by breaking down barriers and making 
                property ownership accessible to everyone, regardless of their financial status.
              </p>
              <div className="space-y-4">
                {[
                  'Fractional ownership of premium properties',
                  'Transparent and secure blockchain technology',
                  'Professional property management included',
                  'Instant liquidity through our marketplace'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-neon-green" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-blue/20">
                <div className="text-center">
                  <Target className="w-16 h-16 text-neon-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    A world where everyone can build wealth through real estate investment, 
                    creating a more equitable and prosperous society.
                    </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our commitment to our investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card-glow p-6 text-center group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-8 h-8 text-dark-900" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60">
                  {value.description}
                </p>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The brilliant minds behind Billion Towers, combining decades of experience 
              in real estate, technology, and finance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="card-glow p-6 text-center group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-neon-blue/30 group-hover:border-neon-blue/60 transition-colors duration-300"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-neon-blue mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-white/60 text-sm">
                  {member.description}
                </p>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center bg-dark-800/50 backdrop-blur-sm rounded-2xl p-12 border border-neon-blue/20 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                Ready to Start <span className="gradient-text">Investing?</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of investors who are already building wealth through 
                our innovative real estate investment platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn btn-cyber text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Investing Now
                </motion.button>
                <motion.button
                  className="btn btn-neon text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                    </div>
                </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;