import React from "react";
import PlanetComp from "./PlanetComp";
import earth from "../../assets/planets/earth.png";
import jupiter from "../../assets/planets/jupiter.png";
import mars from "../../assets/planets/mars.png";
import mercury from "../../assets/planets/mercury.png";
import neptune from "../../assets/planets/neptune.png";
import saturn from "../../assets/planets/saturn.png";
import uranus from "../../assets/planets/uranus.png";
import venus from "../../assets/planets/venus.png";

const index = () => {
  return (
    <main>
      <PlanetComp idPlanet="mercury" namePlanet="Mercury" imagePlanet={mercury} diameter="4.879 km" density="5427 kg/m" length="4222.6" revolution="88 days" rotation="59" gravity="3.7 m/s" mass="0.330" moon="0" />
      <PlanetComp idPlanet="venus" namePlanet="Venus" imagePlanet={venus} diameter="12.104 km" density="5243 kg/m" length="2802.0" revolution="225 days" rotation="243" gravity="8.9 m/s" mass="4.87" moon="0" />
      <PlanetComp idPlanet="earth" namePlanet="Earth" imagePlanet={earth} diameter="12.756 km" density="5514 kg/m" length="24.0" revolution="365.26 days" rotation="1" gravity="9.8 m/s" mass="5.97" moon="1" />
      <PlanetComp idPlanet="mars" namePlanet="Mars" imagePlanet={mars} diameter="6.792 km" density="3933 kg/m" length="24.7" revolution="1.88 years" rotation="1.03" gravity="3.7 m/s" mass="0.642" moon="2" />
      <PlanetComp idPlanet="jupiter" namePlanet="Jupiter" imagePlanet={jupiter} diameter="142.984 km" density="1326 kg/m" length="9.9" revolution="11.86 years" rotation="0.41" gravity="23.1 m/s" mass="1898" moon="67" />
      <PlanetComp idPlanet="saturn" namePlanet="Saturn" imagePlanet={saturn} diameter="120.536 km" density="687 kg/m" length="10.7" revolution="29.46 years" rotation="0.45" gravity="9.0 m/s" mass="568" moon="62" />
      <PlanetComp idPlanet="uranus" namePlanet="Uranus" imagePlanet={uranus} diameter="51.118 km" density="1271 kg/m" length="17.2" revolution="84.01 years" rotation="0.72" gravity="8.7 m/s" mass="86.8" moon="27" />
      <PlanetComp idPlanet="neptune" namePlanet="Neptune" imagePlanet={neptune} diameter="49.528 km" density="1638 kg/m" length="16.1" revolution="164.79 years" rotation="0.67" gravity="11.0 m/s" mass="102" moon="14" />
    </main>
  );
};

export default index;
