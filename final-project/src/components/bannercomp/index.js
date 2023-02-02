import React from "react";
import { Container, Image } from "react-bootstrap";
import "./banner.css";

const BannerComp = () => {
 

  
  return (
    <>
      <div className="hero">
        <Container>
          <div className="wrapper">
            <div className="wrapper-text">
              <h1 className="text-white mb-4">Jadi expert bersama edspert.id</h1>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, quidem aspernatur sunt quos ea sit. Quia quas voluptates voluptatibus eaque tempore neque, reiciendis blanditiis cumque, totam reprehenderit assumenda, culpa
                quo.
              </p>
            </div>
            <Image src="/images/girl.png" className="custom-image" />
          </div>
        </Container>
      </div>
      
    </>
  );
};

export default BannerComp;
