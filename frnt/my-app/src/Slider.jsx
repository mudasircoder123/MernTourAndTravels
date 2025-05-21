import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./image/photo1.avif";
import img2 from "./image/photo2.avif";
import img3 from "./image/photo3.avif";
import img4 from "./image/photo4.avif";
import img5 from "./image/photo5.avif";
import img6 from "./image/photo6.avif";
import img7 from "./image/photo7.avif";
import img8 from "./image/photo8.avif";
import img9 from "./image/photo9.avif";
import img10 from "./image/photo10.avif";

import bgMusic from "./audio/song.mp3"; // replace with your file

const CustomArrow = ({ onClick, direction }) => (
  <div
    style={{
      position: "absolute",
      bottom: "20px",
      [direction]: "25%",
      zIndex: 2,
      cursor: "pointer",
      color: "white",
      fontSize: "30px",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "10px",
      borderRadius: "50%",
    }}
    onClick={onClick}
  >
    {direction === "left" ? "←" : "→"}
  </div>
);


const AutoPlaySlider = () => {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handlePlayMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      audio.play();
      setIsPlaying(true);

      // Fade in
      let vol = 0;
      fadeIntervalRef.current = setInterval(() => {
        if (vol < volume) {
          vol = Math.min(volume, vol + 0.05);
          audio.volume = vol;
        } else {
          clearInterval(fadeIntervalRef.current);
        }
      }, 100);

      // Stop after 20 seconds
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }, 20000);
    }
  };
useEffect(() => {
  return () => {
    clearInterval(fadeIntervalRef.current);
  };
}, []);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div
      style={{
        width: "90vw",
        height: "100vh",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
        marginTop: "30px",
        marginBottom: "45px",
        borderRadius: "14px",
      }}
    >
      <audio ref={audioRef} src={bgMusic} />
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>

      {/* Music Controls */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "10px 20px",
          borderRadius: "12px",
          color: "#fff",
        }}
      >
        <button
          onClick={handlePlayMusic}
          disabled={isPlaying}
          style={{
            marginRight: "10px",
            padding: "6px 16px",
            backgroundColor: "#ffffff33",
            border: "1px solid white",
            borderRadius: "6px",
            cursor: isPlaying ? "not-allowed" : "pointer",
            color: "#fff",
          }}
        >
          {isPlaying ? "Playing..." : "Play Music"}
        </button>
        <label style={{ fontSize: "14px" }}>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{ marginLeft: "8px", verticalAlign: "middle" }}
          />
        </label>
      </div>
    </div>
  );
};

export default AutoPlaySlider;
