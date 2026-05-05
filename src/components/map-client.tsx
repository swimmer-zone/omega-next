'use client';

import React from 'react';
import Link from 'next/link';
import {
    Annotation,
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Latitude,
    Longitude,
    Marker,
} from '@vnedyalk0v/react19-simple-maps';

import Zoomable from './zoomable';
import countries from '../json/countries.json';

import '../app/_scss/_page.scss';
import './map.scss';

export type City = {
    name: string;
    latitude: number;
    longitude: number;
    annotation: [number, number, number];
    link?: string | null;
};

export type Country = {
    name: string;
};

type Props = {
    visitedCities: City[];
    visitedCountries: Country[];
};

type RotationAngles = [number, number, number] & {
    __brand: 'rotationAngles';
};

export default function MapClient({ visitedCities, visitedCountries }: Props) {
    const visitedCountryNames = new Set(
        visitedCountries.map((country) => country.name)
    );

    return (
        <ComposableMap
            projectionConfig={{
                rotate: [-45, -35, 0] as RotationAngles,
                scale: 350,
            }}
        >
            <Zoomable>
                <>
                    <Graticule stroke="#111111" />

                    <Geographies geography={countries}>
                        {({ geographies }) => (
                            <>
                                {geographies.map((geo) => {
                                    const highlighted = visitedCountryNames.has(
                                        geo.properties.name
                                    );

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            style={{
                                                default: {
                                                    fill: highlighted
                                                        ? '#6c6eecaa'
                                                        : '#222222aa',
                                                    stroke: '#000000',
                                                },
                                                hover: {
                                                    fill: '#6c6eec44',
                                                    stroke: '#000000',
                                                },
                                                pressed: {
                                                    fill: '#6c6eec88',
                                                    stroke: '#000000',
                                                },
                                            }}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </Geographies>

                    {visitedCities.map(({ name, latitude, longitude, annotation, link }) => {
                        const label = (
                            <text
                                fill={link ? '#dddddd' : '#555555'}
                                fontSize={10}
                                style={{ cursor: link ? 'pointer' : 'default' }}
                            >
                                {name}
                            </text>
                        );

                        return (
                            <React.Fragment key={name}>
                                <Marker
                                    coordinates={[
                                        longitude as Longitude,
                                        latitude as Latitude,
                                    ]}
                                >
                                    <circle r={2} fill="#ffc917" />
                                </Marker>

                                <Annotation
                                    subject={[
                                        longitude as Longitude,
                                        latitude as Latitude,
                                    ]}
                                    dx={annotation[0]}
                                    dy={annotation[1]}
                                    connectorProps={{
                                        stroke: '#888888',
                                        strokeWidth: 1,
                                        strokeLinecap: 'round',
                                    }}
                                >
                                    {link ? (
                                        <Link href={`/travels/${link}`}>
                                            {label}
                                        </Link>
                                    ) : (
                                        label
                                    )}
                                </Annotation>
                            </React.Fragment>
                        );
                    })}
                </>
            </Zoomable>
        </ComposableMap>
    );
}