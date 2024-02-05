import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import OnlinePayment from '../OnlinePayment/OnlinePayment';

const Cart = ({ isCartModalOpen, closeCartModal, cart, totalCartPrice, handleAddToCart, slug }) => {

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);


    const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
    };
    const openPaymentModal = () => {
        setIsPaymentModalOpen(true);
    };




    const modalRef = useRef(null);

    const handleClose = () => {
        closeCartModal();
    };

    const handleOverlayClick = (event) => {
        // Close the modal if the click is outside the modal content
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        const modalElement = document.getElementById('my_modal_6');

        if (modalElement) {
            if (isCartModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isCartModalOpen]);



    return (
        <dialog id="my_modal_6" className={`modal modal-bottom sm:modal-middle`} onClick={handleOverlayClick}>
            <div className="modal-box p-0 bg-[#EFEFEF]" ref={modalRef}>
                <div className="modal-action inline m-0 p-0">
                    <form method="dialog">
                        <main className='bg-[#EFEFEF]'>
                            {/* Header */}
                            <div className='relative'>
                                <div onClick={handleClose} className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#9C9C9C] h-[6px] w-[146px] rounded my-3 mt-18 z-[2000]"></div>
                                <div className="relative h-[140px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-start  rounded-br-xl p-5">


                                    {/* Content Overlay */}
                                    <div className="relative z-10 flex w-full mx-4 sm:mx-6 md:mx-56 lg:mx-64 gap-4 mt-4">
                                        <div className='flex justify-between w-full items-center'>
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

                                {cart.map((item, index) => (
                                    <div key={index}>
                                        {/* {item.product_name} - {item.quantity} x {item.product_price} TK */}
                                        <div className='p-3 border-2 rounded-lg mt-3'>
                                            <div className='flex justify-start gap-4 items-start'>
                                                <div className='flex justify-center items-center border-2 p-1 gap-1 h-10 mt-7'>
                                                    <div>
                                                        <p className='text-black'>{item.quantity}</p>
                                                    </div>
                                                    <div>
                                                        <ChevronDownIcon className="h-4 w-4 text-black" />
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <div className='flex gap-2'>
                                                        <div className='w-[86px] h-[78px] rounded-lg'>
                                                            <img src={item.product_picture} className='rounded-lg w-[86px] h-[78px] ' />
                                                        </div>
                                                        <div>
                                                            <p className='text-[16px] w-[103px] text-gray-500'>{item.product_name}</p>
                                                            <p className='text-[20px] text-black'>{item.product_price} TK</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}



                                <div className='mt-5'>
                                    <div>
                                        <p className='text-[20px] text-black font-semibold mb-2' >Special Instructions:</p>
                                    </div>
                                    <div

                                        className=" rounded-lg w-full border-2 resize-none min-h-[90px] bg-white" placeholder="">
                                    {cart.map((item, index) => (
                                    <div key={index}>
                                        {/* {item.product_name} - {item.quantity} x {item.product_price} TK */}
                                        <p>{item.specialInstructions}</p>
                                    </div>
                                ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottob tab */}
                            <div className="sticky btm-nav flex justify-between bg-white h-28 z-[9000] px-4">
                                <div onClick={openPaymentModal} className=" pb-5 pt-3">
                                    <div className='flex justify-between items-center pt-2 w-full'>
                                        <div>
                                            <p className='text-[18px] font-semibold text-black'>Total<span className='text-[12px] text-[#808080] ml-1'>(Incl. VAT)</span></p>
                                        </div>
                                        <div>
                                            <p className='text-[20px] text-[#FDB92A] font-semibold'>{totalCartPrice} TK</p>
                                        </div>
                                    </div>
                                    <div className=" bg-[#3F170A] w-full rounded-lg my-0 flex justify-center items-center px-3 py-3 mx-auto z-[8000]">
                                        <div className='text-white'>Proceed to Pay</div>
                                    </div>
                                </div>
                            </div>

                            <OnlinePayment totalCartPrice={totalCartPrice} isPaymentModalOpen={isPaymentModalOpen} setIsPaymentModalOpen={setIsPaymentModalOpen} closePaymentModal={closePaymentModal} cart={cart} handleAddToCart={handleAddToCart} slug={slug} />
                        </main>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Cart;
