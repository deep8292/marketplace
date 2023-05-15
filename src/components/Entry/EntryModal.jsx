import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function EntryModal(props) {

  const registerForm = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="registerForm.firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="John"
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerForm.lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="John"
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerForm.confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter Password"
              />
        </Form.Group>
      </Form>
    );
  }

  const loginForm = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="loginForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
              />
        </Form.Group>
      </Form>
    );
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.isRegister ? registerForm() : loginForm()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EntryModal;