import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import ThankYouModal from '../ThankYou/ThankYou';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const ContactForm = () => {
  const [formData, setFormdata] = React.useState({});
  const [modalShow, setModalShow] = React.useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formData,
      }),
    })
      .then(() => setModalShow(true))
      .catch((error) => alert(error));
  };

  return (
    <>
      <section id="contact">
        <Container>
          <Title title="contact us" />
          <div className='contact-wrapper'>
            <Row className="contact-row">
              <Col>
                <div className="contact-wrapper__info">
                  <p className="contact-wrapper__info-text">You can send us an e-mail to:</p>
                  <a href="mailto:potemi@gmail.com" className="contact-wrapper__info-text">info@psycheresearch.com</a><br />
                  <p className="contact-wrapper__info-text">Or you can fill this form: </p>
                </div>
              </Col>
              <Col>
                <div className="contact-wrapper__form">
                  <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label className="form-item__label">
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                      </label>
                    </p>
                    <p className="form-item">
                      <label className="form-item__label">
                        {/* First Name*: */}
                        <input
                          className="name-input"
                          type="text"
                          name="first name"
                          required
                          placeHolder="First Name*"
                          onChange={handleChange}
                        />
                      </label>
                    </p>
                      <p className="form-item">
                        <label className="form-item__label">
                          {/* Last Name*: */}
                          <input
                            className="name-input"
                            type="text"
                            name="name"
                            required
                            placeHolder="Last Name*"
                            onChange={handleChange}
                          />
                        </label>
                      </p>
                    <p className="form-item">
                      <label className="form-item__label">
                        {/* Email*: */}
                        <input
                          className="email-input"
                          type="email"
                          name="email"
                          required
                          placeHolder="Your Email Address*"
                          onChange={handleChange}
                        />
                      </label>
                    </p>
                    <p className="form-item">
                      <label className="form-item__label">
                        {/* Message*: */}
                        <textarea
                          className="message-input"
                          name="message"
                          required
                          placeHolder="Your Message*"
                          onChange={handleChange}
                        />
                      </label>
                    </p>
                    <p className="contact-cta">
                      <button className="cta-btn cta-btn--contact" type="submit">
                          Submit
                      </button>

                      <ThankYouModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}/>
                    </p>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
