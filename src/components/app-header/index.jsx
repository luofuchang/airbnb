import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./copns/header-left";
import HeaderCenter from "./copns/header-center";
import HeaderRight from "./copns/header-right";
import { useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
  const headerConfig = useSelector((state) => state.main.headerConfig);
  const { isFixed } = headerConfig;

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
      <div className="search-area"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
