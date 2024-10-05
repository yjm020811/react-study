import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";

const EntireWrapper = memo(() => {
  return (
    <PaginationWrapper>
      <div className="pagination">
        <Pagination variant="outlined" count={10} />
      </div>
    </PaginationWrapper>
  );
});

EntireWrapper.propTypes = {};

export default EntireWrapper;
