import React from "react";

function VideoComponent() {
  return (
    <div>
      <h2>Видео</h2>
      <video width="320" height="240" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}

export default VideoComponent;
