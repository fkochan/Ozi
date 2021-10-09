import { Card, Button }  from 'react-bootstrap';

function OHome() {
  return (
    <div className="centered">
    <Card className="text-center">
    <Card.Header>Ozi V1</Card.Header>
    <Card.Body>
    <Card.Title>Send messages to frens or anons</Card.Title>
    <Card.Text>
    All you need is their public key...
    </Card.Text>
    <h6 style={{textDecoration:"underline"}}><a href="https://github.com/fkochan/Ozi/blob/main/README.md">Learn more...</a></h6>
    <Button href="/create" variant="primary">Send a message</Button>
    </Card.Body>
    </Card>
    </div>
  );
}

export default OHome;
