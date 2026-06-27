# Crowdfunding dApp

A decentralized crowdfunding platform built on Ethereum. Users can create fundraising campaigns, contribute ETH, and track progress — all on-chain.

## Features

- **Create Campaigns** — Launch fundraising campaigns with a goal amount and deadline
- **Contribute ETH** — Support campaigns by sending ETH directly through the dApp
- **On-Chain Transparency** — All campaign data and contributions are recorded on the blockchain
- **Wallet Integration** — Connect any Web3 wallet via Web3Modal (MetaMask, WalletConnect, etc.)
- **Campaign Management** — View campaign details, progress, and contributor history

## Tech Stack

### Smart Contracts (`cf-contracts/`)
| Technology | Purpose |
|---|---|
| Solidity | Smart contract language |
| Foundry | Development & testing framework |

### Frontend (`crowdfunding/`)
| Technology | Purpose |
|---|---|
| Next.js 14 | React framework |
| TypeScript | Type-safe development |
| wagmi / viem | Ethereum interaction library |
| ethers | Ethereum utility library |
| Web3Modal | Multi-wallet connection |
| Tailwind CSS | Styling |

## Project Structure

```
crowdfudning-dapp/
├── cf-contracts/              # Solidity smart contracts
│   ├── src/
│   │   └── CrowdFunding.sol   # Main crowdfunding contract
│   ├── script/                # Deployment scripts
│   ├── test/                  # Contract tests
│   ├── foundry.toml           # Foundry configuration
│   └── Makefile               # Build/deploy helpers
├── crowdfunding/              # Next.js frontend
│   ├── src/
│   │   ├── app/               # App Router pages
│   │   ├── components/        # React components
│   │   └── ...                # Config files
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Foundry (for smart contract development)
- A Web3 wallet (e.g., MetaMask)

### Installation

```bash
# Clone the repo
git clone https://github.com/t9fiction/crowdfudning-dapp.git
cd crowdfudning-dapp

# Install frontend dependencies
cd crowdfunding
npm install

# Install contract dependencies
cd ../cf-contracts
forge install
```

### Environment Variables

Create `crowdfunding/.env.local`:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_CONTRACT_ADDRESS=deployed_contract_address
```

### Running Locally

1. **Start a local Ethereum node:**
   ```bash
   cd cf-contracts
   anvil
   ```

2. **Deploy the contract:**
   ```bash
   forge script script/Deploy.s.sol --rpc-url http://localhost:8545 --broadcast
   ```

3. **Start the frontend:**
   ```bash
   cd crowdfunding
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Smart Contract

`CrowdFunding.sol` manages:
- Campaign creation with funding goals and deadlines
- Contribution tracking per campaign
- Withdrawal of funds by campaign creators upon success
- Refunds for contributors if goal is not met

### Key Functions

| Function | Description |
|---|---|
| `createCampaign` | Start a new fundraising campaign |
| `contribute` | Send ETH to a campaign |
| `withdrawFunds` | Creator claims raised funds (if goal met) |
| `getRefund` | Contributors reclaim funds (if goal not met) |
| `getCampaigns` | View all campaigns |

## Testing

```bash
cd cf-contracts
forge test -vvv
forge coverage
```

## Deployment

### Sepolia Testnet

```bash
cd cf-contracts
make deploy-sepolia
```

### Anvil (Local)

```bash
cd cf-contracts
make deploy-anvil
```

## License

MIT
