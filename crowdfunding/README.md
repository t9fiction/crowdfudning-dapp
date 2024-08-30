# Crowd Funding Campaign Project

Welcome to the Crowd Funding Campaign Project! This decentralized crowdfunding platform allows users to create and contribute to campaigns, leveraging smart contracts on the Tetchain Sepolia testnet. The platform features WalletConnect integration for seamless Ethereum wallet connectivity.

## Features

- **Campaign Creation**: Users can create new crowdfunding campaigns with specific funding goals and deadlines.
- **Contributions**: Supporters can contribute to campaigns using Ethereum.
- **WalletConnect Integration**: Connect with Ethereum wallets via WalletConnect for secure transactions.
- **Real-time Updates**: Get real-time updates on campaign status and contributions.
- **Responsive Design**: A sleek, modern UI built with TailwindCSS for a great user experience.

## Tech Stack

- **Next.js 14**: Framework for server-rendered React applications.
- **ethers6**: Ethereum library for interacting with smart contracts and the blockchain.
- **wagmi**: React hooks library for managing Ethereum state.
- **viem**: A library for working with Ethereum and other blockchain data.
- **WalletConnect**: Protocol for connecting decentralized applications to mobile wallets.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **chain Sepolia**: Ethereum testnet used for deploying and testing smart contracts.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js (>=16.0.0)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/crowdfunding-campaign.git
   cd crowdfunding-campaign
   ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure environment variable:**
    Create a .env.local file in the root of the project and add your walletConnect cloud variable:
    NEXT_PUBLIC_PROJECT_ID=your_walletconnect_cloud_id

4. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Visit http://localhost:3000 to view the application.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Next.js: For the powerful React framework.
ethers.js: For simplifying Ethereum interactions.
TailwindCSS: For the beautiful and responsive design.
WalletConnect: For enabling wallet connectivity.
Tetchain Sepolia: For the Ethereum test network used for deployment.

@Contact
For any questions or feedback, please reach out to sohail.sohailishaq@gmail.com.