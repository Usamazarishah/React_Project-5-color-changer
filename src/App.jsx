import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const colors = [
    { name: "Green", color_code: "green" },
    { name: "Blue", color_code: "blue" },
    { name: "Yellow", color_code: "yellow" },
    { name: "Brown", color_code: "brown" },
    { name: "Gray", color_code: "gray" },
  ];
  return (
    <>
      <div className="container">
        <h1 style={{ color: color }}>BackgroundColor Changer</h1>

        <div
          className="background-container"
          style={{ backgroundColor: color }}
        ></div>

        <div className="buttons">
          {colors.map((item, index) => {
            return (
              <>
                <button
                  className="btn"
                  onClick={() => setColor(item?.color_code)}
                  style={{ backgroundColor: item?.color_code }}
                >
                  {item?.name}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
