import { Card, Button, Form }  from 'react-bootstrap';
import { useState } from 'react';
import '../App.css';
import Web3 from 'web3';

function OCreate() {

    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [payload, setPayload] = useState('');
    const [txn, setTxnHash] = useState('');

    async function checkAddress(addy) {
        console.log(addy)
        const isValid = await Web3.utils.isAddress(addy)
        if (isValid === true) {
            checkMessage(message)
        }
        else {
            alert("Not a valid (Send To) address!")
        }
    }

    async function checkMessage(msg) {
        if (msg !== '') {
            console.log(msg)
            const hexData = await Web3.utils.toHex(msg)
            console.log(hexData)
            setPayload(hexData)
        }
        else {
            alert("Enter a valid message")        
        }
    }

    async function sendMessage() {
        checkAddress(address)
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const account = accounts[0]
        const val = Web3.utils.toHex(Web3.utils.toWei('1', 'ether'))
        console.log(val)
        const transactionParameters = {
            nonce: '0x00', // ignored by MetaMask
            gasPrice: '0x30', // customizable by user during MetaMask confirmation.
            gas: '0x21000', 
            to: address, // Required except during contract publications.
            value: val,
            from: account, // must match user's active address.
            data: payload, // Optional, but used for defining smart contract creation and interaction.
            chainId: '0x137', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        };

        console.log(transactionParameters)
        const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
        })
        setTxnHash(txHash)
        console.log(txn)
    }

  return (
    <div className="centered">
    <Card className="text-center">
      <Card.Header>Create</Card.Header>
      <Card.Body>
        <Card.Title>Send a Message</Card.Title>
         <Form.Check type="radio" aria-label="radio 2" label="MATIC (for text)" defaultChecked/>
          <Form.Check type="radio" aria-label="radio 1" label="ERC721 (for pictures - coming soon...)"/>
         <br></br>
        <Card.Text>
          Want to send a message to an address? Fill in the deets below!
        </Card.Text>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Send To:</Form.Label>
            <Form.Control type="address" placeholder="0x..." value={address} onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3}  placeholder="gm..." value={message} onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={() => sendMessage(address)}>Send Message</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Built with ❤️ on polygon</Card.Footer>
    </Card>
    </div>
  );
}

export default OCreate;
