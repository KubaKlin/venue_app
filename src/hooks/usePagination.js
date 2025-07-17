import { useState } from 'react';

export const usePagination = (totalItems, itemsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Scroll to top of venue list when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // pagination calculations
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    currentPage,
    handlePageChange,
    startIndex,
    endIndex,
    totalPages,
    resetPagination,
  };
}; 