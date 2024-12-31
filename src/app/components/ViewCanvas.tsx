"use client"; // client component is used in this file to run on client side
import { Canvas } from '@react-three/fiber';
import dynamic from "next/dynamic";
import { SodaCan } from './SodaCan';

type Props = {}

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
        style={{
            position:"fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 30,
        }}
        shadows // enables shadow
        dpr={[1, 1.5 ]}
        gl={{ antialias: true }}
        camera={{
            fov: 30,
        }}

        >
            {/*Math.PI * 2PI  Gives us our 3D view*/}
        <mesh rotation={[0.5,0.5,0]} position={[1, 0, 0]}>
            <boxGeometry/>
            <meshStandardMaterial color={"hotpink"} />
        </mesh>
        <SodaCan />
        <ambientLight intensity={2} />
        <spotLight // provides shadow
            intensity={3} 
            position={[1, 1, 1]}
        /> 
    </Canvas>
  )
}