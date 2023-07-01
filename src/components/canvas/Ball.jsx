import React, { Suspense } from "react";
// We can get our canvas component from the @react-three/fibre package we installed
import { Canvas } from "@react-three/fiber";
// Now we need to import the controllers for our Canvas component
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// We need our Canvas loader that helps us display a progress indicator for our BallCanvas
import CanvasLoder from "../Loader";

export const Ball = (props) => {
  // First we have to destructure our Decal object
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
        color={"#fff8eb"}
        polygonOffset
        polygonOffsetFactor={-5}
        
        />

        <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoder />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
