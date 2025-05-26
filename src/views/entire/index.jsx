import React, { memo } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./copns/entire-filter";
import EntireRoom from "./copns/entire-rooms";
import EntirePagination from "./copns/entire-pagination";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
