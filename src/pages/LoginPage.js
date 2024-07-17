import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container style={{ backgroundColor: '#d4edda', padding: '2rem' }}>
      <Row>
        <Col>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
