// The Whole Essense of this file is to create a 3D rotating stars galaxy Model object 

import {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Points, PointMaterial, Preload} from '@react-three/drei'
import * as random  from 'maath/random/dist/maath-random.esm'
// * as random is used to generate infinite random numbers of star particles
const Stars = (props) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2})

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  }) 
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>

        <PointMaterial
        transparent
        color={"#f272c8"}
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        />
      </Points>
    </group>
  )
}


// The StarsCanvas is like a house used to store and initialize our Stars Component

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute  inset-0 z-[-1]'>
      <Canvas camera={{position: [0, 0, 1]}}>
      <Suspense  fallback={null}>
        <Stars />
      </Suspense>
      <Preload />
      </Canvas>
    </div>
  )
}

export default StarsCanvas