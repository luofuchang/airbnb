import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getEntireDataAction } from "@/store/modules/entire";

const EntirePagination = memo(() => {
  const dispatch = useDispatch();

  const totalCount = useSelector((state) => state.entire.totalCount);
  const currentPage = useSelector((state) => state.entire.currentPage);

  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = currentPage * 20 + 20;

  const handleChange = (event, value) => {
    window.scrollTo(0, 0);
    dispatch(getEntireDataAction(value - 1));
  };

  return (
    <PaginationWrapper>
      <div className="info">
        <Pagination count={totalPage} onChange={handleChange} />
        <div className="desc">
          当前显示第 {startCount} - {endCount} 条数据，共 {totalCount} 条数据，
        </div>
      </div>
    </PaginationWrapper>
  );
});

export default EntirePagination;
