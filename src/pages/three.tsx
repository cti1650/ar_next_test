import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import React, { useRef } from "react";
import Controls from "../utils/Controls";
import { OrbitControls } from "@react-three/drei";
import { Thing } from "../components/move/Thing";



const Three: React.VFC = () => {
  return (
    <div style={{ position:"fixed" , top:0,left:0,width: "100vw", height: "100vh" }}>
      <Canvas>
        <Thing />
        <OrbitControls />
        <gridHelper />
      </Canvas>
    </div>
  );
};
export default Three;