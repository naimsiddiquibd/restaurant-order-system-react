import React, { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};
const renderTime = (dimension, time) => {
    return (
        <div className="text-center">
            <div className="text-2xl">{time}</div>
            <div className='font-semibold'>{dimension}</div>
        </div>
    );
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;

const PaymentReview = ({ isReviewModalOpen2, closeReviewModal2, cart, totalCartPrice, slug, orderID }) => {
    const [orderData, setOrderData] = useState(null);
    const orderTime = orderData?.time;
    const seconds = orderTime ? orderTime * 60 : 0;
    console.log("seconds: ", seconds);
    console.log("minutes: ", orderTime);

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = orderData?.time ? orderData.time * 60 : 0;

    console.log("remaining time: " + remainingTime);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}/order/view/${orderID}`);
                const data = await response.json();
                setOrderData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [slug, orderID]);

    const fetchOrderStatus = async () => {
        try {
          const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}/order/view/${orderID}`);
          const data = await response.json();
          setOrderData(data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          fetchOrderStatus();
        }, 5000); // Adjust the interval as needed (e.g., every 5 seconds)
      
        return () => clearInterval(intervalId); // Cleanup on component unmount
      }, [slug, orderID]);
      


    const modalRef = useRef(null);

    const handleClose = () => {
        closeReviewModal2();
    };

    const handleOverlayClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        const modalElement = document.getElementById('my_modal_9');

        if (modalElement) {
            isReviewModalOpen2 ? modalElement.showModal() : modalElement.close();
        }
    }, [isReviewModalOpen2]);

    const handleReloadClick = () => {
        window.location.reload();
    };



    return (
        <dialog id="my_modal_9" className={`modal modal-bottom sm:modal-middle`} onClick={handleOverlayClick}>
            <div className="modal-box p-0 bg-[#EFEFEF]" ref={modalRef}>
                <div className="modal-action inline m-0 p-0">
                    <form method="dialog">
                        <main className='bg-[#EFEFEF]'>
                            <div className='relative'>
                                <div onClick={handleClose} className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#9C9C9C] h-[6px] w-[146px] rounded my-3 mt-18 z-[2000]"></div>
                                <div className="relative h-[140px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-start  rounded-br-xl p-5">
                                    <div className="relative z-10 flex w-full mx-4 sm:mx-6 md:mx-56 lg:mx-64 gap-4 mt-4">
                                        <div className='flex justify-between w-full items-center'>
                                            <div>
                                                <p className="font-bold text-[#000000] text-[27px] sm:text-[50px] md:text-[70px] lg:text-[80px] leading-none">
                                                    <span className="font-bold">Your Order</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p className='bg-white text-white h-14 w-14 sm:h-11 sm:w-11 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full'>
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
                            <div className='bg-white p-4 m-4 shadow-md rounded-lg -mt-10 relative z-[1000]'>
                                <div className='flex flex-col items-center my-5'>
                                    <img src="/cooking.png" className='h-[117px] w-[117px]' />
                                    


                                    {orderID > 0 && (
                                        
                                           
                                            <>
                                            {orderData?.order_status === 'confirm' && (
                                                <p className='text-[18px] text-black font-semibold'>Order Pending</p>
                                            )}
                                            {orderData?.order_status === 'pending' && (
                                                <p className='text-[18px] text-black font-semibold'>Order Pending</p>
                                            )}
                                            {orderData?.order_status === 'processing' && (
                                                <p className='text-[18px] text-black font-semibold'>Order Processing</p>
                                            )}
                                            {orderData?.order_status === 'delivered' && (
                                                <p className='text-[18px] text-black font-semibold'>Order Delivered</p>
                                            )}
                                            </>
                                            
                                    )}


                                    {orderData?.order_status === 'processing' ? (
                                        <>
                                            <div className='flex gap-2 mt-3 text-center max-w-sm'>
                                                <CountdownCircleTimer
                                                    {...timerProps}
                                                    colors="#D14081"
                                                    duration={daySeconds}
                                                    initialRemainingTime={remainingTime % daySeconds}
                                                    onComplete={(totalElapsedTime) => ({
                                                        shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                                                    })}
                                                >
                                                    {({ elapsedTime, color }) => (
                                                        <span style={{ color }}>
                                                            {renderTime("Hours", getTimeHours(daySeconds - elapsedTime))}
                                                        </span>
                                                    )}
                                                </CountdownCircleTimer>
                                                <CountdownCircleTimer
                                                    {...timerProps}
                                                    colors="#EF798A"
                                                    duration={hourSeconds}
                                                    initialRemainingTime={remainingTime % hourSeconds}
                                                    onComplete={(totalElapsedTime) => ({
                                                        shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                                                    })}
                                                >
                                                    {({ elapsedTime, color }) => (
                                                        <span style={{ color }}>
                                                            {renderTime("Minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                                                        </span>
                                                    )}
                                                </CountdownCircleTimer>
                                                <CountdownCircleTimer
                                                    {...timerProps}
                                                    colors="#218380"
                                                    duration={minuteSeconds}
                                                    initialRemainingTime={remainingTime % minuteSeconds}
                                                    onComplete={(totalElapsedTime) => ({
                                                        shouldRepeat: remainingTime - totalElapsedTime > 0
                                                    })}
                                                >
                                                    {({ elapsedTime, color }) => (
                                                        <span style={{ color }}>
                                                            {renderTime("Seconds", getTimeSeconds(elapsedTime))}
                                                        </span>
                                                    )}
                                                </CountdownCircleTimer>
                                            </div>
                                        </>
                                    ) : (
                                        <p></p> // 
                                    )}

                                </div>

                                {cart.map((item, index) => (
                                    <div key={index} className='p-3 border-2 rounded-lg mt-3'>
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
                                ))}
                                <div className='mt-5'>
                                    <div>
                                        <p className='text-[18px] text-black font-semibold mb-2' >Special Instructions:</p>
                                    </div>
                                    <div className="rounded-lg w-full border-2 resize-none min-h-[90px] bg-white" placeholder=""></div>
                                </div>
                            </div>
                            <div className="sticky btm-nav flex justify-between bg-white h-20 z-[9000] px-4">
                                <div className=" pb-0 pt-3">
                                    <div className="bg-[#3F170A] w-full rounded-lg my-0 flex justify-center items-center px-3 py-4 mx-auto z-[8000]">
                                        <Link onClick={handleClose} className='text-white' >Go Back to the Home</Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default PaymentReview;
