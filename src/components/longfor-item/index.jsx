import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { itemdata } = props;
  return (
    <LongforItemWrapper>
      <div className="inner">
        <img className="cover" src={itemdata.picture_url} alt="" />
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemdata.city}</div>
          <div className="price">均价: {itemdata.price}</div>
        </div>
      </div>
    </LongforItemWrapper>
  );
});

LongforItem.propTypes = {
  itemdata: PropTypes.object.isRequired,
};

export default LongforItem;
