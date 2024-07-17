import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container style={{ backgroundColor: '#f8f9fa', padding: '2rem' }}>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-psd/top-view-mock-up-home-groceries_23-2148493399.jpg?t=st=1721224660~exp=1721228260~hmac=1618d41eae668a8d8f19fd6db92fcc4af814ef3291d8b0bc5b2c36e166e6e161&w=900" />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>Some quick example text to build on the product title.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/beautiful-woman-sitting-home-with-electronic-devices-shopping-bags-credit-card-hand_23-2148101678.jpg?t=st=1721224467~exp=1721228067~hmac=0a25578b4aabfbfdd09b93253bff446da46e7de68cc525efd7c15d46a48f3c82&w=900" />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>Some quick example text to build on the product title.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-psd/top-view-mock-up-home-groceries_23-2148493399.jpg?t=st=1721224660~exp=1721228260~hmac=1618d41eae668a8d8f19fd6db92fcc4af814ef3291d8b0bc5b2c36e166e6e161&w=900" />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>Some quick example text to build on the product title.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/beautiful-woman-sitting-home-with-electronic-devices-shopping-bags-credit-card-hand_23-2148101678.jpg?t=st=1721224467~exp=1721228067~hmac=0a25578b4aabfbfdd09b93253bff446da46e7de68cc525efd7c15d46a48f3c82&w=900" />
            <Card.Body>
              <Card.Title>Product 4</Card.Title>
              <Card.Text>Some quick example text to build on the product title.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Row><Col>
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default LandingPage;
