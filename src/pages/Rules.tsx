import { FunctionComponent } from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import { Page, Heading } from '../components/styles';


const Rules: FunctionComponent = () => {
  return (
    <Page>
      <Heading>Game Rules</Heading>
      <p>The goal of the puzzle is to rotate the tiles on the map to make all pipes connected 
        in a single group, with no loops and no dangling pipes.  
        There are 6 levels available, with increasing size and thus increasing complexity. 
        Hover and click an element to rotate it.</p>
      <br />
      <Row>
        <Col sm={5}>
          <p>For example, given the map of:</p>
          <p><Image src='map.png' alt='pipes puzzle map example' /></p>
          </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <p>... you should rotate it to:</p>
          <p><Image src='map_completed.png' alt='complited puzzle' /></p>
        </Col>
      </Row>
    </Page>
  );
};

export default Rules;
