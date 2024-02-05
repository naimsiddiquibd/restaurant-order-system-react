import React, { useEffect, useRef, useState } from 'react';
import AddInfo from '../AddInfo/AddInfo';

const OnlinePayment = ({ isPaymentModalOpen, closePaymentModal, totalCartPrice, cart }) => {
    const modalRef = useRef(null);

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const closeInfoModal = () => {
        setIsInfoModalOpen(false);
    };
    const openInfoModal = () => {
        setIsInfoModalOpen(true);
    };



    const handleClose = () => {
        closePaymentModal();
    };

    const handleOverlayClick = (event) => {
        // Close the modal if the click is outside the modal content
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        const modalElement = document.getElementById('my_modal_2');

        if (modalElement) {
            if (isPaymentModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isPaymentModalOpen]);

    const handleOnlinePayment = async () => {
        try {
          // Make a request to the payment API
          const response = await fetch('http://192.168.68.107:8000/api/payment', {
            method: 'POST', // or 'GET' based on your API requirements
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: totalCartPrice,
              // Add other parameters if needed
            }),
          });
      
          // Handle the response as needed
          const data = await response.json();
          console.log('Payment response:', data);
      
          // Check if the response contains a URL
          if (data && data.URL) {
            // Redirect the user to the received URL
            window.location.href = data.URL;
          } else {
            // Handle the case where the URL is not present in the response
            console.error('No URL found in the payment response');
            // You might want to show an error message to the user
          }
      
          // Add any additional logic based on the response
          // For example, show a success message or navigate to a new page
        } catch (error) {
          console.error('Error making payment:', error);
          // Handle errors, show an error message, etc.
        }
      };
      
      

    return (
        <dialog id="my_modal_2" className="modal" onClick={handleOverlayClick}>
            <div className="modal-box p-0 bg-[#EFEFEF] rounded-xl" ref={modalRef}>


                <main className=''>
                    <div className='bg-[#EFEFEF] p-1 m-3'>

                        <div className='flex items-center mx-4 gap-3 mt-5'>
                            <img src="/creditcard.png" />
                            <p className='text-[18px] font-bold text-black'>Payment Method</p>
                        </div>

                        <div onClick={openInfoModal}  className='bg-white border-2 border-[#FDB92A] rounded-lg max-w-md p-4 m-3 flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <img src="/money.png" />
                                <p className='text-[16px] text-[#5A5A5A]'>Cash</p>
                            </div>
                            <div>
                                <p className='text-[#5A5A5A] text-[16px] font-semibold'>{totalCartPrice} Tk</p>
                            </div>
                        </div>

                        <div onClick={handleOnlinePayment} className='bg-[#FF007A] rounded-lg max-w-md p-4 m-3 flex items-center'>
                            <div className='flex-shrink-0'>
                                <img src="/bkash.png" className='h-10 w-10' alt="Nagad Logo" />
                            </div>
                            <div className='flex-grow text-center mx-2'>
                                <p className='text-white text-[16px] font-semibold'>Pay Online</p>
                            </div>
                            <div className='flex-shrink-0 w-10'></div>
                        </div>

                        <div className='bg-[#E3E3E3] rounded-lg max-w-md p-4 m-3 flex justify-center items-center h-[65px]'>
                            <div className='bg-[#E3E3E3] rounded-lg max-w-md p-4 m-3 flex justify-center items-center h-[65px]' onClick={handleClose}>
                                <p className='text-[A8A8A8] text-[16px] font-semibold'>Cancel</p>
                            </div>

                        </div>
                    </div>
                    <AddInfo isInfoModalOpen={isInfoModalOpen} setIsInfoModalOpen={setIsInfoModalOpen} openInfoModal={openInfoModal} closeInfoModal={closeInfoModal} totalCartPrice={totalCartPrice} cart={cart} />
                </main>


            </div>
        </dialog>
    );
};

export default OnlinePayment;
