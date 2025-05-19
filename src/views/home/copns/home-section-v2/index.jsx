import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
import SectionTabs from "@/components/section-tabs";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData?.dest_list)[0];

  const [name, setName] = useState(initialName);

  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);

  const tabNames = infoData.dest_address?.map((item) => item.name);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRoom
        roomList={infoData.dest_list?.[name]}
        itemwidth="33.33333333%"
      />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = { infoData: PropTypes.object.isRequired };

export default HomeSectionV2;
