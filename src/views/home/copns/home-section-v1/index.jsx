import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionRoom roomList={infoData.list} itemwidth="25%" />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object.isRequired,
};

export default HomeSectionV1;
