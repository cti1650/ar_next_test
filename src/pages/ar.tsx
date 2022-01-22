import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { sRGBEncoding } from 'three';

const Box = () => {
    return (
      <div>
      <mesh>
        <boxBufferGeometry args={ [1, 1, 1] } />
        <meshStandardMaterial color={ "hotpink" } />
      </mesh>
      </div>
    );
  }

const ArPage = () => {
  return (
    <ARCanvas
    gl={ { antialias: false, powerPreference: "default" } }
    dpr={ window.devicePixelRatio }
    onCameraStreamReady={ () => console.log("Camera stream ready") }
    onCameraStreamError={ () => console.error("Camera stream error") }
    onCreated={ ({ gl }) => {
      gl.outputEncoding = sRGBEncoding
      gl.physicallyCorrectLights = true
      gl.setSize(window.innerWidth, window.innerHeight)
    } }>
    <ambientLight />
    <pointLight position={ [10, 10, 0] } intensity={ 10.0 } />
    <ARMarker
      type={ "pattern" }
      patternUrl={ "data/patt.hiro" }
      onMarkerFound={ () => { console.log("Marker Found")} }>
      <Box />
    </ARMarker>
  </ARCanvas>
  );
};

export default ArPage;
