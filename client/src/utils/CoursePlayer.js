import React, { useEffect, useState } from "react";
import axios from "axios";

const CoursePlayer = ({ videoUrl, title }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_PUBLIC_SERVER_URI}getVdoCipherOTP`, {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div   style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}>
    {
        videoData.otp && videoData.playbackInfo !== "" && (
            <iframe src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=0lPFDN69IRnv0Ktu`}
            style={{
                border:0,
                width:"100%",
                height:"100%",
                position:"absolute",
                top:0,
                left:0,
            }}
             allowFullScreen="true" 
             allow="encrypted-media">

             </iframe>
        )
    }
  </div>
  );
};

export default CoursePlayer;
