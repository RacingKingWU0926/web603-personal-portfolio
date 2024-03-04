import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <Container className="about-section">
      <Row className="align-items-center">
        <Col md="6">
          <h1 className="display-3">Hello! I'm Jason.</h1>
          <p className="lead">An aspiring software engineer.</p>
          <p>
            With over 5 years in IT, specializing in web application development, I have honed my skills in Python and web frameworks like Django. I'm passionate about backend engineering and eager to face ambitious challenges. Currently pursuing a master's in computer science, I am committed to innovation and excellence in the field of web development.
          </p>
        </Col>
        <Col md="6" className="text-center">
          <img src="/images/profile.png" alt="Jason Lei" className="img-fluid rounded-circle"/>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
