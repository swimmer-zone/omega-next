'use client'

import React from "react"
import {
    Annotation,
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Marker,
    ZoomableGroup,
} from "./maps"

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
} from "../json"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

type City = {
    name: string
    coordinates: [number, number]
    annotation: [number, number, number]
    link?: string
}

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
]

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

export default function Map() {
    return (
        <ComposableMap
            projectionConfig={{
                rotate: [-45, -35, 0],
                scale: 350,
            }}
        >
            <ZoomableGroup>
                <>
                    <Graticule stroke="#111111" />

                    <Geographies geography={geoUrl}>
                        {({ geographies }: { geographies: any[] }) => (
                            <>
                                {geographies.map((geo: any) => {
                                    const highlighted = visited.includes(
                                        geo.properties.name
                                    );

                                    return (
                                        <Geography
                                            key={geo.rsmkey}
                                            {...geo}
                                            style={{
                                                default: {
                                                    fill: highlighted ? "#6c6eec" : "#222222",
                                                    stroke: "#000000",
                                                },
                                                hover: {
                                                    fill: "#6c6eec",
                                                    stroke: "#000000",
                                                },
                                                pressed: {
                                                    fill: "#6c6eec",
                                                    stroke: "#000000",
                                                },
                                            }}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </Geographies>

                    {citiesAll.map(({ name, coordinates, annotation, link }) => (
                        <React.Fragment key={name}>
                            <Marker coordinates={coordinates} key={name}>
                                {<circle r={2} fill="#ffc917" />}
                            </Marker>

                            <Annotation
                                subject={coordinates}
                                dx={annotation[0]}
                                dy={annotation[1]}
                                connectorProps={{
                                    stroke: "#888888",
                                    strokeWidth: 1,
                                    strokeLinecap: "round",
                                }}
                            />
                        </React.Fragment>
                    ))}
                </>
            </ZoomableGroup>
        </ComposableMap>
    )
}