'use client';

import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { config, projectId, metadata } from '@/config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, useAccount, WagmiProvider, useWriteContract, useReadContract } from 'wagmi';
import { createPublicClient, getContract, http } from 'viem';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/constants/contract';
import { sepolia } from 'viem/chains';
import { ethers } from 'ethers';

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');


// Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
});

// Define the shape of the state context
interface StateContextProps {
  address: string | undefined;
  contract: any;
  // createCampaign: (form: CampaignForm) => Promise<void>;
  // getCampaigns: () => Promise<Campaign[]>;
  // getUserCampaigns: () => Promise<Campaign[]>;
  // donate: (pId: string, amount: string) => Promise<any>;
  // getDonations: (pId: string) => Promise<Donation[]>;
}

// Define types for your forms and data structures
interface CampaignForm {
  title: string;
  description: string;
  target: string;
  deadline: string;
  image: string;
}

interface Campaign {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: number;
  amountCollected: string;
  image: string;
  pId: number;
}

interface Donation {
  donator: string;
  donation: string;
}


const StateContext = createContext<StateContextProps | undefined>(undefined);

export const StateContextProvider = ({ children }: { children: ReactNode }) => {
  
  
  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http()
  });

  const contract = getContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    client: publicClient,
  });

  const { address } = useAccount();

  // Getting all the campaigns

  // const getCampaigns = async (): Promise<Campaign[]> => {
  //   const { data: _getCampaigns, error } = useReadContract({
  //     abi: CONTRACT_ABI,
  //     address: CONTRACT_ADDRESS,
  //     functionName: 'getCampaigns'
  //   })

  //   // Type guard to ensure the result is an array
  //   if (Array.isArray(_getCampaigns)) {
  //     const campaigns: Campaign[] = _getCampaigns.map((campaign: any, i: number) => ({
  //       owner: campaign.owner,
  //       title: campaign.title,
  //       description: campaign.description,
  //       target: ethers.formatEther(campaign.target.toString()), // Assuming target is in wei
  //       deadline: Number(campaign.deadline), // Ensure it's a number
  //       amountCollected: ethers.formatEther(campaign.amountCollected.toString()), // Assuming amountCollected is in wei
  //       image: campaign.image,
  //       pId: i,
  //     }));

  //     return campaigns;
  //   } else {
  //     throw new Error("Unexpected response format from getCampaigns");
  //   }

  // };

  // Get campaigns for particular wallet

  // const getUserCampaigns = async (): Promise<Campaign[]> => {
  //   try {
  //     const allCampaigns = await getCampaigns();
  //     return allCampaigns.filter((campaign) => campaign.owner === address);
  //   } catch (error) {
  //     console.error("Failed to fetch user campaigns", error);
  //     return [];
  //   }
  // };

  // const donate = async (pId: string, amount: string) => {
  //   const data = await writeContract({
  //     abi: CONTRACT_ABI,
  //     address: CONTRACT_ADDRESS,
  //     functionName: 'donateToCampaign',
  //     args: [pId],
  //     value: ethers.parseEther(amount),
  //   });
  //   return data;
  // };


  // const getDonations = async (pId: string): Promise<Donation[]> => {
  //   try {
  //     const { data: _getDonators, error } = await useReadContract({
  //       abi: CONTRACT_ABI,
  //       address: CONTRACT_ADDRESS,
  //       functionName: 'getDonators',
  //       args: [pId],
  //     });
  
  //     if (error) {
  //       throw new Error(`Error fetching donations: ${error.message}`);
  //     }
  
  //     // Ensure _getDonators is properly formatted
  //     if (Array.isArray(_getDonators)) {
  //       return _getDonators.map((donation: any) => ({
  //         donator: donation.donator,
  //         donation: ethers.formatEther(donation.donation.toString()), // Assuming donation amount is in wei
  //       }));
  //     } else {
  //       throw new Error('Unexpected response format from getDonators');
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch donations', error);
  //     return []; // Return an empty array or handle error as needed
  //   }
  // };


  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        // donate,
        // getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateContextProvider');
  }
  return context;
};

export default function AppKitProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <StateContextProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </StateContextProvider>
    </WagmiProvider>
  );
}
