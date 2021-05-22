import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { setCameraImage } from "../../features/cameraSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./camCapture.css";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function CamCapture() {
  const camRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const capture = useCallback(() => {
    const imgSrc = camRef.current.getScreenshot();
    dispatch(setCameraImage(imgSrc));
    history.push("/preview");
  }, [camRef]);

  return (
    <div className="camCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        ref={camRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        mirrored={true}
        imageSmoothing={true}
      />
      <RadioButtonUncheckedIcon
        className="cam_button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
}

export default CamCapture;
