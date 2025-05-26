import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./copns/entire-filter";
import EntireRoom from "./copns/entire-rooms";
import EntirePagination from "./copns/entire-pagination";
import { useDispatch } from "react-redux";
import { getEntireDataAction } from "@/store/modules/entire";

const Entire = memo(() => {
  // 从redux发送请求获取数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEntireDataAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
