// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// function ImageSlider() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   const [images, setImages] = useState([]);
//   const API_URL =
//     'https://cdn.shopify.com/s/files/1/0053/6667/7575/files/Widefit-mens-wide-fit-db-stratford-loafers.json?v=1678789572';

//   let productImages;

//   async function fetchImages() {
//     let response = await fetch(API_URL);
//     let { product } = await response.json();
//     productImages = product.images;
//     setImages(productImages);
//     console.log(productImages);
//   }

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div className="slider-container">
//       <Swiper
//         spaceBetween={10}
//         navigation={false}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         {images.map((image) => (
//           <SwiperSlide key={image.id}>
//             <img src={image.src}></img>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={5}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {images.map((image) => (
//           <SwiperSlide key={image.id}>
//             <img src={image.src}></img>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default ImageSlider;

// //https://cdn.shopify.com/s/files/1/0053/6667/7575/files/Widefit-mens-wide-fit-db-stratford-loafers.json?v=1678789572

// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProduct } from '../store';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// function ImageSlider() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProduct());
//   }, []);

//   const { data, isLoading, error } = useSelector((state) => state.product);

//   let images;

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error fetching data...</div>;
//   }
//   if (Object.keys(data).length) {
//     images = data.product.images;
//   }

//   return (
//     <div className="slider-container">
//       {Object.keys(data).length ? (
//         <Swiper
//           spaceBetween={10}
//           navigation={false}
//           thumbs={{ swiper: thumbsSwiper }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="mySwiper2"
//         >
//           {images.map((image) => (
//             <SwiperSlide key={image.id}>
//               <img src={image.src}></img>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p>Loading Data</p>
//       )}
//       {Object.keys(data).length ? (
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           spaceBetween={10}
//           slidesPerView={5}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="mySwiper"
//         >
//           {images.map((image) => (
//             <SwiperSlide key={image.id}>
//               <img src={image.src}></img>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p>Loading Data</p>
//       )}
//     </div>
//   );
// }

// export default ImageSlider;
