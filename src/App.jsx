import './App.css';
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
            videoEl.setAttribute('playsInline', "");
            videoEl.srcObject = mediaStream;
            videoEl.onloadedmetadata = function (e) {
                videoEl.play();
            };
        }
    }

    return(
        <>
            <h1>Activate camera with React JS</h1>
            <button onClick={openCamera}>Open Camera On Mobile</button>

            <video id="camera" playsInline autoPlay muted ref={videoRef}></video>
        </>
    );
};

export default App;