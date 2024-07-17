import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const CartPage = () => {
  return (
    <Container style={{ backgroundColor: '#e9ecef', padding: '2rem' }}>
      <Row>
        <Col>
          <h2>Cart</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Product 1</td>
                <td>$10</td>
                <td>2</td>
                <td><Button variant="danger">Remove</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Product 2</td>
                <td>$15</td>
                <td>1</td>
                <td><Button variant="danger">Remove</Button></td>

              </tr>
              <tr>
                <td>3</td>
                <td>Product 3</td>
                <td>$15</td>
                <td>1</td>
                <td><Button variant="danger">Remove</Button></td>
                
              </tr><tr>
                <td>4</td>
                <td>Product 4</td>
                <td>$105</td>
                <td>1</td>
                <td><Button variant="danger">Remove</Button></td>
                
              </tr>
              <tr>
                <td>5</td>
                <td>Product 5</td>
                <td>$150</td>
                <td>1</td>
                <td><Button variant="danger">Remove</Button></td>
                
              </tr><tr>
                <td>6</td>
                <td>Product 6</td>
                <td>$45</td>
                <td>1</td>
                <td><Button variant="danger">Remove</Button></td>
                
              </tr><tr>
                <td>7</td>
                <td>Product 7</td>
                <td>$18</td>
                <td>1</td>
                <td><Button variant="danger">Remove</Button></td>
                
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
