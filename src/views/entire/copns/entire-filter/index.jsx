import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import { useEffect } from "react";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [filterList, setFilterList] = useState([]);

  // const itemClickHandle = (item) => {
  //   if (filterList.includes(item)) {
  //     const newList = filterList.filter((i) => i !== item);
  //     setFilterList(newList);
  //     return;
  //   }
  //   const newList = [...filterList, item];
  //   setFilterList(newList);
  // };
  // const itemClickHandle = (item) => {
  //   setFilterList((prevList) => {
  //     return prevList.includes(item)
  //       ? prevList.filter((i) => i !== item)
  //       : [...prevList, item];
  //   });
  // };
  const itemClickHandle = (item) => {
    setFilterList((prevList) => {
      const index = prevList.indexOf(item);
      return index === -1
        ? [...prevList, item]
        : [...prevList.slice(0, index), ...prevList.slice(index + 1)];
    });
  };

  useEffect(() => {}, [filterList]);

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("filter-item", {
                active: filterList.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item, e)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
