'use client';

import dynamic from 'next/dynamic';
import type { City, Country } from '@/types/all';

const MapClient = dynamic(() => import('./map-client'), {
    ssr: false,
});

type Props = {
    visitedCities: City[];
    visitedCountries: Country[];
};

export default function MapClientOnly(props: Props) {
    return <MapClient {...props} />;
}