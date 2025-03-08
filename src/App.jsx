import { useRef } from "react";

const App = () => {
    const videoRef = useRef(null);

    const openCamera = async () => {
        const constraints = { audio: false, video: {
            facingMode: "environment"
        } };
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

        if(mediaStream) {
            const videoEl = videoRef.current;
            video.setAttribute('playsinline', "");
            videoEl.srcObject = mediaStream;
            videoEl.onloadedmetadata = function (e) {
                videoEl.play();
            };
        }
    }

    return(
        <>
            <h1>Hello World</h1>
            <button onClick={openCamera}>Open Camera On Mobile</button>

            <video autoPlay muted width={500} height={500} ref={videoRef}></video>
        </>
    );
};

export default App;