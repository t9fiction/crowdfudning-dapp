'use client'
import React from 'react';
import { useRouter } from 'next/router';

// Define the type for the campaign
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

const CampaignDetails: React.FC = () => {
  const router = useRouter();
  const { query } = router;

  // Retrieve and parse campaign data
  const campaign = query.campaign ? JSON.parse(query.campaign as string) as Campaign : null;

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render campaign details */}
      <h1>{campaign.title}</h1>
      {/* Add more details here */}
    </div>
  );
};

export default CampaignDetails;
