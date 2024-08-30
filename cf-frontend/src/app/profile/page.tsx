'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useAccount, useReadContract } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants/contract';
import DisplayCampaigns from '@/components/DisplayCampaigns';

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

const Profile: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const { address, isConnected } = useAccount();
  
  // Using useReadContract to fetch campaign data
  const { data: _getCampaigns, error } = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: 'getCampaigns',
  });

  useEffect(() => {
    const fetchCampaigns = async () => {
      setIsLoading(true);

      if (error) {
        console.error('Error fetching campaigns:', error);
        setIsLoading(false);
        return;
      }

      if (Array.isArray(_getCampaigns)) {
        const fetchedCampaigns: Campaign[] = _getCampaigns.map((campaign: any, i: number) => ({
          owner: campaign.owner,
          title: campaign.title,
          description: campaign.description,
          target: ethers.formatEther(campaign.target.toString()), // Assuming target is in wei
          deadline: Number(campaign.deadline), // Ensure it's a number
          amountCollected: ethers.formatEther(campaign.amountCollected.toString()), // Assuming amountCollected is in wei
          image: campaign.image,
          pId: i,
        }));

        // Filter campaigns based on the owner address
        const filteredCampaigns = fetchedCampaigns.filter(campaign => campaign.owner === address);

        setCampaigns(filteredCampaigns);
      } else {
        console.error("Unexpected response format from getCampaigns");
      }

      setIsLoading(false);
    };

    if (isConnected) {
      fetchCampaigns();
    }
  }, [isConnected, _getCampaigns, error, address]);

  return (
    <DisplayCampaigns
      title="Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Profile;
