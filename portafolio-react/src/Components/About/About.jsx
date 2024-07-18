import "./About.css";
import React from "react";
import logo from "../../assets/logo-sn.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={logo} alt="" height="170px" width="190" />
      </div>
      <div className="about-section">
        <div className="about-left">
          {" "}
          <img />
        </div>
        <div className="about-right">
          {" "}
          <div className="about-para">
            <p>
              Tengo casi 3 años como desarrollador Full Stack con
              especialización en backend utilizando Java y Spring Boot, y
              frontend con Angular. He trabajado con bases de datos relacionales
              SQL, y he participado en proyectos que van desde pequeñas
              aplicaciones hasta sistemas empresariales complejos.
            </p>
            <p>
              Me apasiona la tecnología y estoy constantemente aprendiendo y
              mejorando mis habilidades. Poseo adaptabilidad, capacidad de
              resolución de problemas y un fuerte compromiso con los proyectos
              en los que trabajo. Estoy convencido que puedo enfrentar cualquier
              desafío que se presente.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>2+</h1>
          <p>PROYECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          {" "}
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}
