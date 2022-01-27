import { Entity, Scene } from 'aframe-react';
import { useEffect, useState } from 'react';

export const Ar = () => {
    const [rendered,setRendered] = useState(false);
// useEffect(()=>{
// AFRAME.registerComponent('updater', {
// 	init: function()
// 	{
//                 // declare variable for later access
// 		this.num = 0;
//                 // you can also access the underlying 3D object of a scene object,
//                 //   for example:
// 		// let target = document.querySelector('#earth').object3D;
//                 // target.scale.set( 0.75, 0.75, 0.75 );
// 	},
	
//         // time      = total time since init (milliseconds)
//         // timeDelta = time since last tick
// 	tick: function (time, timeDelta) 
// 	{
// 		this.num += 1;
//                 // console.log( this.num );
// 	}
	
// });
// // access underlying 3D object this component is attached to
// AFRAME.registerComponent('spinner', {
// 	init: function()
// 	{
// 		this.el.object3D.scale.set(0.75, 0.75, 0.75);
// 	},
// 	tick: function (time, timeDelta) 
// 	{
// 		this.el.object3D.rotation.y += 0.01
// 	}
// });
// },[]);
useEffect(()=>{
    if (typeof window !== "undefined") {
        require("aframe");
        setRendered(true);
      }
},[]);
return (
    <>
        {rendered && <Scene embedded vr-mode-ui="enabled: false;" arjs="debugUIEnabled: false;">
            <Entity primitive="a-marker" preset="hiro">
                <Entity
                primitive="a-box"
                position="0 0.5 0" wireframe="true" >               
                </Entity>
            </Entity>
            <Entity camera></Entity>
            <Entity updater></Entity>
        </Scene>}
    </>
);

}