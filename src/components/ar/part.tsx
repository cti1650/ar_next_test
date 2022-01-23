import { Entity, Scene } from 'aframe-react';
import { useEffect, useState } from 'react';

export const Ar = () => {
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
return (
    <>
        <Scene embedded vr-mode-ui="enabled: false;" arjs="debugUIEnabled: false;" width="1000px" height="500px">
            <Entity id="earth-sphere" geometry={{ primitive:'plane'}} src="images/earth-sphere.jpg">
            </Entity>
            <Entity primitive="a-marker" type="pattern" url="data/kanji.patt">
                <Entity
                primitive="a-sphere"
                    id="earth"
                    position="0 0.5 0" 
                    material="src: #earth-sphere; transparent: true; opacity: 0.95;"
                    spinner >               
                </Entity>
            </Entity>
            <Entity camera></Entity>
            <Entity updater></Entity>
        </Scene>
    </>
);

}