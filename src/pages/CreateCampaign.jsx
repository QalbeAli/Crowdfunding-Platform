import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from "ethers"
import { money } from "../assets"
import { CustomButton, FormField } from '../components'
import { checkIfImage } from "../utils"
const CreateCampaign = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: '',
    })

    const handleSubmit = () => {
        console.log("Form is Submitted")
    }

    return (
        <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
            {isLoading && "Loader...."}
            <div className='flex justify-center items-center p-6 sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
                <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] text-white  leading-[38px]'>
                    Start a Campaign
                </h1>
            </div>
            <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]" >
                <div className='flex flex-wrap gap-[40px]'>
                    <FormField
                        labelName="Your Name *"
                        placeholder="John Doe"
                        inputType="text"
                        value={form.name}
                        handleChange={() => { }}
                    />
                    <FormField
                        labelName="Campaign Title"
                        placeholder="Write a Title"
                        inputType="text"
                        value={form.title}
                        handleChange={() => { }}
                    />
                </div>
                <FormField
                    labelName="Campaign Story"
                    placeholder="Write your Story"
                    isTextArea
                    value={form.description}
                    handleChange={() => { }}
                />
                <div className='w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]'>
                    <img src={money} alt="money" className='w-[40px] h-[40px] object-contain' />
                    <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You Will Get The 100% of the Raised Amount</h4>
                </div>

                <div className='flex flex-wrap gap-[40px]'>
                    <FormField
                        labelName="Goal *"
                        placeholder="ETH 0.50"
                        inputType="text"
                        value={form.target}
                        handleChange={() => { }}
                    />
                    <FormField
                        labelName="End Date"
                        placeholder="End Date"
                        inputType="date"
                        value={form.deadline}
                        handleChange={() => { }}
                    />
                </div>
                <div>
                    <CustomButton
                        btnType="submit"
                        title="Submit the Campaign"
                        styles="bg-[#1dc071]"
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateCampaign