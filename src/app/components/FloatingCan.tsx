"use client";
import React, { forwardRef, ReactNode } from 'react'
import { Float } from '@react-three/drei'
import { SodaCan, SodaCanProps } from './SodaCan'
import { Group } from 'three';



type FloatingCanProps = {
    flavor?: SodaCanProps['flavor'];
    floatSpeed?: number;
    rotationIntensity?: number;
    floatingRange?: [number, number];
    floatIntensity?: number;
    children?: ReactNode;

};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
    ({
        flavor = 'blackCherry',
floatSpeed = 1, 
rotationIntensity = 2,  
floatingRange = [-0.2, 0.2],
floatIntensity = 1, 
children,
...props
},ref
    
) => {
  return (
    <group ref={ref} {...props}>
        <Float
        speed={floatSpeed} // Animation speed
        rotationIntensity={rotationIntensity} // XYZ rotation intensity
        floatIntensity={floatIntensity} // Up/down float intensity
        floatingRange={floatingRange} // Range of y-axis values the object will float 
        > 
            {children}
            <SodaCan flavor={flavor}/>
        </Float>
    </group>
  )
})

FloatingCan.displayName = 'FloatingCan'

export default FloatingCan