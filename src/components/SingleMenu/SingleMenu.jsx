import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import PopularItems from '../PopularItems/PopularItems';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import { useLocation, useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';

export default function SingleMenu() {

    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}`);
                const data = await response.json();
                setResInfo(data.data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };
        fetchMenuData();
    }, []);

  const { slug, cat_slug } = useParams();

  const [menuData, setMenuData] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  console.log("ajker menu data: " + menuData.length);

  useEffect(() => {
    const fetchMenuData = async () => {
        try {
            const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}/${cat_slug}/products`);
            const data = await response.json();
            setMenuData(data.data);
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    };
    fetchMenuData();
}, [slug]);

  const location = useLocation();
  // Function to get query parameters from the URL
  const getQueryParameter = (name) => {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  };

  const [orderID, setOrderID] = useState('');

  useEffect(() => {
    const orderID = getQueryParameter('order_id');
    if (orderID) {
      console.log('Order ID:', orderID);
      setOrderID(orderID);
      // Do something with the order ID, e.g., save it to state or perform further actions
    }

    // Other existing code...
  }, [location.search]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);



  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleClose = () => {
    closeModal();
  };



  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const [cart, setCart] = useState([]);

  const handleAddToCart = (menuData, quantity, specialInstructions) => {
    const newCartItem = { ...menuData, quantity, specialInstructions };
    const newCart = [...cart, newCartItem];
    setCart(newCart);
    closeModal();
  };


  const totalCartPrice = cart.reduce((total, item) => total + item.quantity * Number(item.product_price), 0);


  const [isReviewModalOpen2, setIsReviewModalOpen2] = useState(false);
  const closeReviewModal2 = () => {
      setIsReviewModalOpen2(false);
  };
  const openReviewModal = () => {
      setIsReviewModalOpen2(true);
  };

  const openModal = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMenuItem(null);
    setIsModalOpen(false);
  };



  return (
    <main className="bg-[#F5F5F5] pb-5 ">

      {/* Header */}
      <div className="relative h-56 sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center rounded-b-xl p-5 z-0 bg-[#F5F5F5]">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
          src="/headerbg.png"
          alt="Background"
        />

        {/* Overlay with Linear Gradient */}
        <img className='absolute inset-0 w-full h-full object-cover rounded-b-xl' src='/overlay.png' />

        {/* Content Overlay */}
        <div className="relative z-10 flex justify-between items-center mx-4 sm:mx-6 md:mx-56 lg:mx-64 gap-4 rounded-b-xl">
          <div>
            <img className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-full bg-white p-2" src={resInfo?.restaurant_photo} alt="Logo"></img>
          </div>
          <div>
            <p className="font-bold text-white text-[27px] sm:text-[50px] md:text-[70px] lg:text-[80px] leading-none">
              <span className="font-bold">{resInfo?.restaurant_name}</span>
            </p>
            <p className="font-semibold text-tertiary text-[13px] sm:text-[22px] md:text-[30px] lg:text-[38px] leading-none mt-1 whitespace-nowrap text-[#BBBBB1]">
              {resInfo?.slogan}
            </p>
            <button className="px-5 py-[6px] rounded-full bg-[#EBBCAD] text-[11px] sm:text-[12px] md:text-[16px] lg:text-[18px] mt-2 flex justify-center items-center gap-2 font-semibold text-[#3F170A]">VISIT SHOP<ArrowLongRightIcon className="h-6 w-6 text-#3F170A]" /></button>
          </div>
        </div>
      </div>
      <h2 className='text-[22px] sm:text-[28ox] md:text-[32px] lg:text-[34px] font-bold mt-3 ml-4 text-black'>{menuData[0]?.category?.menu_name}</h2>
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


      {/* Bottom Tab */}
      <div className='mx-3 sticky bottom-0 z-[9000]'>
        {cart.length > 0 && (
          <div onClick={openCartModal} className=" bg-[#3F170A] h-[60px] w-full rounded-lg my-0 flex justify-between items-center px-3 mx-auto z-[8000]">
            <div className='text-white'>
              <div className="indicator">
                <span className="indicator-item badge bg-red-500 border-0 text-white w-6 h-6">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                <div className=""><img src='/shoppingbag.png' alt='Shopping Bag'></img></div>
              </div>
            </div>
            <div className='text-white'>View Your Cart</div>
            <div className='text-white'>{totalCartPrice} TK</div>
          </div>
        )}
      </div>

      <div className='mx-3 sticky bottom-0 z-[9000] mt-2'>
        {orderID > 0 && (
          <div onClick={openReviewModal}  className=" bg-[#3F170A] h-[60px] w-full rounded-lg my-0 flex justify-between items-center px-3 mx-auto z-[8000]">
            <div className='text-white'>
              <div className=""></div>
            </div>
            <div className='text-white flex items-center gap-2'><img src='/timer.png'></img>30 Minutes Remaining</div>
            <div></div>
          </div>
        )}
      </div>

      <ReviewOrder isReviewModalOpen2={isReviewModalOpen2} setIsReviewModalOpen2={setIsReviewModalOpen2} openReviewModal={openReviewModal} closeReviewModal2={closeReviewModal2} totalCartPrice={totalCartPrice} cart={cart} slug={slug} />


      <Cart cart={cart} closeCartModal={closeCartModal} setIsCartModalOpen={setIsCartModalOpen} isCartModalOpen={isCartModalOpen} totalCartPrice={totalCartPrice} handleAddToCart={handleAddToCart} slug={slug} />
      

    </main>
  )
}
