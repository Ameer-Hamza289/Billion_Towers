import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';

const QnA = ({ n, q }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-600/50 overflow-hidden group hover:border-neon-blue/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.button
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-dark-700/50 transition-colors duration-300 group"
        onClick={toggleAnswer}
        whileHover={{ backgroundColor: 'rgba(15, 23, 42, 0.3)' }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center text-dark-900 font-bold text-lg">
              {n}
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">
            {q.question}
          </h3>
        </div>
        
        <motion.div
          animate={{ rotate: showAnswer ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-neon-blue"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="pl-14 border-l-2 border-neon-blue/30">
                <p className="text-white/80 leading-relaxed">
                  {q.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QnA;