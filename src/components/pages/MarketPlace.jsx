import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  TrendingUp, 
  TrendingDown, 
  Star,
  MapPin,
  DollarSign,
  Building2,
  Users,
  Calendar,
  ArrowUpDown,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import Header from '../layout/Header';
import Property from '../ui/Property';
import properties from '../../data/properties';

const MarketPlace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const categories = [
    { value: 'all', label: 'All Properties', icon: Building2 },
    { value: 'residential', label: 'Residential', icon: Building2 },
    { value: 'commercial', label: 'Commercial', icon: Building2 },
    { value: 'industrial', label: 'Industrial', icon: Building2 },
    { value: 'luxury', label: 'Luxury', icon: Star }
  ];

  const sortOptions = [
    { value: 'price', label: 'Price' },
    { value: 'roi', label: 'ROI' },
    { value: 'investors', label: 'Investors' },
    { value: 'date', label: 'Date Added' }
  ];

  useEffect(() => {
    let filtered = properties;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location?.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(property => property.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(property => 
      property.price >= priceRange[0] && property.price <= priceRange[1]
    );

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'roi':
          aValue = a.returns || a.profit;
          bValue = b.returns || b.profit;
          break;
        case 'investors':
          aValue = a.investors;
          bValue = b.investors;
          break;
        case 'date':
          aValue = new Date(a.createdAt || Date.now());
          bValue = new Date(b.createdAt || Date.now());
          break;
        default:
          aValue = a.price;
          bValue = b.price;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredProperties(filtered);
  }, [searchTerm, selectedCategory, priceRange, sortBy, sortOrder]);

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
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative"
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
              Property <span className="gradient-text">Marketplace</span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Discover and invest in premium real estate properties from around the world. 
              Start building your portfolio today.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Filters and Search */}
      <motion.section
        className="py-8 px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 border border-dark-600/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neon-blue" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-white/50 focus:border-neon-blue focus:outline-none transition-colors"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    Sort by {option.label}
                  </option>
                ))}
              </select>

              {/* Sort Order */}
              <motion.button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="btn btn-outline flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUpDown className="w-4 h-4" />
                <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
              </motion.button>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <label className="block text-white/80 text-sm mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white/80 text-sm">View:</span>
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-neon-blue/20 text-neon-blue' : 'text-white/60 hover:text-neon-blue'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Grid className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-neon-blue/20 text-neon-blue' : 'text-white/60 hover:text-neon-blue'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="text-white/60 text-sm">
                {filteredProperties.length} properties found
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Properties Grid */}
      <motion.section
        className="py-8 px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto max-w-7xl">
          {filteredProperties.length > 0 ? (
            <motion.div
              className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
              variants={containerVariants}
            >
              {filteredProperties.map((property, index) => (
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
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-dark-800/50 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-neon-blue/60" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                No properties found
              </h3>
              <p className="text-white/60 mb-6">
                Try adjusting your search criteria or filters.
              </p>
              <motion.button
                className="btn btn-neon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange([0, 1000]);
                }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
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
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-blue/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Building2, value: '500+', label: 'Properties Listed', color: 'text-neon-blue' },
                { icon: Users, value: '10,000+', label: 'Active Investors', color: 'text-neon-purple' },
                { icon: DollarSign, value: '$50M+', label: 'Total Volume', color: 'text-neon-green' },
                { icon: TrendingUp, value: '8.5%', label: 'Average ROI', color: 'text-neon-pink' }
              ].map((stat, index) => (
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
                      className="w-16 h-16 mx-auto bg-dark-700/50 rounded-2xl flex items-center justify-center border border-neon-blue/20 group-hover:border-neon-blue/50 transition-all duration-300"
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
                </div>
      </motion.section>
    </div>
  );
};

export default MarketPlace;