'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './carousel.scss';

type Props = {
	directory: string;
};

export default function Carousel({ directory }: Props) {
	const [numImages, setNumImages] = useState(0);

	useEffect(() => {
		const checkImages = async () => {
			let count = 0;
			while (true) {
				const img = `/images/${directory}/${String(count + 1).padStart(2, '0')}.jpeg`;
				try {
					const res = await fetch(img, { method: 'HEAD' });
					if (!res.ok) break;
					count++;
				} catch {
					break;
				}
			}
			setNumImages(count);
		};
		checkImages().then(() => {});
	}, [directory]);

	if (numImages === 0) return null;

	const digits = numImages >= 100 ? 3 : 2;
	const slides = Array.from({ length: numImages }, (_, i) => {
		const s = String(i + 1).padStart(digits, '0');
		return (
			<SwiperSlide key={i}>
				<Image
					src={`/images/${directory}/${s}.jpeg`}
					alt={`image-${s}`}
					width={600}
					height={440}
					className="shade"
					loading={i === 0 ? 'eager' : 'lazy'}
					priority={i === 0}
				/>
			</SwiperSlide>
		);
	});

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={0}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			autoplay={{ delay: 2500, disableOnInteraction: true }}
			pagination={{ type: 'fraction' }}
			navigation
			modules={[Autoplay, EffectFade, Pagination, Navigation]}
			className="mySwiper"
		>
			{slides}
		</Swiper>
	);
}