# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Notes from the tutorial

Let's say you wanted to randomly change your contract right now. Here's what we'd need to do:

- Deploy it again.
- Update the contract address on our frontend (copy/paste from console log).
- Update the abi file on our frontend (copy/paste from artifacts folder).
  People constantly forget to do these 3 steps when they change their contract. Don't forget lol.
  Why do we need to do all this? Because smart contracts are immutable. They can't change. They're permanent. That means changing a contract requires a full redeploy. Redeploying will also reset all the variables since it'd be treated as a brand new contract. That means we lose all our NFT data when we update the contract's code.
  So, what you'll need to do is:
- Deploy again using npx hardhat run scripts/deploy.js --network rinkeby
- Change contractAddress in constants.js to be the new contract address we got from the step above in the terminal (just like we did before the first time we deployed).
- Get the updated abi file from artifacts and copy-paste it into your web app just like we did above.
