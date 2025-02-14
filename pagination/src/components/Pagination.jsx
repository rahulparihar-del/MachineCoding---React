import PropTypes from "prop-types";

const Pagination = ({ currentPage, setCurrentPage, TotalPages }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mb-6">
      {/* left arrow */}
      <button
        disabled={currentPage === 0}
        className="cursor-pointer px-3 py-1 rounded-lg bg-gray-200 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        &#8592;
      </button>
      {[...Array(TotalPages).keys()].map((page) => (
        <span
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`cursor-pointer mx-1 px-3 py-1 rounded-lg ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </span>
      ))}
      {/* right arrow */}
      <button
        disabled={currentPage >= TotalPages - 1}
        className="cursor-pointer px-3 py-1 rounded-lg bg-gray-200 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        &#8594;
      </button>
    </div>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  TotalPages: PropTypes.number.isRequired,
};

export default Pagination;
