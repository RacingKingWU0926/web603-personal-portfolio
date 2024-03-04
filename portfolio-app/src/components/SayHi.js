import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SayHi = () => {
  return (
    <Container className="say-hi-section">
      <Row>
        <Col md="6">
          <h2>Let's connect!</h2>
          <p>I'd love to hear from you; whether you want to learn more about my services, want to collaborate on a project, or simply just want to say hello.</p>
          <p>You can fill out the form on the left or get in touch with me at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
        </Col>
        <Col md="6">
          <Form>
            <FormGroup>
              <Label for="name">Your Name</Label>
              <Input type="text" name="name" id="name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Your Email</Label>
              <Input type="email" name="email" id="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Your Message</Label>
              <Input type="textarea" name="message" id="message" placeholder="Your Message" />
            </FormGroup>
            <Button color="primary">Connect with Jason</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SayHi;
