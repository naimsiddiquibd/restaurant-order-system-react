import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import PaymentReview from '../PaymentReview/PaymentReview';

const AddInfo = ({ isInfoModalOpen, closeInfoModal, totalCartPrice, cart, specialInstructions, handleAddToCart }) => {
    const modalRef = useRef(null);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleClose = () => {
        closeInfoModal();
    };

    const handleOverlayClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    const openReviewModal = () => {
        setIsReviewModalOpen(true);
    };

    const closeReviewModal = () => {
        setIsReviewModalOpen(false);
    };

    const handleSubmit = async () => {
        const apiUrl = 'https://restaurantapi.fatmonk.studio/api/order/place';

        const dataToSend = {
            name,
            phone,
            email,
            table_no: 5, // Example: Add the table number
            user_id: 1, // Example: Add the user ID
            payment_method: 'online', // Example: Add the payment method
            totalQty: cart.reduce((total, product) => total + product.quantity, 0),
            total_amount: totalCartPrice,
            vat: 15.00, // Example: Add the VAT amount
            order_note: specialInstructions,
            discount: 10.00, // Example: Add the discount amount
            products: cart.map(product => ({
                product_id: product.id,
                quantity: product.quantity,
            })),
        };

        console.log("Data pase naki: " + dataToSend);
        console.log("Data pase naki:" + JSON.stringify(dataToSend));
        try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(dataToSend),
            });
          
            if (!response.ok) {
              console.error('Failed to submit data to the API');
            } else {
              const responseData = await response.json();
              console.log('Data submitted successfully');
              console.log('API Response:', responseData);
          
              // Check if the payment_url is present in the nested 'data' property
              if (responseData.data && responseData.data.payment_url) {
                console.log('Redirecting to payment URL:', responseData.data.payment_url);
                window.location.href = responseData.data.payment_url; // Redirect to the payment URL
              } else {
                console.error('Payment URL not found in the API response');
              }
          
              // Additional logic if needed
            }
          } catch (error) {
            console.error('Error during fetch:', error);
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
                            <img className='w-14 h-14' src="/audit.png" alt="Audit Logo" />
                            <p className='text-[18px] font-bold text-black'>Please Enter Your Details</p>
                        </div>

                        <div className='mt-3 mx-3'>
                            <input type="text" placeholder="Name" className="input input-bordered  w-full h-[51px] bg-white" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='mt-2 mx-3'>
                            <input type="text" placeholder="Phone" className="input input-bordered  w-full h-[51px] bg-white" onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className='mt-2 mx-3'>
                            <input type="text" placeholder="Email" className="input input-bordered  w-full h-[51px] bg-white" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='bg-[#3F170A] rounded-lg max-w-md p-4 m-3 flex justify-center items-center h-[51px]' onClick={handleSubmit}>
                            <div>
                                <p className='text-[#ffff] text-[16px] font-semibold'>Submit</p>
                            </div>
                        </div>

                        <div className='bg-[#E3E3E3] rounded-lg max-w-md p-4 m-3 flex justify-center items-center h-[51px]' onClick={handleClose}>
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
