import { FunctionComponent } from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import { Page, Heading } from '../components/styles';

const About: FunctionComponent = () => {
  return (
    <Page>
      <Heading>About Author</Heading>
      <Row>
        <Col xs={4}>
          <p><Image roundedCircle src='author.png' alt='Nikita Kolos' /></p>
        </Col>
        <Col>
          <p>My name is Nick. My experience of programming is about seven years. 
          I have a degree in engineering related to computers and information technologies. 
          Developing both FE and BE parts of an applications. And feel strongly in FE. 
          I'm using React as a main JS framework. Also using Node.js and GoLang as my main BE tools. 
          As databases mostly choose Postgress and MySQL.
          I can learn quickly any desired technology for using on the project.</p>
        </Col>
      </Row>
      <p> As about my qualities, I will say that I'm smart, handsome, popular and modests.) It is a joke!)
        Seriously, I appologize that I'm calm, kind, non-toxic, friendy, 
        curious, open-minded, responsible, attentive, little nerdy, like humour.</p>
      <p>Interested in music, traveling, extreme sports and sience.
        Like listen to punk-rock, going to a music festivals, play in rock bands.
        Play bass and guitar. As for sports I prefer skiing, skateboarding, surf.</p>
    </Page>
  );
};

export default About;
