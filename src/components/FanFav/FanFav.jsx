import React, { useState, useEffect, useRef } from 'react';
import Modal from '../Modal/Modal';
import FavModal from '../FavModal/FavModal';

const FanFav = ({ handleAddToCart, cart, isFavModalOpen, SetisFavModalOpen, slug, closeFavModal }) => {

    const [menuData, setMenuData] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    console.log("this is another slug:" + slug);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}/fanfav`);
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
        SetisFavModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMenuItem(null);
        SetisFavModalOpen(false);
    };

    return (

        <div className='grid grid-cols-2 gap-4 px-4 sm:px-8 md:mx-52 lg:mx-60 z-40 -mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 bg-[#F5F5F5]'>
            {menuData.map((menuItem, index) => (
                <div onClick={() => openModal(menuItem)} className="max-w-md mx-auto bg-white border-gradient border-orange-300 border-2 p-2 rounded-lg relative">
                    <div dir='rtl'>
                        <div className="absolute h-14 w-14 -top-4 -start-4 z-20"> {/* Updated this line */}
                            <p className='bg-gradient-to-b from-[#F14C3B] to-[#FDB92A] text-white px-2 py-2 h-10 w-10 sm:h-11 sm:w-11 md:h-16 md:w-16 lg:h-16 lg:w-16 rounded-full text-xs items-center flex justify-center'>
                                <img
                                    src="/fireicon.png" // Replace with your image source
                                    alt="Profile"
                                    className="rounded-lg text-white"
                                />
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <p className="max-w-[50px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#3f170a] text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">{menuItem.product_name}</p>
                            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#fdb92a] text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-1">Fan Favourite</p>
                        </div>
                    </div>
                    <div className="flex justify-center z-10 my-2">
                        <img
                            src="/featured1.png" // Replace with your image source
                            alt="Profile"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end z-30 -mt-12"> {/* Updated this line */}
                        <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>{menuItem.product_price} TK</p>
                    </div>
                </div>
            ))}
            
            <FavModal isFavModalOpen={isFavModalOpen} closeF={closeModal} handleAddToCart={handleAddToCart} menuData={selectedMenuItem} cart={cart} closeFavModal={closeFavModal} slug={slug}></FavModal>
        </div>
    );
};

export default FanFav;


