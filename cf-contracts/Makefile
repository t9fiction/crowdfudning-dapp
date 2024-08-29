-include .env

.PHONY: all test deploy

build: 
	forge build

etest: 
	echo "You are in the Makefile"

test: 
	forge test -vvvv

install: 
	forge install foundry-rs/forge-std --no-commit

deploy-sepolia: 
	forge script script/DeployCrowdFunding.s.sol:DeployCrowdFunding --rpc-url $(SEPOLIA_RPC_URL) --broadcast --verify --etherscan-api-key $(ETHERSCAN_API_KEY) -vvvv

deploy-anvil: 
	forge script script/DeployCrowdFunding.s.sol:DeployCrowdFunding --rpc-url $(ANVIL_RPC_URL) --broadcast --etherscan-api-key $(ETHERSCAN_API_KEY) -vvvv

deploy: 
	forge script script/DeployCrowdFunding.s.sol:DeployCrowdFunding --broadcast -vvvv
