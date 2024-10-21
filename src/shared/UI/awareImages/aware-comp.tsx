"use client";

import { DirectionAwareHover } from "./direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl = [
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664730e228bf1c7020d4b8ff_green%20villa%201.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5739b45946dd364bf752_1363.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664726649f49f35a2ad4239a_Construction-Documents_Pedernal.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5b5653ae4ac0fa3065dc_31948.jpg",
    "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5a2f82cc1ad2bb7183b2_3456.jpg",
  ];
  return (
    <div className=" mt-8 mb-8 relative  flex items-center flex-wrap justify-center">
      <DirectionAwareHover imageUrl={imageUrl[3]} className="m-4">
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">1299 </p>
      </DirectionAwareHover>{" "}
      <DirectionAwareHover imageUrl={imageUrl[4]} className="m-4">
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">12999</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={imageUrl[5]} className="m-4">
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">12999 </p>
      </DirectionAwareHover>
    </div>
  );
}
