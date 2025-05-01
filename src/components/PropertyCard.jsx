import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={property.image} 
        alt={property.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; // Fallback image
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-blue-600">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-xl font-bold text-green-600 mb-3">${property.price}/month</p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</span>
          <span>{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</span>
          <span>{property.area}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Available: {new Date(property.available).toLocaleDateString()}
          </span>
          <button className="bg-blue-600 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
