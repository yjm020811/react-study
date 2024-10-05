import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "../../../../components/section-header/index";
import LongforItem from "../../../../components/longfor-item";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="content">
        {infoData.list?.slice(0, 6).map((item) => {
          return <LongforItem itemData={item} key={item.city} />;
        })}
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object
};

export default HomeLongfor;
