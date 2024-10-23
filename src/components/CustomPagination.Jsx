import React from 'react';

const CustomPagination = ({ total, itemsPerPage, currentPage, onChange }) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 mx-1 bg-gray-300"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onChange(index + 1)}
          className={`px-3 py-1 mx-1 ${
            index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 mx-1 bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
