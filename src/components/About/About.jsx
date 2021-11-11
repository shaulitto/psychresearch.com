import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { StaticImage } from "gatsby-plugin-image";

const About = () => {

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
    <section id="about">
      <Container>
        <Title title="what do we do?" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
              <StaticImage
                  src="../../images/about-image.png"
                  alt="Test tubes"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  height={300}
                  aspectRatio={1/1}
                  />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
                <div className="about-wrapper__info">
                  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                      <p className="about-wrapper__info-text">
                      We are a Canadian based consulting firm dedicated to the advancement of psychedelic science and therapeutics.</p>
                  </Fade>
                  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                      <p className="about-wrapper__info-text">
                      We offer a comprehensive suite of services to help develop your vision:
                      </p>
                  </Fade>
                  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                      <div className="services-list-box">
                        <p className="about-wrapper__info-text">
                          <li>Scientific Literature Review</li>
                          <li>Clinical Study Trial Design</li>
                          <li>Data Analysis</li>
                          <li>Health Canada Regulatory Support</li>
                        </p>
                      </div>
                  </Fade>
                  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                      <p className="about-wrapper__info-text">
                      Our commitment to scientific rigor is unwavering and with us at your side you’ll have results you can trust.
                      </p>
                  </Fade>
                         
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
