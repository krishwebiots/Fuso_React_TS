import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationDynamic = () => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink href="#!" aria-label="Previous">
          <i className="ri-arrow-left-double-fill" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink className="page-link active" href="#!">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#!">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#!">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#!" aria-label="Next">
          <i className="ri-arrow-right-double-fill" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationDynamic;
