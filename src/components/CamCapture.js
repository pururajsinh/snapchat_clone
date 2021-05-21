import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function CamCapture() {
    const camRef = useRef(null);
    const [image, setImage] = useState(null);
    const capture = useCallback(() => {
        const imgSrc = camRef.current.getScreenshot();
        setImage(imgSrc);
        console.log(imgSrc.length);
    }, [camRef])
    return (
        <div className="camCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                width={videoConstraints.width}
                ref={camRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon
                className="cam_button"
                onClick={capture}
                fontSize="large"
            />
            <img src={image} />
        </div>
    );
}

export default CamCapture;
