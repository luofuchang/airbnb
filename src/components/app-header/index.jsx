import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./copns/header-left";
import HeaderCenter from "./copns/header-center";
import HeaderRight from "./copns/header-right";

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
