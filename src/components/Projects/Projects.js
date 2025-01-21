import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";
import project6 from "../../Assets/Projects/project6.png";
import project7 from "../../Assets/Projects/project7.png";
import project8 from "../../Assets/Projects/project8.png";

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
              imgPath={project1}
              isBlog={false}
              title="Yelp-Camp"
              description="A web application that allows users to browse, review, and add campgrounds, built with Node.js, Express, and MongoDB"
              ghLink="https://github.com/shifanapk/yelpcamp-project"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Youtube-Clone"
              description="A web application built using React.js that mimics YouTube's functionality, allowing users to search and watch videos"
              ghLink="https://github.com/shifanapk/youtube_clone"
              demoLink="https://youtube-clone-brown-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Image Search"
              description="An image search engine built with HTML, CSS, and JavaScript, allowing users to search and browse images efficiently"
              ghLink="https://github.com/shifanapk/imagesearch"
              demoLink="https://exultant-hazel-freesia.glitch.me/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="iChat"
              description="A real-time chat application built with Node.js and Socket.io, enabling users to connect and communicate instantly"
              ghLink="https://github.com/shifanapk/chatApp"
              demoLink="https://chat-app-nu-nine-83.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="weatherApp"
              description="A web application that provides real-time weather updates for any location, built using HTML, CSS, JavaScript, and integrated with a weather API"
              ghLink="https://github.com/shifanapk/weatherApp"
               demoLink="https://pickled-hissing-bonobo.glitch.me/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="quizApp"
              description="A dynamic quiz application built with JavaScript, allowing users to answer questions, track scores, and view results interactively"
              ghLink="https://github.com/shifanapk/quizapp"
              demoLink="https://quizapp-mu-steel.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project7}
              isBlog={false}
              title="To-do List"
              description="A simple to-do list application built using JavaScript, allowing users to add, delete, and manage tasks efficiently"
              ghLink="https://github.com/shifanapk/todolist"
              demoLink="https://todolist-rust-sigma.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project8}
              isBlog={false}
              title="Portfolio website"
              description="A simple portfolio website build using HTML,CSS and JavaScript"
              ghLink="https://github.com/shifanapk/myportfolio"
              demoLink="https://myportfolio-zeta-lime.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
