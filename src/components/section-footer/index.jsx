import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IConMore from "@/assets/svg/icon-more";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {

  const navigate = useNavigate();

  const { name } = props;
  let message = "";
  
  if (name) {
    message = `查看更多${name}的房源`;
  } else {
    message = "查看更多";
  }

  const moreClickHandle = () => {
    navigate("/entire");
  };

  return (
    <FooterWrapper $color={name ? "#008489" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <div className="message">{message}</div>
        <div className="icon">
          <IConMore />
        </div>
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
