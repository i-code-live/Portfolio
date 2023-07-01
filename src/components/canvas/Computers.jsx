import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// This set of controls are regarded as helpers - as they help us to control the 3D model
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("../desktop_pc/scene.gltf"); // useGLTF helps us to import 3D models
  return (
    <mesh>
      {/* Get Hemisphere Light */}
      <hemisphereLight intensity={0.11} groundColor={"black"} />

      {/* Get PointLight */}
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.32 : 0.36}
        position={isMobile ? [0, -1.4, -1] : [0, -1.9, -0.4]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Let's create our ComputerCanvas Component to render our 3D computer scene
const ComputersCanvas = () => {
  // we are using the isMobile State to track when we are on the mobile device viewport.... and if true we want to resize the scale and position of our computerCanvas
  const [isMobile, setIsMobile] = useState(false);

  // useEffect when ever our expectations are met
  // device viewport =  mobile device viewport
  
  useEffect(() => {
    // Task 1:  check if windows.mediaQuery is =  mobile device with width of 500px.

    // Task 2:  if  task1 is true then we want to update the IsMobile state to match (mediaQuery.matches)

    // Task 3:  Perform the necessary changes that has been planned to happen only on the Mobile device

    // Task 4:   create a function to handle when MediaQuery Changes...and this function should take in an event... and this event signifies that the media Query has changed. therefore isMobile has also changed so setIsMobile needs to be updated accordingly

    // Task 5: addEventListener to the mediaQuery variable that listens  for when the media Query has changed

    // Task 6: At the end of this useEffect we want to return a function that  removesEventListener from the mediaQuery variable that listens for when the media Query has changed

    const mediaQuery = window.matchMedia('(max-width: 500px)');

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  });

  return (
    <Canvas
      frameloop="demand"
      shadows
      // The camera positions are used to render how our 3D model should viewed
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* The Suspence is not related to three js ------ rather its coming from REACT it allows us to create a loader while our 3D model is yet to show */}
      <Suspense fallback={<CanvasLoader />}>
        {/* The orbit controls helps us to move the model left and right */}
        <OrbitControls
          // EnableZoom prevents the model from being zoomed
          enableZoom={false}
          // The Max and Min Polar angles helps us to prevent being able to rotate the 3D model all round
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
