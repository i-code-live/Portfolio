import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// The component in which the 3D model is being declared and used,  always returns a <primitive  /> tag. and inside of this tag will you declare the required attributes that consist of how your 3D model should appear... of which can differ from other 3D models.
const Earth = () => {
  // The useGltf hook is used to hook up your 3D scene from its location.. and then passed into the object={} attribute of your <primitive object={earth.scene} /> tag
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene}
  scale={2.5}
  position-y={0}
  rotation-y={0}
  camera={{
    // Fov ---- Feed of View
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6]
  }}
  />;
};


// The EarthCanvas is the component that carries your Earth 3D model....its like a shoe or house that contains the Earth 3D model... Here also is where you specify the various properties required to mount your 3D model properly
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop={"demand"}
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* The OrbitControls is among the helpers giving to us from Three.js to specify how much controls users have over your 3D model and how it behaves by degfault*/}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
