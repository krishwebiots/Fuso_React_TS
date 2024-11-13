import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { PaginationType } from "../../../../Types/ProductType";
import { Href } from "../../../../Constants/Constants";

const PaginationDynamic: React.FC<PaginationType> = ({ totalPages1, currentPage, setCurrentPage }) => {
  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePreviousButton = () => currentPage !== 1 && handlePageChange(currentPage - 1);
  const handleNextButton = () => currentPage !== totalPages1 && handlePageChange(currentPage + 1);

  return (
    <Pagination>
      <PaginationItem onClick={handlePreviousButton} disabled={currentPage === 1}>
        <PaginationLink href={Href} aria-label="Previous">
          <i className="ri-arrow-left-double-fill" />
        </PaginationLink>
      </PaginationItem>
      {Array.from({ length: totalPages1 }, (_, index) => (
        <PaginationItem key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
          <PaginationLink href={Href}>{index + 1}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem onClick={handleNextButton} disabled={currentPage === totalPages1}>
        <PaginationLink href={Href} aria-label="Next">
          <i className="ri-arrow-right-double-fill" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationDynamic;
