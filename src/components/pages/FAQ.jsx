import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import QnA from '../ui/QnA';
import faq from '../../data/faq';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaq, setFilteredFaq] = useState(faq);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    useEffect(() => {
    let filtered = faq;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFaq(filtered);
  }, [searchTerm]);

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'general', label: 'General' },
    { value: 'investment', label: 'Investment' },
    { value: 'technical', label: 'Technical' },
    { value: 'legal', label: 'Legal' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50">
      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our real estate investment platform.
          </p>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section
        className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/50 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between text-sm text-secondary-600">
              <p>
                Showing {filteredFaq.length} of {faq.length} questions
              </p>
              <div className="flex items-center">
                <HelpCircle className="w-4 h-4 mr-1" />
                <span>Need more help? Contact us!</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl">
          {filteredFaq.length > 0 ? (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {filteredFaq.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <QnA n={i + 1} q={q} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-secondary-400" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                No questions found
              </h3>
              <p className="text-secondary-600 mb-6">
                Try adjusting your search terms or browse all questions.
              </p>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Search
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 to-accent-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our support team is here to help you with any questions about investing or our platform.
          </p>
          <motion.button
            className="btn btn-white text-primary-600 hover:bg-white/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default FAQ;