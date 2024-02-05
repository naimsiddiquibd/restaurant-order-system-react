import React, { useState } from 'react';
import { MinusIcon, PlusIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

const Cart = () => {

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
        updateTotalPrice(!isChecked1 ? 60 : -60); // Adjust total price based on checkbox state
    };

    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
        updateTotalPrice(!isChecked2 ? 60 : -60); // Adjust total price based on checkbox state
    };



    const updateTotalPrice = (amount) => {
        setTotalPrice((prevTotal) => Math.max(prevTotal + amount, 0));
    };


    return (
        <main className='bg-[#EFEFEF] h-screen'>
            {/* Header */}
            <div className='relative'>
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#9C9C9C] h-[6px] w-[146px] rounded my-3 mt-18 z-[2000]"></div>
                <div className="relative h-[140px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-start  rounded-br-xl p-5">


                    {/* Content Overlay */}
                    <div className="relative z-10 flex mx-4 sm:mx-6 md:mx-56 lg:mx-64 gap-4 mt-4">
                        <div className='flex justify-between gap-40 items-center'>
                            <div>
                                <p className="font-bold text-[#000000] text-[27px] sm:text-[50px] md:text-[70px] lg:text-[80px] leading-none">
                                    <span className="font-bold">Your Cart</span>
                                </p>
                                <p className="font-semibold text-tertiary text-[15px] sm:text-[22px] md:text-[30px] lg:text-[38px] leading-none mt-1 whitespace-nowrap text-[#FDB92A]">
                                    NorthEnd
                                </p>
                            </div>
                            <div>
                                <p className='bg-white text-white  h-14 w-14 sm:h-11 sm:w-11 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full'>
                                    <img
                                        src="/logo.png" // Replace with your image source
                                        alt="Profile"
                                        className="rounded-lg text-white"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricie total */}
            <div className='bg-white p-4 m-4 shadow-md rounded-lg -mt-10 relative z-[1000]'>

                <div className='p-3 border-2 rounded-lg'>
                    <div className='flex justify-start gap-4 items-start'>
                        <div className='flex justify-center items-center border-2 p-1 gap-1 h-10 mt-7'>
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                                <ChevronDownIcon className="h-4 w-4 text-black" />
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-2'>
                                <div className='w-[86px] h-[78px] rounded-lg'>
                                    <img src="/cappuccino.png" className='rounded-lg w-[86px] h-[78px] ' />
                                </div>
                                <div>
                                    <p className='text-[16px] w-[103px] text-gray-500'>Mini Cappuccino</p>
                                    <p className='text-[20px]'>235 TK</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-tertiary text-[15px] sm:text-[22px] md:text-[30px] lg:text-[38px] leading-none mt-4 mb-2 whitespace-nowrap text-[#FDB92A]">
                                    Extras
                                </p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className="form-control">
                                    <label className="label justify-normal cursor-pointer gap-4">
                                        <input
                                            type="checkbox"
                                            checked={isChecked1}
                                            onChange={handleCheckboxChange1}
                                            className="checkbox rounded-sm border-[#FDB92A]"
                                        />
                                        <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#5b5b5b] text-[16px] tracking-[0] leading-[normal]">Vanilla Flavour</span>
                                    </label>
                                </div>
                                <div>
                                    <p className='text-[20px] text-black font-semibold'>+ 60 TK</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className="form-control">
                                    <label className="label justify-normal cursor-pointer gap-4">
                                        <input
                                            type="checkbox"
                                            checked={isChecked2}
                                            onChange={handleCheckboxChange2}
                                            className="checkbox rounded-sm border-[#FDB92A]"
                                        />
                                        <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#5b5b5b] text-[16px] tracking-[0] leading-[normal]">Chocolate Flavour</span>
                                    </label>
                                </div>
                                <div>
                                    <p className='text-[20px] text-black font-semibold'>+ 60 TK</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='p-3 border-2 rounded-lg mt-3'>
                    <div className='flex justify-start gap-4 items-start'>
                        <div className='flex justify-center items-center border-2 p-1 gap-1 h-10 mt-7'>
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                                <ChevronDownIcon className="h-4 w-4 text-black" />
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-2'>
                                <div className='w-[86px] h-[78px] rounded-lg'>
                                    <img src="/cappuccino.png" className='rounded-lg w-[86px] h-[78px] ' />
                                </div>
                                <div>
                                    <p className='text-[16px] w-[103px] text-gray-500'>Mini Sandwich</p>
                                    <p className='text-[20px]'>235 TK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div>
                        <p className='text-[20px] text-black font-semibold mb-2'>Special Instructions:</p>
                    </div>
                    <textarea className="textarea w-full textarea-bordered resize-none min-h-[90px] bg-white" placeholder=""></textarea>

                </div>
            </div>
            {/* Bottob tab */}
            <div className='bg-white '>
                <div className='flex justify-between items-center px-4 pt-2'>
                    <div>
                        <p className='text-[18px] font-semibold text-black'>Total<span className='text-[12px] text-[#808080] ml-1'>(Incl. VAT)</span></p>
                    </div>
                    <div>
                        <p className='text-[20px] text-[#FDB92A] font-normal'>730 TK</p>
                    </div>
                </div>
                <div className="relative mt-2 bottom-0 left-1/2 transform -translate-x-1/2 bg-[#3F170A] h-[60px] w-[395px] rounded-lg my-0 flex justify-center items-center px-3 mb-4">
                    <div className='text-white'>Proceed to Pay</div>
                </div>
            </div>
        </main>


    );
};

export default Cart;