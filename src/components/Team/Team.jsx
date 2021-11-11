import React, { useEffect, useState } from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import TeamImg from '../Image/TeamImg';

const Team = () => {
  
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="team">
      <Container>
        <Title title="Who are we?" />
        <div className="team-wrapper">
        <Row className="team-row">
          <Col lg={10} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="team-wrapper__image">
                  <TeamImg alt="Rotem Petranker" filename='RotemHeadshot.jpg' />
              </div>
            </Fade>  
          </Col>
          <Col lg={10} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="team-wrapper__info">
                <h2 className="team-wrapper__info-header">Rotem Petranker</h2>
                <p className="team-wrapper__info-text">Co-founder and director of the Psychedelic Science Research Program at the University of Toronto and the Canadian Centre for Psychedelic Science.</p>
                <p className="team-wrapper__info-text">His main research interests are sustained attention, emotional regulation, and creativity, all of which may be affected by psychedelics.</p>
                <p className="team-wrapper__info-text">Rotem is passionate about establishing a rigorous framework for the study of psychedelics using the principles of Open Science.</p>
                <p className="team-wrapper__info-text">His clinical interests include disorders amenable to psychedelic psychotherapy, including mood disorders and OCD.</p>
              </div>
            </Fade>   
          </Col>
        </Row>  
        <Row className="team-row">
          <Col lg={10} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="team-wrapper__image">
                  <TeamImg alt="Rotem Petranker" filename='AdamHeadshot.jpeg' />
              </div>
            </Fade>  
          </Col>
          <Col lg={10} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div className="team-wrapper__info">
              <h2 className="team-wrapper__info-header">Adam Blackman</h2>
              <p className="team-wrapper__info-text">A Psychiatrist and adjunct assistant professor in the Department of Psychiatry at the University of Toronto, where he is medical director of the Mississauga campus Psychedelic Research Studies Program.</p>
              <p className="team-wrapper__info-text">He is passionate about the potential of novel treatments to alleviate mental suffering
              and is deeply interested in mind-body research into consciousness and in theoretical models for psychedelic psychotherapy.</p>
              <p className="team-wrapper__info-text">As part of his commitment to collaboration towards breakthrough knowledge and solutions, Adam advises multiple healthcare innovation and psychedelic therapy startups.</p>
              </div>
            </Fade>   
          </Col>
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default Team;