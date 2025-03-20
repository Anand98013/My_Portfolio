import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anand Kumar </span>
            from <span className="purple"> Sasaram, India.</span>
            <br />
            I am currently in the final year of my Bachelor's degree in Computer
            Science & Engineering at Centurion University of Technology &
            Management, maintaining a CGPA of 9.0. Over the course of my
            academic career and through various internships, I have built a
            solid foundation in software development, with a particular focus on
            full-stack java development. I have gained practical experience in a
            range of technologies and tools, including Java, React, Spring Boot,
            and MySQL, which have enhanced my ability to design, develop, and
            maintain robust software applications. During my internship at LawCrats and Meta
            Craftlab Pvt. Ltd., I contributed to a responsive frontend and backend design
            that improved user retention and played a crucial role in
            integrating authentication and payment features, enhancing the
            overall user experience by 25%. Let's connect and embark on this journey of knowledge
            and growth together !!!.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Podcast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anand</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
