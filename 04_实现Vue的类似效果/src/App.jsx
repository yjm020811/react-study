import React from "react";
import Computed from "./components/computed";
import ConditionRender from "./components/confitionRender";
import Watch from "./components/watch";
import VModel from "./components/v-model";
import SlotName from "./components/slotName.jsx";
import KeepAlive from "./components/keepAlive";

const App = () => {
  return (
    <div>
      <Computed />
      <ConditionRender />
      <Watch />
      <VModel />
      <SlotName name="张三" age="18">
        这是插槽内容
      </SlotName>
      <KeepAlive />
    </div>
  );
};

export default App;
