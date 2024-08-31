'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ethers } from 'ethers';
import { checkIfImage } from '@/utils';
import { money } from '@/assets';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import { useAccount, useWriteContract } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants/contract';

interface FormFields {
  name: string;
  title: string;
  description: string;
  target: string;
  deadline: string;
  image: string;
}

const CreateCampaign: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { writeContract } = useWriteContract();
  const { address } = useAccount();
  const [form, setForm] = useState<FormFields>({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });
  const router = useRouter();

  const handleFormFieldChange = (fieldName: keyof FormFields, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists: boolean) => {
      if (exists) {
        setIsLoading(true);
        try {
          const tx = await writeContract({
            abi: CONTRACT_ABI,
            address: CONTRACT_ADDRESS,
            functionName: 'createCampaign',
            args: [
              address, // owner
              form.title, // title
              form.description, // description
              ethers.parseUnits(form.target, 18), // converted target amount
              new Date(form.deadline).getTime(), // deadline
              form.image, // image URL
            ],
          });
          // const receipt = await tx.wait();
          // console.log("Transaction mined:", receipt);
          router.push('/'); // This will now correctly navigate to the root
        } catch (error) {
          console.error("Contract call failed", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        alert('Please provide a valid image URL');
        setForm({ ...form, image: '' });
      }
    });
  };


  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Start a Campaign</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          inputType="text"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money.src} alt="money" className="w-[40px] h-[40px] object-contain" />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField
          labelName="Campaign Image *"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
