import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Zap, TrendingUp } from 'lucide-react';

const Logo = ({ size = "default" }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    default: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} group`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute -inset-2 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Main Container */}
      <div className="relative w-full h-full bg-dark-900 rounded-xl border-2 border-neon-blue/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900">
          <div className="cyber-grid opacity-30"></div>
        </div>
        
        {/* Animated Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20"
          animate={{
            opacity: 0.5,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: "reverse"
          }}
        />
        
        {/* Icons Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main Building Icon */}
          <motion.div
            className="relative"
            animate={{
              y: -2,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: "reverse"
            }}
          >
            <Building2 
              className={`${iconSizes[size]} text-neon-blue`}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0, 245, 255, 0.6))'
              }}
            />
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-1 right-1"
            animate={{
              scale: 1.2,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: "reverse",
              delay: 0.5
            }}
          >
            <Zap className="w-3 h-3 text-neon-yellow" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1 left-1"
            animate={{
              scale: 1.1,
              opacity: 1,
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: "reverse",
              delay: 1
            }}
          >
            <TrendingUp className="w-3 h-3 text-neon-green" />
          </motion.div>
        </div>
        
        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
          animate={{
            y: '100%',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-neon-blue/50 rounded-br-lg"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-neon-purple/50 rounded-bl-lg"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-neon-pink/50 rounded-tr-lg"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-green/50 rounded-tl-lg"></div>
      </div>
      
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-neon-blue/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)'
        }}
      />
    </motion.div>
  );
};

export default Logo;