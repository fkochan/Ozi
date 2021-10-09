import { Card, Button }  from 'react-bootstrap';
import Web3 from 'web3'

function OButton() {

    async function load() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // ask user permission to access his accounts
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log("Must install MetaMask");
      }
    }

  return (
    <div>
        <Button onClick={load} variant="primary">Connect Wallet</Button>
    </div>
  );
}

export default OButton;
