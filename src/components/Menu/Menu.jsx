import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ slug }) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`https://restaurantapi.fatmonk.studio/public/api/${slug}/category`);
        const data = await response.json();
        setMenuData(data.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenuData();
  }, [slug]); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className='bg-[#F5F5F5] py-5'>
      <div className='max-w-[425px] sm:max-w-lg md:max-w-4xl lg:max-w-[960px] px-4 sm:px-8 md:mx-52 lg:mx-60'>
        <h2 className='text-[22px] sm:text-[28ox] md:text-[32px] lg:text-[34px] font-bold mb-2 ml-4 text-black'>Menu</h2>
        <div className="carousel carousel-center  space-x-1 rounded-lg gap-3">
          {menuData.map((menuItem, index) => (
            <div key={index} className="carousel-item">
              <Link to={`/${slug}/${menuItem.slug}`}>
                <div className="image-container relative">
                  <img
                    src={menuItem.menu_picture} // Assuming your API returns an 'image' property for each menu item
                    alt={`Menu Item ${index + 1}`}
                    className="rounded-lg w-[158px] sm:w-[174px] md:w-[311px] lg:w-[336px] h-[127px] sm:h-[140px] md:h-[250px] lg:h-[270px] object-cover"
                  />
                  {/* Dark Gradient Transparent Overlay */}
                  <img src="/menuoverlay.png" className="absolute inset-0 rounded-lg w-[158px] sm:w-[174px] md:w-[311px] lg:w-[336px] h-[127px] sm:h-[140px] md:h-[250px] lg:h-[270px] object-cover" />

                  <div className="text-overlay absolute top-0 left-0 text-white p-2 font-bold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[32px] z-[6000]">
                    {menuItem.menu_name} {/* Assuming your API returns a 'name' property for each menu item */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
