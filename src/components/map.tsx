import React, { JSX } from 'react';
import MapClient, { type City, type Country } from './map-client';
import '../app/_scss/_page.scss';
import './map.scss';
import { API_URL } from "@/lib/api";

async function getCities(): Promise<City[] | null> {
    const response = await fetch(`${API_URL}/cities`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch cities');
    }

    return response.json();
}

async function getCountries(): Promise<Country[] | null> {
    const response = await fetch(`${API_URL}/countries`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }

    return response.json();
}

export default async function Map(): Promise<JSX.Element> {
    const visitedCities = (await getCities()) || [];
    const visitedCountries = (await getCountries()) || [];

    return (<MapClient
        visitedCities={visitedCities}
        visitedCountries={visitedCountries}
    />)
}