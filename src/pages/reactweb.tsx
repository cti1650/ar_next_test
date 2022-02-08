

import React, { useEffect, useRef, useState } from "react";
import { AFrameRenderer, Marker } from 'react-web-ar';
import { Entity } from "aframe-react";


const Three: React.VFC = () => {
    const [test,setTest] = useState(null);
    useEffect(()=>{
        setTest(()=>{ return (
        <AFrameRenderer
        arToolKit={{ sourceType: 'image', sourceUrl: './images/hiro_marker.png'}}
        stats
      >
        <Marker parameters={{ preset: 'hiro' }}>
            <Entity
                geometry={{ primitive: "box" }}
                material={{ color: "red" }}
                position={{ x: 0, y: 0.03, z: 0 }}
            />
        </Marker>
      </AFrameRenderer>)});
    },[]);
    console.log(test);
  return (
    <div style={{ position:"fixed" , top:0,left:0,width: "100vw", height: "100vh" }}>
      {test}
    </div>
  );
};
export default Three;