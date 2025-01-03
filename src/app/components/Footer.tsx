"use client";
import React from 'react'
import { FizzLogo } from './FizzLogo';
import CircleText from './CircleText';

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">

        <div className="realtive mx-auto flext w-full max-w-4xl justify-center px-4 py-10">
            <FizzLogo/>
            <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
            {/* circle text */}
                <CircleText/>
            </div>
        </div>
    </footer>
  )
}