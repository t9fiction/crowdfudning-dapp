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
      Home
    </div>
  );
}