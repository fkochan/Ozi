import { Card, Button }  from 'react-bootstrap';
import { useState } from 'react';
import Web3 from 'web3';

function OButton() {

    const [account, setAccount] = useState()


    async function load() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // ask user permission to access his accounts
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(web3)
            const chainId = await web3.eth.getChainId()
            if (chainId != 137) {
                alert("Please first change your MetaMask network to the MATIC RPC")
            }
            else {
                const account = accounts[0];
                let displayAccount = "Account: " + account.substring(0, 4) + "..." + account.slice(-5);
                setAccount(displayAccount)
            }
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log("Must install MetaMask");
      }
    }

  return (
    <div>
        <Button variant="primary" onClick={load}><span id="wallet">{account ? account : "Connect Wallet"}</span></Button>
    </div>
  );
}

export default OButton;
