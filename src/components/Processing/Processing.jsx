'use client';
import Image from 'next/image';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Processing() {

    const openModalFromComponent2 = () => {
        // Access the modalRef from Component1 to trigger the openModal function
        modalRef.current.openModal();
    };

    return (
        <main className="pb-10">

            {/* Header */}
            <div className="relative h-56 sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center rounded-b-xl p-5 z-0">
                {/* Background Image */}
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
                    src="/headerbg.png"
                    alt="Background"
                />

                {/* Overlay with Linear Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3D231A] via-[#3D231A] to-transparent border-b-10 border-[#3D231A] "></div>

                {/* Content Overlay */}
                <div className="relative z-10 flex justify-between items-center mx-4 sm:mx-6 md:mx-56 lg:mx-64 gap-4 rounded-b-xl">
                    <div>
                        <img className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-56 lg:w-56" src="/logo.png" alt="Logo"></img>
                    </div>
                    <div>
                        <p className="font-bold text-white text-[27px] sm:text-[50px] md:text-[70px] lg:text-[80px] leading-none">
                            <span className="font-bold">North</span>
                            <span className="font-light">End</span>
                        </p>
                        <p className="font-semibold text-tertiary text-[13px] sm:text-[22px] md:text-[30px] lg:text-[38px] leading-none mt-1 whitespace-nowrap text-[#BBBBB1]">
                            Roastery and Café
                        </p>
                        <button className="px-6 py-2 rounded-full bg-[#EBBCAD] text-[11px] sm:text-[12px] md:text-[16px] lg:text-[18px] mt-2 flex justify-center items-center gap-2 font-semibold">VISIT SHOP<ArrowLongRightIcon className="h-6 w-6 text-#EBBCAD]" /></button>
                    </div>
                </div>
            </div>

            {/* Featured */}
            <div className='grid grid-cols-2 gap-4 px-4 sm:px-8 md:mx-52 lg:mx-60 z-40 -mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20'>

                {/* Card 1 */}
                <div className="max-w-md mx-auto bg-white border-gradient border-orange-300 border-2 p-2 rounded-lg relative">
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
                            <p className="max-w-[50px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#3f170a] text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Mini Cappuccino</p>
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
                        <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>235 TK</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-md mx-auto bg-white border-gradient border-orange-300 border-2 p-2 rounded-lg relative">
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
                            <p className="max-w-[50px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#3f170a] text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Mini Cappuccino</p>
                            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#fdb92a] text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-1">Fan Favourite</p>
                        </div>
                    </div>
                    <div className="flex justify-center z-10 my-2">
                        <img
                            src="/featured2.png" // Replace with your image source
                            alt="Profile"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end z-30 -mt-12"> {/* Updated this line */}
                        <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>340 TK</p>
                    </div>
                </div>
            </div>

            {/* Extra Featured */}
            <div className='grid grid-cols-2 gap-4 px-4 sm:px-8 md:mx-52 lg:mx-60 my-4'>
                {/* Card 1 */}
                <div className="relative h-[100px] sm:h-[120px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
                    <div className="h-full bg-cover bg-center" style={{ backgroundImage: 'url(/coffee1.png)' }}>
                        {/* Dark Gradient Transparent Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-50 z-10"></div>

                        <div className="flex items-center">
                            <div className='p-2 z-50'>
                                <p className="max-w-[85px] md:max-w-[200px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Cappuccino</p>
                                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-[2px]">Best Seller</p>
                            </div>
                        </div>

                        <div className="bottom-right absolute right-0 bottom-0 mb-2 mr-2 z-50">
                            <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>320 TK</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative h-[100px] sm:h-[120px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
                    <div className="h-full bg-cover bg-center" style={{ backgroundImage: 'url(/coffee2.jpeg)' }}>
                        {/* Dark Gradient Transparent Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-50 z-10"></div>

                        <div className="flex items-center z-40">
                            <div className='p-2 z-50'>
                                <p className="max-w-[85px] md:max-w-[200px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Vanilla Late</p>
                                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-[2px]">Best Seller</p>
                            </div>
                        </div>

                        <div className="bottom-right absolute right-0 bottom-0 mb-2 mr-2 z-50">
                            <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>320 TK</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative h-[100px] sm:h-[120px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
                    <div className="h-full bg-cover bg-center" style={{ backgroundImage: 'url(/coffee3.jpeg)' }}>
                        {/* Dark Gradient Transparent Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-50 z-10"></div>

                        <div className="flex items-center z-40">
                            <div className='p-2 z-50'>
                                <p className="max-w-[85px] md:max-w-[200px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Cappuccino</p>
                                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-[2px]">Best Seller</p>
                            </div>
                        </div>

                        <div className="bottom-right absolute right-0 bottom-0 mb-2 mr-2 z-50">
                            <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>320 TK</p>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative h-[100px] sm:h-[120px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
                    <div className="h-full bg-cover bg-center" style={{ backgroundImage: 'url(/coffee4.png)' }}>
                        {/* Dark Gradient Transparent Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-50 z-10"></div>

                        <div className="flex items-center z-20">
                            <div className='p-2 z-50'>
                                <p className="max-w-[85px] md:max-w-[200px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-white text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Cappuccino</p>
                                <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-[2px]">Best Seller</p>
                            </div>
                        </div>

                        <div className="bottom-right absolute right-0 bottom-0 mb-2 mr-2 z-50">
                            <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>320 TK</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className='max-w-[425px] sm:max-w-lg md:max-w-4xl lg:max-w-[960px] px-4 sm:px-8 md:mx-52 lg:mx-60 mb-10'>
                <h2 className='text-[22px] sm:text-[28ox] md:text-[32px] lg:text-[34px] font-bold mb-2 ml-4'>Menu</h2>
                <div className="carousel carousel-center  space-x-1 rounded-lg gap-3">
                    <div className="carousel-item">
                        <div className="image-container relative">
                            <img
                                src="/menu1.png"
                                className="rounded-lg w-[158px] sm:w-[174px] md:w-[311px] lg:w-[336px] h-[127px] sm:h-[140px] md:h-[250px] lg:h-[270px] object-cover"
                            />
                            <div className="text-overlay absolute top-0 left-0 text-white p-2 font-bold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px]">Coffee</div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-container relative">
                            <img
                                src="/menu2.jpeg"
                                className="rounded-lg w-[158px] sm:w-[174px] md:w-[311px] lg:w-[336px] h-[127px] sm:h-[140px] md:h-[250px] lg:h-[270px] object-cover"
                            />
                            <div className="text-overlay absolute top-0 left-0 text-white p-2 font-bold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px]">Pastry</div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-container relative">
                            <img
                                src="/menu3.jpeg"
                                className="rounded-lg w-[158px] sm:w-[174px] md:w-[311px] lg:w-[336px] h-[127px] sm:h-[140px] md:h-[250px] lg:h-[270px] object-cover"
                            />
                            <div className="text-overlay absolute top-0 left-0 text-white p-2 font-bold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px]">Quick Bites</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-[#282828] h-[6px] w-[146px] rounded my-3"></div> */}

            <div className="fixed mt-28 bottom-0 left-1/2 transform -translate-x-1/2 bg-[#3F170A] h-[60px] w-[395px] rounded-lg my-0 flex justify-center items-center px-3">
                <div className='text-white'>
                    <div className="">
                        <div className="grid w-14 h-14 place-items-center">
                            <img src='/timer.png'></img>
                        </div>
                    </div>
                </div>
                <div className='text-white'>30 Mins Remaining</div>
                <div className='text-white'></div>
            </div>



            {/* Bottob tab */}
            {/* <div className="btm-nav flex justify-between bg-red-300 h-20">
      

                <div className='bg-[#3F170A] text-white py-3 rounded-lg w-[7px] text-center'>
                    <p className=''>Add to cart</p>
                </div>

            </div> */}
        </main>
    )
}
