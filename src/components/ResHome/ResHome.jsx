import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import PopularItems from '../PopularItems/PopularItems';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import FanFav from '../FanFav/FanFav';
import Swal from 'sweetalert2';

export default function ResHome() {
  const [resInfo, setResInfo] = useState([]);
  const [orderData, setOrderData] = useState(null);
  const [prevOrderStatus, setPrevOrderStatus] = useState(null);

  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    // Check if order status has changed and set the flag to reload
    if (prevOrderStatus !== null && prevOrderStatus !== orderData?.order_status) {
      setShouldReload(true);
    }
  }, [prevOrderStatus, orderData?.order_status]);

  useEffect(() => {
    if (shouldReload) {
      // Reload the component
      window.location.reload();
      // Reset the flag
      setShouldReload(false);
    }
  }, [shouldReload]);

  console.log("dho:" + orderData?.order_status);
  const { slug } = useParams();
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

  const openModal = () => {
    // Use the showModal() method on the dialog element
    modalRef.current.showModal();
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleClose = () => {
    closeModal();
  };


  const closeModal = () => {
    setIsModalOpen(false);
    SetisFavModalOpen(false);
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

  const [isFavModalOpen, SetisFavModalOpen] = useState(false);
  const closeFavModal = () => {
    SetisFavModalOpen(false);
  };
  const openFavModal = () => {
    SetisFavModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}/order/view/${orderID}`);
        const data = await response.json();

        if (data.data.order_status !== prevOrderStatus) {
          // Show a toast notification for the order status change
          console.log(`Order status changed to: ${data.data.order_status}`);
          Swal.fire({
            title: "Order Delivered!",
            text: "Now You Can Start Your Eating Mission",
            icon: "success"
          });
        }

        setPrevOrderStatus(data.data.order_status);
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
      console.log(`Order status changed to: ${data.data.order_status}`);
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


  return (
    <main className="bg-[#F5F5F5] pb-5">

      {/* Header */}
      <div className="relative h-56 sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center rounded-b-xl p-5 z-0 bg-[#F5F5F5]">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
          src={resInfo.bg_photo}
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

      {/* Featured */}


      <FanFav handleAddToCart={handleAddToCart} cart={cart} handleClose={handleClose} SetisFavModalOpen={SetisFavModalOpen} isFavModalOpen={isFavModalOpen} slug={slug} closeFavModal={closeFavModal} openFavModal={openFavModal}></FanFav>

      {/* Popular items */}
      <PopularItems handleAddToCart={handleAddToCart} cart={cart} handleClose={handleClose} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} slug={slug}></PopularItems>

      {/* Menu */}
      <Menu slug={slug}></Menu>

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
          <div onClick={openReviewModal} className="bg-[#3F170A] h-[60px] w-full rounded-lg my-0 flex justify-between items-center px-3 mx-auto z-[8000]">
            <div className='text-white'>
              <div className=""></div>
            </div>
            {orderData?.order_status === 'confirm' && (
              <div className='text-white flex items-center gap-2'><img src='/timer.png'></img>Order Pending</div>
            )}
            {orderData?.order_status === 'pending' && (
              <div className='text-white flex items-center gap-2'><img src='/timer.png'></img>Order Pending</div>
            )}
            {orderData?.order_status === 'processing' && (
              <div className='text-white flex items-center gap-2'><img src='/timer.png'></img>Order Processing</div>
            )}
            {orderData?.order_status === 'delivered' && (
              <div className='text-white flex items-center gap-2'><img className='w-8 h-8' src='/orderdone.png'></img>Order Delivered</div>
            )}
            {/* Add more conditions for other order statuses if needed */}
            <div></div>
          </div>
        )}
      </div>

      <ReviewOrder isReviewModalOpen2={isReviewModalOpen2} setIsReviewModalOpen2={setIsReviewModalOpen2} openReviewModal={openReviewModal} closeReviewModal2={closeReviewModal2} totalCartPrice={totalCartPrice} cart={cart} slug={slug} orderID={orderID} />


      <Cart cart={cart} closeCartModal={closeCartModal} setIsCartModalOpen={setIsCartModalOpen} isCartModalOpen={isCartModalOpen} totalCartPrice={totalCartPrice} handleAddToCart={handleAddToCart} slug={slug} />


    </main>
  )
}
