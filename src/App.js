import "./App.css";
import BackGroundCircle from "./face/BackGroundCircle";
import Eyes from "./face/Eyes";
import FaceContainer from "./face/FaceContainer";
import Mouth from "./face/Mouth";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeRadius = 50;
const mouthWidth = 20;
const mouthRadius = 140;

function App() {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackGroundCircle
        r={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes cx={-eyeOffsetX} cy={-eyeOffsetX} r={eyeRadius} />
      <Eyes cx={+eyeOffsetX} cy={-eyeOffsetX} r={eyeRadius} />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
}

export default App;
