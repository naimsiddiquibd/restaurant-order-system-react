import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import PaymentReview from '../PaymentReview/PaymentReview';

const AddInfo = ({ isInfoModalOpen, closeInfoModal, totalCartPrice, cart, specialInstructions, handleAddToCart }) => {

    console.log("Data cart:", JSON.stringify(cart));


    const modalRef = useRef(null);

    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const closeReviewModal = () => {
        setIsReviewModalOpen(false);
    };
    const openReviewModal = () => {
        setIsReviewModalOpen(true);
    };



    const handleClose = () => {
        closeInfoModal();
    };

    const handleOverlayClick = (event) => {
        // Close the modal if the click is outside the modal content
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        const modalElement = document.getElementById('my_modal_3');

        if (modalElement) {
            if (isInfoModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isInfoModalOpen]);

    return (
        <dialog id="my_modal_3" className="modal" onClick={handleOverlayClick}>
            <div className="modal-box p-0 bg-[#EFEFEF] rounded-xl" ref={modalRef}>


                <main className=''>
                    <div className='bg-white p-1 m-3 rounded-lg'>

                        <div className='flex flex-col mx-4 gap-3 mt-6 mb-7 justify-center items-center'>
                            <img className='w-14 h-14' src="/audit.png" />
                            <p className='text-[18px] font-bold text-black'>Please Enter Your Details</p>
                        </div>

                        <div className='mt-3 mx-3'>
                            <input type="text" placeholder="Name" className="input input-bordered  w-full h-[51px] bg-white" />
                        </div>

                        <div className='mt-2 mx-3'>
                            <input type="text" placeholder="Phone" className="input input-bordered  w-full h-[51px] bg-white" />
                        </div>

                        <div className='mt-2 mx-3'>
                            <input type="text" placeholder="Email" className="input input-bordered  w-full h-[51px] bg-white" />
                        </div>


                        <div className='bg-[#3F170A] rounded-lg max-w-md p-4 m-3 flex justify-center items-center h-[51px]' onClick={openReviewModal}>
                            <div>
                                <p className='text-[#ffff] text-[16px] font-semibold'>Submit</p>
                            </div>
                        </div>


                        <div  className='bg-[#E3E3E3] rounded-lg max-w-md p-4 m-3 flex justify-center items-center h-[51px]' onClick={handleClose}>
                            <div>
                                <p className='text-[A8A8A8] text-[16px] font-semibold'>cancel</p>
                            </div>
                        </div>
                    </div>
                    <PaymentReview isReviewModalOpen={isReviewModalOpen} setIsReviewModalOpen={setIsReviewModalOpen} openReviewModal={openReviewModal} closeReviewModal={closeReviewModal} totalCartPrice={totalCartPrice} cart={cart} specialInstructions={specialInstructions} />
                </main>


            </div>
        </dialog>
    );
};

export default AddInfo;
