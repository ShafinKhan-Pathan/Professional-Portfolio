import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { DeskModel } from "./ui/DeskModel";
import DeskModelLights from "./ui/DeskModelLights";

const HeroModel = () => {
  const isLaptop = useMediaQuery({ query: "(max-width:1350px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width:480px)" });
  let modelScale = 0.9;
  if (isLaptop) {
    modelScale = 0.8;
  }
  if (isTablet) {
    modelScale = 0.7;
  }
  if (isMobile) {
    modelScale = 1.1;
  }
  if (isSmallMobile) {
    modelScale = 0.9;
  }
  return (
    <Canvas id="canvas" camera={{ position: [0, 0, 10], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
      />
      <DeskModelLights />
      <group
        scale={modelScale}
        position={[0, -3, 0]}
        rotation={[0, Math.PI / -3, 0]}
      >
        <DeskModel />
      </group>
    </Canvas>
  );
};

export default HeroModel;
