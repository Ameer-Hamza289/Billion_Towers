import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  TrendingUp, 
  Users, 
  Star,
  Share2,
  Heart,
  DollarSign,
  Building2,
  Shield,
  CheckCircle
} from 'lucide-react';
import properties from '../../data/properties';
import NotFound from './NotFound';

const SingleProperty = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const foundProperty = properties.find(p => p.id == id);
    setProperty(foundProperty);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
  return (
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-secondary-600">Loading property details...</p>
            </div>
          </div>
    );
  }

  if (!property) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50">
      {/* Header */}
      <motion.section
        className="pt-24 pb-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl">
          <Link
            to="/marketplace"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Marketplace
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Images */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={property.images?.[0] || '/api/placeholder/800/600'}
                  alt={property.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                {property.isFeatured && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-secondary-600" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-5 h-5 text-secondary-600" />
                  </motion.button>
                </div>
              </div>

              {/* Additional Images */}
              {property.images && property.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {property.images.slice(1, 5).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${property.name} ${index + 2}`}
                      className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Property Details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-secondary-900 mb-2">
                  {property.name}
                </h1>
                <div className="flex items-center text-secondary-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>
                    {property.location?.city}, {property.location?.state}
                  </span>
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  {property.price} ETH
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-success-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary-900">{property.profit}%</div>
                  <div className="text-sm text-secondary-600">ROI</div>
                </div>
                <div className="bg-white/50 rounded-xl p-4 text-center">
                  <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary-900">{property.investors}</div>
                  <div className="text-sm text-secondary-600">Investors</div>
                </div>
              </div>

              {/* Property Features */}
              {property.features && property.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  className="btn btn-primary w-full text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Invest Now
                </motion.button>
                <motion.button
                  className="btn btn-outline w-full text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  View Details
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Property Information */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                className="bg-white/50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Description</h2>
                <p className="text-secondary-600 leading-relaxed">
                  {property.description}
                </p>
              </motion.div>

              {/* Financial Details */}
              <motion.div
                className="bg-white/50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Financial Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-secondary-200">
                    <span className="text-secondary-600">Monthly Rent</span>
                    <span className="font-semibold">${property.financials?.monthlyRent?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-secondary-200">
                    <span className="text-secondary-600">Annual Yield</span>
                    <span className="font-semibold">{property.financials?.annualYield}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-secondary-200">
                    <span className="text-secondary-600">Monthly Expenses</span>
                    <span className="font-semibold">${property.financials?.expenses?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-secondary-200">
                    <span className="text-secondary-600">Net Monthly Income</span>
                    <span className="font-semibold text-success-600">${property.financials?.netIncome?.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Investment Summary */}
              <motion.div
                className="bg-white/50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Investment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Price per share</span>
                    <span className="font-semibold">${(property.price * 1000 / property.totalShares).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Available shares</span>
                    <span className="font-semibold">{property.availableShares}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Total shares</span>
                    <span className="font-semibold">{property.totalShares}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Expected ROI</span>
                    <span className="font-semibold text-success-600">{property.returns}%</span>
                  </div>
                </div>
              </motion.div>

              {/* Property Stats */}
              <motion.div
                className="bg-white/50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Property Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-secondary-400 mr-3" />
                    <span className="text-secondary-600">Built in {property.yearBuilt}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-5 h-5 text-secondary-400 mr-3" />
                    <span className="text-secondary-600">{property.squareFootage?.toLocaleString()} sq ft</span>
                  </div>
                  {property.bedrooms && (
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 text-secondary-400 mr-3" />
                      <span className="text-secondary-600">{property.bedrooms} bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 text-secondary-400 mr-3" />
                      <span className="text-secondary-600">{property.bathrooms} bathrooms</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SingleProperty;