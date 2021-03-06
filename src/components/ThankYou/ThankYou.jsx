import * as React from "react"
import Modal from 'react-bootstrap/Modal'


const ThankYouModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              psychresearch.com
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-bg">
            <h2 className="modal-text bold-text">THANK YOU</h2>
            <br/>
            <p className="modal-text">
              Your idea is now<br/>one step closer<br/>to coming to life.
            </p>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      );
}

export default ThankYouModal