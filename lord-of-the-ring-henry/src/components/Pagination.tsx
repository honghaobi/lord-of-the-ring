import React from 'react';
import '../styles/paginate.css';
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({totalPages, currentPage, onPageChange,}) => {
    const handlePageChange = (page: number) => page !== currentPage && onPageChange(page);
    const renderPageNumbers = () => {
        const maxButtons = 8;
        const pageNumbers: React.ReactNode[] = [];

        let startPage = 1;
        let endPage = totalPages;

        if (totalPages > maxButtons) {
            if (currentPage <= maxButtons - 4) {
                endPage = maxButtons;
            } else if (currentPage >= totalPages - 3) {
                startPage = totalPages - maxButtons + 1;
            } else {
                startPage = currentPage - Math.floor(maxButtons / 2) + 1;
                endPage = currentPage + Math.floor(maxButtons / 2);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button key={i} className={`page-button ${currentPage === i ? 'active' : ''}`}
                        onClick={() => handlePageChange(i)}>
                    {i}
                </button>
            );
        }

        if (totalPages > maxButtons) {
            if (currentPage >= maxButtons - 4) {
                pageNumbers.unshift(
                    <button key="ellipsis-start" className="page-button ellipsis" disabled={true}>
                        ...
                    </button>
                );
            }

            if (currentPage <= totalPages - 3) {
                pageNumbers.push(
                    <button key="ellipsis-end" className="page-button ellipsis" disabled={true}>
                        ...
                    </button>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button
                className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            {renderPageNumbers()}
            <button
                className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;