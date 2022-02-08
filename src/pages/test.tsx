

import { ArFrame } from "@comp/ar/ArFrame";
import React, { useEffect, useRef, useState } from "react";

const Test: React.VFC = () => {
  return (
    <ArFrame>
      <a-box position="0 0.5 0" wireframe="true"></a-box>
    </ArFrame>
  );
};
export default Test;

