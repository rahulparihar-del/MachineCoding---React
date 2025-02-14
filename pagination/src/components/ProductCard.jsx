import PropTypes from 'prop-types';

const ProductCard = ({ image, title, description, price, discountPercentage }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 relative">
      {/* Image Container (with relative positioning) */}
      <div className="relative bg-gray-200 h-48 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Discount Badge (Now correctly positioned inside the image container) */}
        {discountPercentage && (
          <div className="absolute top-2 left-2 bg-blue-300 text-blue-500 text-xs font-semibold px-2 py-1 rounded">
            Up to {discountPercentage}% off
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>

        {/* Rating & Icons */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="text-sm text-gray-600 ml-1">(455)</span>
        </div>

        {/* Price & Delivery Info */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          <span className="text-sm text-gray-600">🚚 Fast Delivery</span>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          🛒 Add to cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number,
};

export default ProductCard;
