import React from 'react';
import { loader } from '@/assets';
import FundCard from './FundCard';
import { useRouter } from 'next/navigation'; // For Next.js 14.1+ with App Directory

// Define the type for a single campaign
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

// Define the props type for the DisplayCampaigns component
interface DisplayCampaignsProps {
  title: string;
  isLoading: boolean;
  campaigns: Campaign[];
}

const DisplayCampaigns: React.FC<DisplayCampaignsProps> = ({ title, isLoading, campaigns }) => {
  const router = useRouter();

  // const handleNavigate = (campaign: Campaign) => {
  //   console.log(campaign);
  //   router.push(`/campaign-details/${encodeURIComponent(campaign.pId)}`);
  // };
  const handleNavigate = (campaign: Campaign) => {
    // Store campaign object in localStorage
    console.log(campaign);
    localStorage.setItem('campaign', JSON.stringify(campaign));
    router.push(`/campaign-details/${campaign.pId}`);
  };
  
  

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => (
          <FundCard
            key={campaign.pId} // Use a stable identifier as the key
            {...campaign}
            handleClick={() => handleNavigate(campaign)}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
