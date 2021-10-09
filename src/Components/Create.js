import { Card, Button, Form, Container }  from 'react-bootstrap';
import { useState } from 'react';
import OCanvas from './Canvas';
import '../App.css';

function OCreate() {

const [create, setCreate] = useState(false);

if (create == true) {
    console.log("Show component")
};


  return (
    <div className="centered">
    <Card className="text-center">
      <Card.Header>Create</Card.Header>
      <Card.Body>
        <Card.Title>Send a Message</Card.Title>
         <Form.Check type="radio" aria-label="radio 2" label="MATIC (for text)"/>
          <Form.Check type="radio" aria-label="radio 1" label="ERC721 (for pictures - coming soon...)"/>
         <br></br>
        <Card.Text>
          Want to send a message to an address? Fill in the deets below!
        </Card.Text>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Send To:</Form.Label>
            <Form.Control type="email" placeholder="0x..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3}  placeholder="gm..."/>
            </Form.Group>
        </Form>
        <Button variant="primary">Send Message</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Built with ❤️ on polygon</Card.Footer>
    </Card>
    </div>
  );
}

export default OCreate;
