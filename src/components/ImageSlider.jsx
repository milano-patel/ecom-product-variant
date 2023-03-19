import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [sliderIndex, setsliderIndex] = useState(0);

  const { data } = useSelector((state) => state.product);
  const { selectedVariant } = useSelector((state) => state);

  let images = data.product.images;

  useEffect(() => {
    if (selectedVariant.color === 'Tan') {
      setsliderIndex(2);
    } else {
      setsliderIndex(0);
    }
    setsliderIndex(2);
    console.log('color', selectedVariant.color);
  }, [selectedVariant]);

  return (
    <div className="slider-container">
      <Swiper
        initialSlide={sliderIndex}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.src}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.src}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
