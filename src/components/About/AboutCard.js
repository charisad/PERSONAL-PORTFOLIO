import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Collins Baffour </span>
            from <span className="purple"> Accra, Ghana.</span>
            <br />
            Software and DevOps Engineer who loves to transform ideas into reality using
            code.
            <br />
            Success driven DevOps Pro—streamlining systems, scaling fast, and ensuring uptime flow! Skilled in AWS, Kubernetes, and secure infra design, I keep apps and networks steady, resilient, and refined
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
