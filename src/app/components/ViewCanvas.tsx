"use client"; // client component is used in this file to run on client side
import { Canvas } from '@react-three/fiber';
import React from 'react'

type Props = {}

export default function ViewCanvas({}: Props) {
  return (
    <Canvas>
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial/>
        </mesh>
    </Canvas>
  )
}