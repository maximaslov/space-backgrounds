import React, { useState } from "react";
import video from '../../video/background.mp4';
import styles from './BackgroundVideo.module.css';
import poster from '../../img/stars.png';

const BackgroundVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
        setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loader}>
          <p style={{ color: "black" }}>Loading...</p>
        </div>
      )}
      <video autoPlay muted loop playsInline poster={poster} style={{ position: "fixed", width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }} onLoadedData={handleLoad}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;