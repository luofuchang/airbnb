import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import PropTypes from "prop-types";

const SectionHeader = memo((props) => {
  const { title, subTitle = "默认子标题" } = props;
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      <p className="sub-title">{subTitle}</p>
    </HeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default SectionHeader;
