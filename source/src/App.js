import { useEffect, useState } from "react";

function App() {
  const [width, setwidth] = useState("");
  const [height, setheight] = useState(0);
  useEffect(() => {
    setwidth(window.outerWidth);
    // window.location.reload();
  }, [width]);
  return (
    <div
      className="App"
      style={{
        width: "50%",
        margin: "50px auto",
        textAlign: "center",
        padding: "20px",
        minHeight: "60px",
        backgroundColor: "pink",
        border: "solid 1.5px green",
        borderRadius: "5px",
        height: `${height}px`,
      }}
    >
      <span>Browser width is {width}</span>
      <input
        onKeyUp={(e) => setheight(e.target.value)}
        style={{
          display: "block",
          margin: "10px auto 0",
          width: "50%",
          textAlign: "center",
          padding: "5px",
        }}
        type="text"
        placeholder="enter height of the div"
      />
    </div>
  );
}

export default App;
