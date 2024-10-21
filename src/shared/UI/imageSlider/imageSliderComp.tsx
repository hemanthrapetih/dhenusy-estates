"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "./imageslider";
import React from "react";

interface ImagesSliderDemoProps {
  mainTitle: string;
}

export function ImagesSliderDemo({ mainTitle }: ImagesSliderDemoProps) {
  const images = [
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5739b45946dd364bf752_1363.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664726649f49f35a2ad4239a_Construction-Documents_Pedernal.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5b5653ae4ac0fa3065dc_31948.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5a2f82cc1ad2bb7183b2_3456.jpg",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* Handle line breaks by splitting the string */}
        <motion.p className="font-bold text-lg md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {mainTitle.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < mainTitle.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.p>

        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Book Site Visit →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
