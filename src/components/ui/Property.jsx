import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, MapPin, Star, Eye, Heart, Share2 } from 'lucide-react';

const Property = ({ property }) => {
  if (!property) return null;

  return (
    <motion.div
      className="card-glow overflow-hidden group relative"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Property Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images?.[0] || '/api/placeholder/400/300'}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
        
        {/* Status Badges */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <div className="bg-neon-green/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-dark-900">
            {property.profit}% ROI
          </div>
          {property.isFeatured && (
            <div className="bg-neon-blue/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-dark-900">
              Featured
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            className="w-8 h-8 bg-dark-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-neon-pink transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="w-8 h-8 bg-dark-900/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-neon-blue transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>
        
        {/* View Count */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white/80 text-sm">
          <Eye className="w-4 h-4" />
          <span>{Math.floor(Math.random() * 1000) + 100}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white line-clamp-1 group-hover:text-neon-blue transition-colors">
            {property.name}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-neon-green">
              {property.price} ETH
            </div>
            <div className="text-sm text-white/60">
              ${(property.price * 2000).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Location */}
        {property.location && (
          <div className="flex items-center text-white/60 mb-4">
            <MapPin className="w-4 h-4 mr-2 text-neon-blue" />
            <span className="text-sm">
              {property.location.city}, {property.location.state}
            </span>
          </div>
        )}

        {/* Stats */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-white/60">
            <Users className="w-4 h-4 mr-2 text-neon-purple" />
            <span className="text-sm">{property.investors} investors</span>
          </div>
          <div className="flex items-center text-neon-green">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm font-semibold">{property.returns}% returns</span>
          </div>
        </div>

        {/* Description */}
        {property.description && (
          <p className="text-white/60 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>
        )}

        {/* Features */}
        {property.features && property.features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {property.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/20"
              >
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>Available</span>
            <span>{property.availableShares} / {property.totalShares}</span>
          </div>
          <div className="w-full bg-dark-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(property.availableShares / property.totalShares) * 100}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/property/${property.id}`}
          className="btn btn-neon w-full flex items-center justify-center space-x-2 group"
        >
          <span>View Details</span>
          <motion.span
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default Property;