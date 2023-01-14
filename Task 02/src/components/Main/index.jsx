import React from "react";
import MercuryComp from "./MercuryComp";
import VenusComp from "./VenusComp";
import EarthComp from "./EarthComp";
import MarsComp from "./MarsComp";
import JupiterComp from "./JupiterComp";
import SaturnComp from "./SaturnComp";
import UranusComp from "./UranusComp";
import NeptuneComp from "./NeptuneComp";

const index = () => {
  return (
    <main>
      <MercuryComp />
      <VenusComp />
      <EarthComp />
      <MarsComp />
      <JupiterComp />
      <SaturnComp />
      <UranusComp />
      <NeptuneComp />
    </main>
  );
};

export default index;
