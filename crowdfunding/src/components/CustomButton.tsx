import React from 'react';
// import ConnectButton from './ConnectButton';

// Define the prop types for CustomButton
interface CustomButtonProps {
    btnType: "button" | "submit" | "reset"; // Restrict to valid button types
    title: string;
    handleClick?: () => void;
    styles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ btnType, title, handleClick, styles }) => {

    return (
        <button
            type={btnType}
            className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
}

export default CustomButton;
