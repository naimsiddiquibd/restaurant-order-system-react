import React from 'react';
import { QrCodeIcon } from '@heroicons/react/24/solid'

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    
    <div className="artboard artboard-demo phone-1 text-center">
    <QrCodeIcon className="h-20 w-20" />
      You Have to Scan a QR Code first to go ahed!</div>
  </div>
</div>
    </div>
  );
};

export default Home;
// import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
// import { useEffect, useState } from 'react';
// import PopularItems from '../PopularItems/PopularItems';
// import Menu from '../Menu/Menu';
// import Cart from '../Cart/Cart';
// import ReviewOrder from '../ReviewOrder/ReviewOrder';
// import { useLocation } from 'react-router-dom';

// export default function Home() {

//   const location = useLocation();
//   // Function to get query parameters from the URL
//   const getQueryParameter = (name) => {
//     const params = new URLSearchParams(location.search);
//     return params.get(name);
//   };

//   const [orderID, setOrderID] = useState('');

//   useEffect(() => {
//     const orderID = getQueryParameter('order_id');
//     if (orderID) {
//       console.log('Order ID:', orderID);
//       setOrderID(orderID);
//       // Do something with the order ID, e.g., save it to state or perform further actions
//     }

//     // Other existing code...
//   }, [location.search]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCartModalOpen, setIsCartModalOpen] = useState(false);

//   const openModal = () => {
//     // Use the showModal() method on the dialog element
//     modalRef.current.showModal();
//   };

//   const openCartModal = () => {
//     setIsCartModalOpen(true);
//   };

//   const handleClose = () => {
//     closeModal();
//   };


//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const closeCartModal = () => {
//     setIsCartModalOpen(false);
//   };

//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (menuData, quantity, specialInstructions) => {
//     const newCartItem = { ...menuData, quantity, specialInstructions };
//     const newCart = [...cart, newCartItem];
//     setCart(newCart);
//     closeModal();
//   };


//   const totalCartPrice = cart.reduce((total, item) => total + item.quantity * Number(item.product_price), 0);


//   const [isReviewModalOpen2, setIsReviewModalOpen2] = useState(false);
//   const closeReviewModal2 = () => {
//       setIsReviewModalOpen2(false);
//   };
//   const openReviewModal = () => {
//       setIsReviewModalOpen2(true);
//   };


//   return (
//     <main className="bg-[#F5F5F5] pb-5">

//       {/* Header */}
//       <div className="relative h-56 sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center rounded-b-xl p-5 z-0 bg-[#F5F5F5]">
//         {/* Background Image */}
//         <img
//           className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
//           src="/headerbg.png"
//           alt="Background"
//         />

//         {/* Overlay with Linear Gradient */}
//         <img className='absolute inset-0 w-full h-full object-cover rounded-b-xl' src='/overlay.png' />

//         {/* Content Overlay */}
//         <div className="relative z-10 flex justify-between items-center mx-4 sm:mx-6 md:mx-56 lg:mx-64 gap-4 rounded-b-xl">
//           <div>
//             <img className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-56 lg:w-56" src="/logo.png" alt="Logo"></img>
//           </div>
//           <div>
//             <p className="font-bold text-white text-[27px] sm:text-[50px] md:text-[70px] lg:text-[80px] leading-none">
//               <span className="font-bold">North</span>
//               <span className="font-light">End</span>
//             </p>
//             <p className="font-semibold text-tertiary text-[13px] sm:text-[22px] md:text-[30px] lg:text-[38px] leading-none mt-1 whitespace-nowrap text-[#BBBBB1]">
//               Roastery and Café
//             </p>
//             <button className="px-5 py-[6px] rounded-full bg-[#EBBCAD] text-[11px] sm:text-[12px] md:text-[16px] lg:text-[18px] mt-2 flex justify-center items-center gap-2 font-semibold text-[#3F170A]">VISIT SHOP<ArrowLongRightIcon className="h-6 w-6 text-#3F170A]" /></button>
//           </div>
//         </div>
//       </div>

//       {/* Featured */}
//       <div className='grid grid-cols-2 gap-4 px-4 sm:px-8 md:mx-52 lg:mx-60 z-40 -mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 bg-[#F5F5F5]'>

//         {/* Card 1 */}
//         <div onClick={openModal} className="max-w-md mx-auto bg-white border-gradient border-orange-300 border-2 p-2 rounded-lg relative">
//           <div dir='rtl'>
//             <div className="absolute h-14 w-14 -top-4 -start-4 z-20"> {/* Updated this line */}
//               <p className='bg-gradient-to-b from-[#F14C3B] to-[#FDB92A] text-white px-2 py-2 h-10 w-10 sm:h-11 sm:w-11 md:h-16 md:w-16 lg:h-16 lg:w-16 rounded-full text-xs items-center flex justify-center'>
//                 <img
//                   src="/fireicon.png" // Replace with your image source
//                   alt="Profile"
//                   className="rounded-lg text-white"
//                 />
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div>
//               <p className="max-w-[50px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#3f170a] text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Mini Cappuccino</p>
//               <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#fdb92a] text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-1">Fan Favourite</p>
//             </div>
//           </div>
//           <div className="flex justify-center z-10 my-2">
//             <img
//               src="/featured1.png" // Replace with your image source
//               alt="Profile"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="flex justify-end z-30 -mt-12"> {/* Updated this line */}
//             <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>235 TK</p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="max-w-md mx-auto bg-white border-gradient border-orange-300 border-2 p-2 rounded-lg relative">
//           <div dir='rtl'>
//             <div className="absolute h-14 w-14 -top-4 -start-4 z-20"> {/* Updated this line */}
//               <p className='bg-gradient-to-b from-[#F14C3B] to-[#FDB92A] text-white px-2 py-2 h-10 w-10 sm:h-11 sm:w-11 md:h-16 md:w-16 lg:h-16 lg:w-16 rounded-full text-xs items-center flex justify-center'>
//                 <img
//                   src="/fireicon.png" // Replace with your image source
//                   alt="Profile"
//                   className="rounded-lg text-white"
//                 />
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div>
//               <p className="max-w-[50px] font-bold[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-[#3f170a] text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] tracking-[0] leading-[normal]">Mini Cappuccino</p>
//               <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#fdb92a] text-[10px] sm:text-[12px] md:text-[18px] lg:text-[22px] tracking-[0] leading-[normal] whitespace-nowrap mt-1">Fan Favourite</p>
//             </div>
//           </div>
//           <div className="flex justify-center z-10 my-2">
//             <img
//               src="/featured2.png" // Replace with your image source
//               alt="Profile"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="flex justify-end z-30 -mt-12"> {/* Updated this line */}
//             <p className='bg-[#F14C3B] text-white px-2 sm:px-2 md:px-3 lg:px-4 py-2 sm:py-3 md:py-3 lg:py-4 w-24 sm:w-24 md:w-28 lg:w-32 rounded-full text-xs sm:text-[16px] md:text-[18px] lg:text-[22px]  items-center flex justify-center shadow-md'>340 TK</p>
//           </div>
//         </div>
//       </div>

//       {/* Popular items */}
//       <PopularItems handleAddToCart={handleAddToCart} cart={cart} handleClose={handleClose} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}></PopularItems>

//       {/* Menu */}
//       <Menu></Menu>

//       {/* Bottom Tab */}
//       <div className='mx-3 sticky bottom-0 z-[9000]'>
//         {cart.length > 0 && (
//           <div onClick={openCartModal} className=" bg-[#3F170A] h-[60px] w-full rounded-lg my-0 flex justify-between items-center px-3 mx-auto z-[8000]">
//             <div className='text-white'>
//               <div className="indicator">
//                 <span className="indicator-item badge bg-red-500 border-0 text-white w-6 h-6">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
//                 <div className=""><img src='/shoppingbag.png' alt='Shopping Bag'></img></div>
//               </div>
//             </div>
//             <div className='text-white'>View Your Cart</div>
//             <div className='text-white'>{totalCartPrice} TK</div>
//           </div>
//         )}
//       </div>

//       <div className='mx-3 sticky bottom-0 z-[9000] mt-2'>
//         {orderID > 0 && (
//           <div onClick={openReviewModal}  className=" bg-[#3F170A] h-[60px] w-full rounded-lg my-0 flex justify-between items-center px-3 mx-auto z-[8000]">
//             <div className='text-white'>
//               <div className=""></div>
//             </div>
//             <div className='text-white flex items-center gap-2'><img src='/timer.png'></img>30 Minutes Remaining</div>
//             <div></div>
//           </div>
//         )}
//       </div>

//       <ReviewOrder isReviewModalOpen2={isReviewModalOpen2} setIsReviewModalOpen2={setIsReviewModalOpen2} openReviewModal={openReviewModal} closeReviewModal2={closeReviewModal2} totalCartPrice={totalCartPrice} cart={cart} />


//       <Cart cart={cart} closeCartModal={closeCartModal} setIsCartModalOpen={setIsCartModalOpen} isCartModalOpen={isCartModalOpen} totalCartPrice={totalCartPrice} handleAddToCart={handleAddToCart} />
      

//     </main>
//   )
// }
