import React from "react";
import Bannerleft from "./Bannerleft";
import Bannerright from "./Bannerright";

function Banner() {
  return (
    <section
      id="home"
      className="w-full sticky right-0 pt-20 pb-20 flex  items-center border-b-[3px] border-b-black justify-center content-center"
    >
      <Bannerleft />
      <Bannerright />
    </section>
  );
}

export default Banner;
