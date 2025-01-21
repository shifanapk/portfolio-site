import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fathima Shifana </span>
            from <span className="purple"> Palakkad, Kerala.</span>
            <br />
            <br />
            I have completed my <span className="purple">Bachelors in Information Technology</span> from <span className="purple">GEC Palakkad</span>.
            <br />
            I am currently doing an internship in web development at <span className="purple">Sketchnet Creatives</span>, working on a project for an online course platform using <span className="purple">React.js</span> and <span className="purple">Python Django</span>.
            <br />
            <br />
        
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
