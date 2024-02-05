import React, { useEffect, useRef, useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

const Modal = ({ isOpen, closeModal, menuData, handleAddToCart, cart }) => {
    const modalRef = useRef(null);
    const [quantity, setQuantity] = useState(1);

    const [specialInstructions, setSpecialInstructions] = useState("");

    const handleSpecialInstructionsChange = (event) => {
        setSpecialInstructions(event.target.value);
    };


    const {
        product_name = '',
        product_price = 0,
        product_picture = null
        // ... (other properties)
    } = menuData || {};

    const [totalPrice, setTotalPrice] = useState(product_price);


    const handleClose = () => {
        closeModal();
        setQuantity(1);
    };

    const handleOverlayClick = (event) => {
        // Close the modal if the click is outside the modal content
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        const modalElement = document.getElementById('my_modal_5');

        if (modalElement) {
            if (isOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isOpen]);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        setTotalPrice(product_price * quantity);
    }, [quantity, product_price]);

    return (
        <dialog id="my_modal_5" className={`modal modal-bottom sm:modal-middle`} onClick={handleOverlayClick}>
            <div className="modal-box p-0 bg-[#EFEFEF]" ref={modalRef}>
                <div className="modal-action inline m-0 p-0">
                    <form method="dialog">
                        <main className='bg-[#EFEFEF] h-screen'>
                            {/* Header */}
                            <div className='relative'>
                                <div onClick={handleClose} className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white h-[6px] w-[146px] rounded my-3 mt-18 z-[2000]"></div>
                                <div className="relative h-[270px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-start  rounded-br-xl p-5">
                                    {/* Background Image */}
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover "
                                        src={product_picture}
                                        alt="Background"
                                    />

                                    {/* Overlay with Linear Gradient */}
                                    <img src="/modaloverlay.png" className='absolute inset-0 w-full h-full object-cover' />
                                    {/* <div className="absolute inset-0 bg-gradient-to-b from-[#3D231A]  to-transparent border-b-10 border-[#3D231A] "></div> */}

                                    {/* Content Overlay */}
                                    <div className="relative z-10 flex mx-4 sm:mx-6 md:mx-56 lg:mx-64 gap-4 mt-4">
                                        <div className='flex gap-20'>
                                            <div>
                                                <p className="font-bold text-white text-[27px] sm:text-[50px] md:text-[70px] lg:text-[80px] leading-none">
                                                    <span className="font-bold">{product_name}</span>
                                                </p>
                                                <p className="font-semibold text-tertiary text-[15px] sm:text-[22px] md:text-[30px] lg:text-[38px] leading-none mt-1 whitespace-nowrap text-[#FDB92A]">
                                                    Best Seller
                                                </p>
                                            </div>
                                            <div>
                                                <p className='bg-gradient-to-b from-[#F14C3B] to-[#FDB92A] text-white px-2 py-2 h-12 w-12 sm:h-11 sm:w-11 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full text-xs items-center flex justify-center'>
                                                    <img
                                                        src="/fireicon.png" // Replace with your image source
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
                            <div className='bg-white p-4 m-4 shadow rounded-lg -mt-10 relative z-[1000]'>
                                <div className='flex justify-between items-center mb-4'>
                                    <div>
                                        <p className='text-[20px] text-black font-semibold'>Total</p>
                                    </div>
                                    <div>
                                        <p className='text-[20px] text-black font-semibold'>{totalPrice} TK</p>
                                    </div>
                                </div>
                                <div className='p-3 border-2 rounded-lg'>
                                    <div className='flex justify-between items-center mb-3'>
                                        <div className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#fdb92a] text-[16px] tracking-[0] leading-[normal]">
                                            Add Extra
                                        </div>
                                        <div>
                                            <p className="bg-[#f1f1f1] py-[6px] px-[13px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#a4a4a4] text-[11.8px] tracking-[0] leading-[normal] whitespace-nowrap">Optional</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className="form-control">
                                            <label className="label justify-normal cursor-pointer gap-4">
                                                <input
                                                    type="checkbox"
                                                    // checked={isChecked1}

                                                    // onChange={handleCheckboxChange1}

                                                    className="checkbox rounded-sm border-[#FDB92A]"
                                                />
                                                <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#5b5b5b] text-[16px] tracking-[0] leading-[normal]">Vanilla Flavour</span>
                                            </label>
                                        </div>
                                        <div>
                                            <p className='text-[16px] text-black font-semibold'>+ 60 TK</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className="form-control">
                                            <label className="label justify-normal cursor-pointer gap-4">
                                                <input
                                                    type="checkbox"
                                                    // checked={isChecked2}

                                                    // onChange={handleCheckboxChange2}

                                                    className="checkbox rounded-sm border-[#FDB92A]"
                                                />
                                                <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#5b5b5b] text-[16px] tracking-[0] leading-[normal]">Chocolate Flavour</span>
                                            </label>
                                        </div>
                                        <div>
                                            <p className='text-[16px] text-black font-semibold'>+ 60 TK</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div>
                                        <p className='text-[18px] text-black font-semibold mb-2 '>Special Instructions:</p>
                                    </div>
                                    <textarea
                                    value={specialInstructions}
                                    onChange={handleSpecialInstructionsChange}
                                    className="textarea w-full textarea-bordered bg-white resize-none min-h-[90px]" placeholder=""></textarea>

                                </div>
                            </div>

                            {/* Bottob tab */}
                            <div className="sticky btm-nav flex justify-between bg-white h-24 z-[9000] px-4">
                                <div>
                                    <div className='flex justify-between items-center gap-3'>
                                        <div>
                                            <p className='p-3 bg-[#D9D9D9] items-center flex justify-center rounded-full'
                                                onClick={handleDecrement}
                                            ><MinusIcon className="h-5 w-5 text-gray-900" /></p>
                                        </div>
                                        <div className=''>
                                            <p className='text-black text-[33px]'>
                                                {quantity}
                                            </p>
                                        </div>
                                        <div className=''>
                                            <p className='p-3 bg-[#FDB92A] items-center flex justify-center rounded-full'
                                                onClick={handleIncrement}
                                            ><PlusIcon className="h-5 w-5 text-white" /></p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className='bg-[#3F170A] text-white px-7 py-2 rounded-3xl' onClick={() => handleAddToCart(menuData, quantity, specialInstructions)}>
                                        Add to cart
                                    </p>
                                </div>

                            </div>
                        </main>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
