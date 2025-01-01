"use client";

import { useRef } from "react";
import FloatingCan from "@/app/components/FloatingCan";
import * as THREE from "three";
import { Group } from "three";
import { Cloud, Clouds, Environment, OrbitControls, Text } from "@react-three/drei";
import { Content } from "@prismicio/client";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type SkyDiveProps = {
    sentence: string | null;
    flavor: Content.SkyDiveSliceDefaultPrimary["flavor"];
};

export default function Scene({ sentence, flavor }: SkyDiveProps) {

    const groupRef = useRef<Group>(null);
    const canRef = useRef<Group>(null);
    const cloud1Ref = useRef<Group>(null);
    const cloud2Ref = useRef<Group>(null);
    const cloudsRef = useRef<Group>(null);
    const wordsRef = useRef<Group>(null);
    

  return (
    <group ref={groupRef}>

        {/* Can */}
        <group rotation={[ 0, 0, 0.5 ]}>
            <FloatingCan ref={canRef} flavor={flavor ?? undefined}></FloatingCan>
        </group>

        {/* Clouds */}
        <Clouds ref={cloudsRef}>
            <Cloud ref={cloud1Ref} bounds={[10, 10, 2]}/>
            <Cloud ref={cloud2Ref} bounds={[10, 10, 2]}/>
        </Clouds>

        {/* Text */}
        <group ref={wordsRef}>
            {sentence && <ThreeText sentence={sentence} color="#F97315"/>}
        </group>
        <OrbitControls/>

        {/* Lights */}
        <ambientLight intensity={2} color="#9DDEFA"/>
        <Environment files="fonts/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  )
}

function ThreeText({ sentence, color="white" }: {
    sentence: string; 
    color?: string
}) {
    const words = sentence.toUpperCase().split(" ");

    const material = new THREE.MeshStandardMaterial();
    const isDesktop = useMediaQuery("(minWidth: 950px)" , true );

    return words.map((word: string, wordIndex: number) => (
        <Text key={`${wordIndex}-${word}`}
        
        
        
        
        
        
        
        
        >{word}</Text>
    ))
}