import React, { useState, useEffect, useRef } from 'react';
import Modal from '../Modal/Modal';

const PopularItems = ({handleAddToCart, cart, isModalOpen, setIsModalOpen, slug}) => {

    const [menuData, setMenuData] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    console.log("this is another slug:" + slug);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}/popular`);
                const data = await response.json();
                setMenuData(data.data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };
        fetchMenuData();
    }, [slug]);

    const openModal = (menuItem) => {
        setSelectedMenuItem(menuItem);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setSelectedMenuItem(null);
        setIsModalOpen(false);
      };

    return (
        <div className='grid grid-cols-2 gap-4 px-4 sm:px-8 md:mx-52 lg:mx-60 mt-4 bg-[#F5F5F5]'>
            {menuData.map((menuItem, index) => (
                <div
                    key={index}
                    className={`relative h-[100px] sm:h-[120px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden`}
                    onClick={() => openModal(menuItem)}
                >
                    <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${menuItem.product_picture})` }}>
                        {/* Dark Gradient Transparent Overlay */}
                        <img className="absolute inset-0 h-full bg-cover bg-center z-10" src='/cardoverlay.png' />
                       

                        <div className="flex items-center">
                            <div className='p-2 z-50'>
                                <p className="max-w-[85px] md:max-w-[200px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">{menuItem.product_name}</p>
                                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-[2px]">Popular</p>
                            </div>
                        </div>

                        <div className="bottom-right absolute right-0 bottom-0 mb-2 mr-2 z-50">
                            <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>{menuItem.product_price} TK</p>
                        </div>
                    </div>
                </div>
            ))}
            <Modal isOpen={isModalOpen} closeModal={closeModal} handleAddToCart={handleAddToCart} menuData={selectedMenuItem} cart={cart} />
        </div>
    );
};

export default PopularItems;
