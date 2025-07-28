'use client';
import React from 'react';
import {
    Annotation,
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Marker,
    ZoomableGroup
} from '../../Components/Maps';
import Head from 'next/head';
import '../_scss/_page.scss';
import '../_scss/map.scss';
import {
    citiesAssorted,
    citiesAurora,
    citiesBoom,
    citiesCapeVerde,
    citiesEurope,
    citiesGorgia,
    citiesIceland,
    citiesItaly,
    citiesScandinavia,
    citiesThailand,
    citiesUk,
    citiesVietnam
} from '../../json';
import {Footer, Menu} from '../../Components';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Travels = () => {
    const visited = [
        "United Kingdom",
        "Norway",
        "France",
        "Thailand",
        "Vietnam",
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
        "Iceland",
        "Georgia",
        "Finland",
        "Serbia",
        "Slovakia",
        "Czechia",
        "Taiwan"
    ];

    const citiesAll = [
        ...citiesAssorted,
        ...citiesAurora,
        // ...citiesBoom,
        ...citiesCapeVerde,
        // ...citiesEurope,
        ...citiesGorgia,
        ...citiesIceland,
        // ...citiesItaly,
        ...citiesScandinavia,
        ...citiesThailand,
        ...citiesUk,
        ...citiesVietnam
    ];

    return (<main>
        <Head>
            <title>Ω -Travel Map</title>
        </Head>
        <Menu active="travels"/>
        <ComposableMap
            projectionConfig={{
                rotate: [-45, -35, 0],
                scale: 350
            }}
        >
            <ZoomableGroup>
                <Graticule stroke="#111111"/>
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map((geo) => {
                            const isHighlighted = visited.includes(geo.properties.name);
                            return (<Geography
                                style={{
                                    hover: {
                                        fill: "#2a2a2a",
                                    }
                                }}
                                key={geo.rsmKey}
                                geography={geo}
                                stroke="#000000"
                                fill={isHighlighted ? "#6c6eec" : "#222222"}
                            />)
                        })
                    }
                </Geographies>
                {citiesAll.map(({name, coordinates, link, annotation}) => (<>
                    <Marker key={name} coordinates={coordinates} style={{width: "4px", height: "4px"}}>
                        <circle r="2" fill="#ffc917"/>
                    </Marker>
                    <Annotation key={name} subject={coordinates} dx={annotation[0]} dy={annotation[1]}
                    connectorProps={{
                        stroke: "#888888",
                        strokeWidth: 1,
                        strokeLinecap: "round"
                    }}
                >
                    {link && <a href={link}>
                        <text x={annotation[2]}
                              textAnchor="end"
                              alignmentBaseline="middle"
                              style={{
                                  fontFamily: "Afacad",
                                  fontSize: "8px",
                                  fill: "#dddddd",
                                  letterSpacing: 0
                              }}>
                            {name}
                        </text>
                    </a>}
                    {!link && <text x={annotation[2]}
                          textAnchor="end"
                          alignmentBaseline="middle"
                          style={{
                              fontFamily: "Afacad",
                              fontSize: "8px",
                              fill: "#555555",
                              letterSpacing: 0
                          }}>
                        {name}
                    </text>}
                </Annotation>
                </>))}</ZoomableGroup>
        </ComposableMap>
        <Footer/>
    </main>);
};

export default Travels;
