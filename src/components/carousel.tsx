'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './_scss/carousel.scss';
// https://swiperjs.com/react

class Carousel extends React.Component<{ directory: string, num: number | string }> {
	render() {
		const { directory, num } = this.props;
		const total = Number(num);
		const max = Number.isFinite(total) && total > 0 ? total : 0;

		const imagesHTML = [] as React.ReactNode[];

		for (let i = 1; i <= max; i++) {
			let s: string | number = i;
			if (max < 100) {
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
					<img src={'/images/' + directory + '/' + s + '.jpeg'} alt={'image-' + s} className="shade"
						 loading="lazy"/>
				</SwiperSlide>
			);
		}

		return (
			<Swiper
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
				className="mySwiper"
			>
				{imagesHTML}
			</Swiper>
		);
	}
}

export default Carousel;
