import React from 'react';
import { Col, Row, Container } from "../components/Grid";
import Banner from '../components/Banner';

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Banner>
            <h1>404 Page Not Found</h1>
          </Banner>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;