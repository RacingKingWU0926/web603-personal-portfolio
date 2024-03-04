import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const projects = [
  {
    title: 'Algorithmic Trading Platform',
    description: 'Developed a robust Django-based web application for algorithmic trading. Implemented various data models and user APIs.',
    technologies: ['Django', 'AWS', 'Docker'],
    image: '/images/trading-platform.png',
  },
  {
    title: 'E-Commerce Website',
    description: 'Built a full-stack online store using React and Node.js, integrating payment processing with Stripe.',
    technologies: ['React', 'Node.js', 'Stripe'],
    image: '/images/e-commerce-website.png',
  },
  {
    title: 'Social Media Analytics Tool',
    description: 'Developed a tool for tracking social media engagement and analytics, providing real-time insights with a Python backend.',
    technologies: ['Python', 'Flask', 'MongoDB'],
    image: '/images/social-network-templates.jpg',
  },
  {
    title: 'Mobile Fitness Application',
    description: 'Contributed to a cross-platform mobile application for tracking fitness and health metrics, using React Native.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    image: '/images/fitness-app.png',
  },  
];

const Portfolio = () => (
  <Container className="portfolio-section">
    <Row>
      {projects.map((project, index) => (
        <Col md="4" key={index}>
          <Card>
            <img width="100%" src={project.image} alt={project.title} />
            <CardBody>
              <CardTitle tag="h5">{project.title}</CardTitle>
              <CardText>{project.description}</CardText>
              <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                  <span key={index} className="badge badge-secondary">{tech}</span>
              ))}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Portfolio;
