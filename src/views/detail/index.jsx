import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import DetailPicture from "./copns/detail-picture";
import DetailInfo from "./copns/detail-info";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
