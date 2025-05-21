This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Bitgert Staking V2 (Demo)

* [Bitgert LinkedIn  ](https://www.linkedin.com/company/bitrisetoken)
* [Bitgert Official Website ](https://bitgert.com)
* [Bitgert on CoinMarketCap](https://coinmarketcap.com/currencies/bitrise-token/)

## Requirements

* Website Features and Functionality

1. Connect with Cryptocurrency wallet using Walletconnect v2 Wagmi
   integration
2. Validation of the blockchain on connection
3. Current staking APY shown on the top in moving strip.
4. When connecting with any of the wallets mentioned above, the list of
   previous transactions to be shown in My Stakes
5. Option to buy token at the footer with Legal and other terms and
   conditions.
6. While placing any stake, user should enter the amount of token to be
   staked, followed by the tenure of the staking.
7. Complete transparency of the transaction should be followed by the steps
   to make sure that user is aware of the amount he is staking and the returns.
8. After successful stake, user will be redirected to My Stakes page to show
   the current staking and previous transactions.
9. Previous transactions or staking should show the rewards earned so far
   since the time of stake.
10. When user wants to un-stake tokens, a penalty fee of X% will be charged based on the remaining staking time.
11. Penalty fees will not be charged if the staking is paused by admin.
12. Rewards will not be given if the staking is paused by admin.
13. Rewards will show ZERO in case of staking paused by admin.

- Smart Contract Features and Functionality

1. Admin should have the full control over setting the APY rate for given set
   of tenures i.e., 3 Months, 1 year, 2 years and 4 years.
2. Website’s top slider should take the APY values from the smart contracts
   to make sure the latest values are shown.
3. Penalty fees are managed by admin from the smart contracts.
4. Staking rewards are to be managed by admin. 5. Admin should be able to
   blacklist and whitelist wallets for staking

- Multi Contract Staking Platform Development Special
  Requirements

1. Possible to create an admin panel which will be linked to smart contracts
   directly which could ease the management of contracts easily.
2. There should be a limit of Minimum and Maximum amount of tokens
   users can stake at a time

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
