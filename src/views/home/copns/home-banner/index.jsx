import React, { memo } from "react";
import { HomeBannerWrapper } from "./style";

const HomeBanner = memo(() => {
  return (
    <HomeBannerWrapper>
      <div className="image"></div>
    </HomeBannerWrapper>
  );
});

export default HomeBanner;
