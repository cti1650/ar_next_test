import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import React, { useRef } from "react";
import Controls from "../utils/Controls";

const Thing = () => {
  const ref = useRef({} as Mesh);
  useFrame(() => (ref.current.rotation.z += 0.01));
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log("click")}
      onPointerOver={(e) => console.log("hover")}
      onPointerOut={(e) => console.log("unhover")}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

const Three: React.VFC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Thing />
        <Controls />
        <gridHelper />
      </Canvas>
    </div>
  );
};
export default Three;