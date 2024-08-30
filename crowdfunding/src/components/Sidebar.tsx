'use client';

import React, { useState } from 'react';
import { logo, sun } from '@/assets';
import { navlinks } from '@/constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

// Define props type for Icon component
interface IconProps {
    styles?: string;
    name: string;
    imgUrl: string;
    isActive?: boolean;
    disabled?: boolean;
    handleClick?: () => void;
}

// Define type for navlink items
interface NavLink {
    name: string;
    imgUrl: string;
    link: string;
    disabled?: boolean; // Make it optional
}


const Icon: React.FC<IconProps> = ({ styles = '', name, imgUrl, isActive, disabled, handleClick }) => (
    <div
        className={`w-[48px] h-[48px] rounded-[10px] ${isActive ? 'bg-primarybg' : ''
            } flex justify-center items-center ${!disabled ? 'cursor-pointer' : ''} ${styles}`}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handleClick?.();
            }
        }}
    >
        <Image src={imgUrl} alt={`${name} icon`} className={`w-1/2 h-1/2 ${!isActive ? 'grayscale' : ''}`} />
    </div>
);

const Sidebar: React.FC = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState('dashboard');
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
            <Link href="/">
                <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} name="logo" />
            </Link>
            <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {navlinks.map((link: NavLink) => (
                        <Link href={link.link} key={link.name}>
                            <Icon
                                {...link}
                                isActive={pathname === link.link}
                                handleClick={() => {
                                    if (!link.disabled) {
                                        setIsActive(link.name);
                                        router.push(link.link);
                                    }
                                }}
                            />
                        </Link>
                    ))}
                </div>

                <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} name="theme" />
            </div>
        </div>
    );
};

export default Sidebar;
