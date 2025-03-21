import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import car from "../../Assets/Projects/car.png";
import netflix from "../../Assets/Projects/netflix.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://lh4.googleusercontent.com/RYAQIIYPli1jC9aKJe8BW8eex2Mvo9CXjI3xm9Wlq3l7MVs_IF-2-c90PXqXcVMKp3MLUdgR7dDjyqHMAbRo693cGbJkog2SLXW9GUXs2xaolhPEmPjq35Mxq_WigcjcIVAOer7H"
              isBlog={false}
              title="Food Ordering"
              description="Created an innovative food ordering platform with seamless payment integration, which reduced order processing
                           time by 50% and enhanced user engagement. Developed a real-time order tracking feature that provided insights into customer behavior, leading to an 18% increase
                            in repeat purchases and overall revenue growth. Tech Stack: React.js, Tailwind CSS, Spring Boot, MySQL, APIs"
              ghLink="https://github.com/Anand98013/Food-Ordering"
              demoLink="https://mealminglefood.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.prismic.io/smarttask/1b15a138-d650-44dc-96d4-b4f7e173fd18_Best+Project+Management+Tools.png?auto=compress,format"
              isBlog={false}
              title="Project Management Tool"
              description="A Placement Management System is a software tool 
              used by educational institutions and organizations to 
              streamline and manage the placement process for 
              students and job seekers,feature using ReactJs,
              Spring boot and MySQL Database features."
              ghLink="https://github.com/Anand98013/Project-Management-Tool"
              demoLink="https://project-management-tool15.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Placement Management System"
              description="A Placement Management System is a software tool 
              used by educational institutions and organizations to 
              streamline and manage the placement process for 
              students and job seekers,feature using ReactJs,
              Spring boot and MySQL Database features."
              ghLink="https://github.com/Anand98013/Placement-Management-System"
              demoLink="https://placement-cell1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Created netflix clone using HTML, CSS, JavaScript. The company provides members the ability to receive streaming content through a host of internet-connected devices, including TVs, digital video players, television set-top boxes, and mobile devices. The company has approximately 231 million paid members in 190 countries."
              ghLink="https://github.com/Anand98013/Netflix_Clone"
              demoLink="https://github.com/Anand98013/Netflix_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Vehicle Rental System"
              description="A Vehicle Rental System is a software solution that 
              enables customers to easily rent vehicles such as 
              cars for a specific duration, either 
              through a rental agency or a peer-to-peer platform. It
              is developed using Spring boot, HTML, CSS, MYSQL,
              and ReactJS features."
              ghLink="https://github.com/Anand98013/Vehicle-Rental-"
              demoLink="https://github.com/Anand98013/Vehicle-Rental-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Markdown Editor.io"
              description="Online code and markdown editor build with svelteKit. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Anand98013/devstar"
              demoLink="https://github.com/Anand98013/devstar"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
