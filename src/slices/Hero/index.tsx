"use client"; // client component is used in this file to run on client side

import { asText, Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Bounded } from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import { TextSplitter } from "@/app/components/TextSplitter";


gsap.registerPlugin(useGSAP, ScrollTrigger);
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  useGSAP(()=> {
    const introTl = gsap.timeline();

    introTl
      .set(".hero", {opacity: 1})
      .from(".hero-header-word", {
      duration: 0.5,
      scale: 3,
      opacity: 0,
      ease: "power4.in",
      delay: 0.3,
      stagger: 1, // loads one element by however long
    })

    .from(".hero-subheading", {
      opacity: 0,
      y: 30,
    }, 
    "+=0.6", //same as delay
    )

    .from(".hero-body",{
      opacity: 0,
      y: 10,
    })
    .from(".hero-button",{
      opacity: 0,
      y: 10,
      duration: 0.6,
    })

    const scrollTl= gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .fromTo("body",{
        backgroundColor: "#FDE047",

      },{
        backgroundColor: "#D9F99D",
        overwrite: "auto",
      },
      1, //start time of animation
    ).from(".text-side-heading .split-char", { //split-char allows animation of each letter
      scale: 1.3,
      y: 40,
      rotate: -25,
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
      ease: "back.out(3)",
      duration: 0.5,
    })
    .from(".text-side-body", {
      y: 20,
      opacity: 0,
      duration: 0.5, 
    });

  });

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
    <div className="grid">
      <div className="grid h-screen place-items-center">
        <div className="grid auto-rows-min place-items-center text-center">
          <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text[9rem] lg:text-[13rem]">  
            <TextSplitter 
              text={asText(slice.primary.heading)} 
              wordDisplayStyle="block" //block stacks text
              className="hero-header-word"/>
              {/*Function returns string instead of h1 within itself*/}
          </h1>
          <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
            <PrismicRichText field={slice.primary.subheading} />
          </div>
          <div className="hero-body text-2xl font-normal text-sky-950">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <Button 
            buttonLink={slice.primary.button_link} 
            buttonText={slice.primary.button_text} 
            className="hero-button mt-12" />
        </div>
      </div>
  
      <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols=2">
        <PrismicNextImage 
          className="w-full md:hidden"
          field={slice.primary.cans_image}/>
        <div>
        <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
          <TextSplitter text={asText(slice.primary.second_heading)} />
        </h2>
        <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
            <PrismicRichText field={slice.primary.second_body} />
          </div>
        </div>  
      </div>
    </div>
    </Bounded>
  );
};

export default Hero;
