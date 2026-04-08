'use client';

import { JSX } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './carousel.scss';

// https://swiperjs.com/react

type Props = {
	directory: string
	num: number | string
};

export default function Carousel({ directory, num }: Props): JSX.Element | null {
	const total = Number(num);
	const max = Number.isFinite(total) && total > 0 ? total : 0;
	const digits = max >= 100 ? 3 : 2;

	const slides = Array.from({ length: max }, (_, i) => {
		const index = i + 1
		const s = String(index).padStart(digits, '0')

		return (
			<SwiperSlide key={index}>
				<Image
					src={'/images/' + directory + '/' + s + '.jpeg'}
					alt={'image-' + s}
					className = "shade"
					width={600}
					height={440}
					priority={index === 1}
					loading={index === 1 ? 'eager' : 'lazy'}
				/>
			</SwiperSlide>
		);
	});

	return (
		<Swiper
			autoplay={{
				delay: 2500,
				disableOnInteraction: true,
			}}
			effect="fade"
			fadeEffect={{
				crossFade: true,
			}}
			mousewheel={{
				forceToAxis: true,
				releaseOnEdges: true
			}}
			slidesPerView={1}
			spaceBetween={0}
			pagination={{
				type: 'fraction',
			}}
			navigation
			modules={[Autoplay, EffectFade, Pagination, Navigation]}
			className="mySwiper"
		>
			{slides}
		</Swiper>
	);
}