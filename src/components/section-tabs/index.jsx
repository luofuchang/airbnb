import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/ScrollView";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setActiveIndex(index);
                tabClick(index, item);
              }}
              className={classNames("item", { active: activeIndex === index })}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array.isRequired,
};

export default SectionTabs;
