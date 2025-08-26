import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
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
				<img src={'/images/' + directory + '/' + s + '.jpeg'} alt={'image-' + s} className="shade" />
			</SwiperSlide>);
	}
	
	return (<Swiper
		autoplay={{
			delay: 2500,
			disableOnInteraction: true,
		}}
		effect={'fade'}
		fadeEffect={{
			crossFade: true
		}}
		mousewheel={true}
		slidesPerView={1}
		spaceBetween={0}
		pagination={{
			type: 'fraction',
		}}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
		className="mySwiper">

		{imagesHTML}
	</Swiper>);
}

export default Carousel;
