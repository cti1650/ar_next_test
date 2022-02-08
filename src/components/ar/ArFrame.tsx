export const ArFrame = ({children}) => {
    return (
        <div style={{ position:"fixed" , top:0,left:0,width: "100vw", height: "100vh" }}>
            <title>AR Card</title>
            <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
            <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>
            <div className="m-0 overflow-hidden">
                <a-scene embedded arjs="sourceType: webcam;">
                    <a-marker preset="hiro">
                        {children && children}
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        </div>
    )
};