import { useImperativeHandle, useState } from 'react';
import './App.css'

function App() {

  const [position, setPosition] = useState({top:0, left:0});

  const handlePos = (direction) => {

    switch (direction) {
      case "up":
        setPosition({ ...position, top: position.top - 50 });
        break;

      case "down":
        setPosition({ ...position, top: position.top + 50 });
        break;

      case "left":
        setPosition({ ...position, left: position.left - 50 });
        break;

      case "right":
        setPosition({ ...position, left: position.left + 50 });
        break;
    }
  }
  

  return (
    <div className="main-box">
      <button
        className="horizontal-btn"
        onClick={() => handlePos("up")}
        disabled={position.top <= 0 ? true : false}
      >
        UP
      </button>
      <div className="inner-box">
        <button
          className="vertical-btn"
          onClick={() => handlePos("left")}
          disabled={position.left <= 0 ? true : false}
        >
          LEFT
        </button>
        <div className="boundary-box">
          <div
            className="moving-div"
            style={{ top: position.top, left: position.left }}
          ></div>
        </div>
        <button
          className="vertical-btn"
          onClick={() => handlePos("right")}
          disabled={position.left >= 450 ? true : false}
        >
          RIGHT
        </button>
      </div>
      <button
        className="horizontal-btn"
        onClick={() => handlePos("down")}
        disabled={position.top >= 450 ? true : false}
      >
        DOWN
      </button>
    </div>
  );
}

export default App
