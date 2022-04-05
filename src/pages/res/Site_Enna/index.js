import React from "react";
import  ReactDOM  from "react-dom";
import "./style.css";

function App() {
  return (
    <div>
      <div class="opening_video_canvas">
        <video
          id="video"
          src={require("./ENNA200k.mp4")}
          controls="true"
          crossorigin="anonymous"
        /> 
      </div>{" "}
      <div>
        <canvas id="c1" width="160" height="96">
          {" "}
        </canvas>{" "}
        <canvas id="c2" width="160" height="96">
          {" "}
        </canvas>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
