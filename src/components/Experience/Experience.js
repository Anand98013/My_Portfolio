import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaBriefcase } from "react-icons/fa";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.experienceContent}>
      <Container fluid className="">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className={styles.experienceHeader}>
              <h1 className={styles.sectionTitle}>My Internship</h1>
              <p className={styles.sectionSubtitle}>
                A brief journey of my professional career.
              </p>
            </Col>
          </Row>
          <Row>
            {/* Example Experience Entry */}

            <Col md={4} className={styles.experienceCard}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceLine} />
                <h3 className={styles.experienceTitle}>
                  <FaBriefcase className={styles.icon} />
                  Software Engineer
                </h3>
                <p className={styles.experienceCompany}>CodSoft</p>
                <p className={styles.experienceDuration}>Sep 2024 - Jan 2025</p>
                <p className={styles.experienceDescription}>
                  • Contributed to the development of AI-powered legal
                  assistance tools, increasing user efficiency by 35% in
                  searching and retrieving case and cybercrime-related
                  information. Engineered the Case Explorer feature, improving
                  document retrieval speed by 40% and meeting 98% of user
                  requirements for accessing judgments, acts, and notifications
                  with advanced search.
                </p>
              </div>
            </Col>

            <Col md={4} className={styles.experienceCard}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceLine} />
                <h3 className={styles.experienceTitle}>
                  <FaBriefcase className={styles.icon} />
                  Full Stack Developer
                </h3>
                <p className={styles.experienceCompany}>
                  Meta Craftlab private limited
                </p>
                <p className={styles.experienceDuration}>
                  June 2024 - Aug 2024
                </p>
                <p className={styles.experienceDescription}>
                  • Gained hands-on experience with Git version control, Svelte,
                  and Svelte kit during this internship. Collaborated with a
                  team to develop and deliver several small-scale projects.{" "}
                  <br></br>• This role involved learning new technologies,
                  applying them in practical scenarios, and contributing to the
                  successful completion of team projects.
                </p>
              </div>
            </Col>

            <Col md={4} className={styles.experienceCard}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceLine} />
                <h3 className={styles.experienceTitle}>
                  <FaBriefcase className={styles.icon} />
                  Full Stack Developer Intern
                </h3>
                <p className={styles.experienceCompany}>IEEE Bombay Section</p>
                <p className={styles.experienceDuration}>
                  June 2023 - Aug 2023
                </p>
                <p className={styles.experienceDescription}>
                  • Served as a Team Leader during this internship where I led a
                  team in developing an online Markdown editor. Managed project
                  tasks, coordinated with team members, and ensured timely
                  delivery of features. The project involved designing and
                  implementing a user-friendly interface for Markdown editing,
                  enhancing collaboration and productivity
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
