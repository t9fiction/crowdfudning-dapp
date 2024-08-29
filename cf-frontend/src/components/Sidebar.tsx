'use client';

import React, { useState, MouseEventHandler } from 'react';
import { logo, sun } from '@/assets'; // Ensure these assets are properly configured in Next.js
import { navlinks } from '@/constants'; // Adjust as needed for your project structure
import Link from 'next/link';

// Define props type for Icon component
interface IconProps {
  styles?: string;
  name?: string;
  imgUrl: string;
  isActive?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLDivElement>;
}

const Icon: React.FC<IconProps> = ({ styles = '', name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && 'bg-[#2c2f32]'
    } flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
);

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState<string>('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
          <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
      </Link>
      Sidebar1
    </div>
  );
};

export default Sidebar;
