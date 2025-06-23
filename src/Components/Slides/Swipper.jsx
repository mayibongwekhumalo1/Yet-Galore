
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Swipper = () => {

    


  return (
    <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src="/images/him-jacket1.jpg" alt="Slide 1" />
        <h3>Classic Denim Jacket</h3>
        <p>$89.99</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/her-dress1.jpg" alt="Slide 2" />
        <h3>Floral Summer Dress</h3>
        <p>$59.99</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/him-tshirt1.jpg" alt="Slide 3" />
        <h3>Premium Cotton Tee</h3>
        <p>$29.99</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/her-jacket1.jpg" alt="Slide 4" />
        <h3>Trendy Leather Jacket</h3>
        <p>$99.99</p>
      </SwiperSlide>
       <SwiperSlide>
        <img src="/images/her-jacket1.jpg" alt="Slide 4" />
        <h3>Trendy Leather Jacket</h3>
        <p>$99.99</p>
      </SwiperSlide>
        <SwiperSlide>
            <img src="/images/him-jacket1.jpg" alt="Slide 5" />
            <h3>Classic Denim Jacket</h3>
            <p>$89.99</p>
        </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Swipper;