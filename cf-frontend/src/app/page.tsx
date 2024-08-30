"use client";

import Image from "next/image";
import thirdwebIcon from "@public/thirdweb.svg";
import Navbar from "@/components/Navbar";
import Profile from "./profile/page";
import CreateCampaign from "./create-campaign/page";
import CampaignDetails from "./campaign-details/page";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
      </div>
    </div>
  );
}