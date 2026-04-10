'use client';

import React, { JSX } from 'react';
import Link from 'next/link';
import {
    Annotation,
    ComposableMap,
    Geographies,
    Geography,
    Graticule, Latitude, Longitude,
    Marker,
} from '@vnedyalk0v/react19-simple-maps';
import Zoomable from './zoomable';
import '../app/_scss/_page.scss';
import './map.scss';

import {
    citiesAssorted,
    citiesAurora,
    citiesCapeVerde,
    citiesGeorgia,
    citiesIceland,
    citiesScandinavia,
    citiesThailand,
    citiesUk,
    citiesVietnam,
    countries,
} from '../json';

// Direct copy from https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json

type City = {
    name: string
    coordinates: [number, number]
    annotation: [number, number, number]
    link?: string
};
type RotationAngles = [number, number, number] & { __brand: "rotationAngles" };

const visited: string[] = [
    "United Kingdom",
    "Norway",
    "France",
    "Poland",
    "Austria",
    "Hungary",
    "Romania",
    "Germany",
    "Bulgaria",
    "Greece",
    "Turkey",
    "Switzerland",
    "Luxembourg",
    "Belgium",
    "Netherlands",
    "Portugal",
    "Spain",
    "Ireland",
    "Italy",
    "Denmark",
    "Finland",
    "Serbia",
    "Slovakia",
    "Czechia",
    "Taiwan",
];

const citiesAll: City[] = [
    ...citiesAssorted,
    ...citiesAurora,
    ...citiesCapeVerde,
    ...citiesGeorgia,
    ...citiesIceland,
    ...citiesScandinavia,
    ...citiesThailand,
    ...citiesUk,
    ...citiesVietnam,
].map(city => ({
    ...city,
    coordinates: city.coordinates.slice(0, 2) as [number, number],
    annotation: city.annotation.slice(0, 3) as [number, number, number],
}));

export default function Map(): JSX.Element | null {
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
                        {({ geographies }: { geographies: { rsmKey: string; properties: { name: string } }[] }) => (
                            <>
                                {geographies.map((geo: { rsmKey: string; properties: { name: string } }) => {
                                    const highlighted = visited.includes(geo.properties.name)

                                    return (
                                        <Geography
                                            geography={geo}
                                            key={geo.properties.name}
                                            style={{
                                                default: {
                                                    fill: highlighted ? "#6c6eecaa" : "#222222aa",
                                                    stroke: "#000000",
                                                },
                                                hover: {
                                                    fill: "#6c6eec44",
                                                    stroke: "#000000",
                                                },
                                                pressed: {
                                                    fill: "#6c6eec88",
                                                    stroke: "#000000",
                                                },
                                            }}/>
                                    )
                                })}
                            </>
                        )}
                    </Geographies>

                    {citiesAll.map(({ name, coordinates, annotation, link }) => {
                        const Label = (
                            <text fill={ link ? "#dddddd" : "#555555" } fontSize={10} style={{ cursor: link ? "pointer" : "default" }}>
                                {name}
                            </text>
                        );

                        return(
                            <React.Fragment key={name}>
                                <Marker coordinates={coordinates as [Longitude, Latitude]} key={name + "Marker"}>
                                    {<circle r={2} fill="#ffc917" />}
                                </Marker>

                                <Annotation
                                    subject={coordinates as [Longitude, Latitude]}
                                    dx={annotation[0]}
                                    dy={annotation[1]}
                                    connectorProps={{
                                        stroke: "#888888",
                                        strokeWidth: 1,
                                        strokeLinecap: "round",
                                    }}
                                >
                                    {link ? <Link href={'travels/' + link} passHref>{Label}</Link>: Label}
                                </Annotation>
                            </React.Fragment>
                        );
                    })}
                </>
            </Zoomable>
        </ComposableMap>
    );
}