import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './_scss/carousel.scss';
// https://swiperjs.com/react

const Carousel = ({ directory, num }) => {

	let imagesHTML = [];

	for (let i = 1; i <= num; i++) {
		let s = i;
		if (num < 100) {
			if (i < 10) {
				s = '0' + i;
			}
		} else {
			if (i < 100) {
				s = '0' + i;
			} else if (i < 10) {
				s = '00' + i;
			}
		}
		imagesHTML.push(
			<SwiperSlide key={i}>
				<img src={'/images/travels/' + directory + '/' + s + '.jpeg'} alt={'image-' + s} className="shade" />
			</SwiperSlide>);
	}
	
	return (<Swiper
		autoplay={{
			delay: 2500,
			disableOnInteraction: true,
		}}
		slidesPerView={1}
		spaceBetween={80}
		pagination={{
			clickable: true,
		}}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
		className="mySwiper">

		{imagesHTML}
	</Swiper>);
}

export default Carousel;
