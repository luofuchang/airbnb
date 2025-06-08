import React, { memo } from "react";
import { DetailWrapper } from "./style";
import DetailPicture from "./copns/detail-picture";
import DetailInfo from "./copns/detail-info";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
