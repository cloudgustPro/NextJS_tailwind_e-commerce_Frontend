import React from "react";
import Image from "next/image";
const Slide = ({ title, img, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute text-white left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 rounded-lg bg-slate-300 sm:bg-transparent">
        <h2>{title}</h2>
        <h3>{mainTitle}</h3>
        <h3>
          Get Starting From <strong>{price}</strong>.00
        </h3>
        <div>Shop Now</div>
      </div>
      <Image src={img} width={2000} height={2000} />
    </div>
  );
};

export default Slide;
