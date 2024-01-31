import "./App.css";
import Router from "./router.jsx";

import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
    <AnimatedCursor
            innerSize={15}
            outerSize={80}
            color="0,0,0"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={1.4}
          />
      <Router />
    </>
  );
}

export default App;
