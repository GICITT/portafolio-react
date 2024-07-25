import "./Hero.css";
import imgProfile from "../../assets/imgProfile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <img
        src={imgProfile}
        alt="imgProfile"
        className="img-Profile"
        style={{ width: "250px", height: "auto" }}
      />{" "}
      <h1>
        {" "}
        <span>Im Gisela Cittadini,</span> developer based in Buenos Aires{" "}
      </h1>
      <p>
        POLLO DE LAS SIERRAS, ARVEJAS , PAPAS CUBO Y SALSA A LA ITALIANA. Pollo
        de Las Sierras con arvejas frescas, papas en cubo con una deliciosa
        Salsa a la Italiana. Opción: Tradicional o Sin Sal Agregada
      </p>
      <div className="hero-actions">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {" "}
          <div className="hero-connect">Connect Whit me</div>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about">
          {" "}
          <div className="hero-resum">My resume</div>{" "}
        </AnchorLink>
      </div>
    </div>
  );
}
