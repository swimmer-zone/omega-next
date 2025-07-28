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
import { city } from '../../json';
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
        "Czechia"
// Fiji
// Tanzania
// W. Sahara
// Canada
// United States of America
// Kazakhstan
// Uzbekistan
// Papua New Guinea
// Indonesia
// Argentina
// Chile
// Dem. Rep. Congo
// Somalia
// Kenya
// Sudan
// Chad
// Haiti
// Dominican Rep.
// Russia
// Bahamas
// Falkland Is.
// Greenland
// Fr. S. Antarctic Lands
// Timor-Leste
// South Africa
// Lesotho
// Mexico
// Uruguay
// Brazil
// Bolivia
// Peru
// Colombia
// Panama
// Costa Rica
// Nicaragua
// Honduras
// El Salvador
// Guatemala
// Belize
// Venezuela
// Guyana
// Suriname
// Ecuador
// Puerto Rico
// Jamaica
// Cuba
// Zimbabwe
// Botswana
// Namibia
// Senegal
// Mali
// Mauritania
// Benin
// Niger
// Nigeria
// Cameroon
// Togo
// Ghana
// Côte d'Ivoire
// Guinea
// Guinea-Bissau
// Liberia
// Sierra Leone
// Burkina Faso
// Central African Rep.
// Congo
// Gabon
// Eq. Guinea
// Zambia
// Malawi
// Mozambique
// eSwatini
// Angola
// Burundi
// Israel
// Lebanon
// Madagascar
// Palestine
// Gambia
// Tunisia
// Algeria
// Jordan
// United Arab Emirates
// Qatar
// Kuwait
// Iraq
// Oman
// Vanuatu
// Cambodia
// Laos
// Myanmar
// North Korea
// South Korea
// Mongolia
// India
// Bangladesh
// Bhutan
// Nepal
// Pakistan
// Afghanistan
// Tajikistan
// Kyrgyzstan
// Turkmenistan
// Iran
// Syria
// Armenia
// Sweden
// Belarus
// Ukraine
// Moldova
// Lithuania
// Latvia
// Estonia
// Albania
// Croatia
// New Caledonia
// Solomon Is.
// New Zealand
// Australia
// Sri Lanka
// China
// Taiwan
// Azerbaijan
// Philippines
// Malaysia
// Brunei
// Slovenia
// Eritrea
// Japan
// Paraguay
// Yemen
// Saudi Arabia
// Antarctica
// N. Cyprus
// Cyprus
// Morocco
// Egypt
// Libya
// Ethiopia
// Djibouti
// Somaliland
// Uganda
// Rwanda
// Bosnia and Herz.
// Macedonia
// Montenegro
// Kosovo
// Trinidad and Tobago
// S. Sudan
    ];

    return (<main>
        <Head>
            <title>Ω -Travel Map</title>
        </Head>
        <Menu active="whisky"/>
        <ComposableMap
            projectionConfig={{
                rotate: [-45, -35, 0],
                scale: 350
            }}
        >
                <Graticule stroke="#111111"/>
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map((geo) => {
                            const isHighlighted = visited.includes(geo.properties.name);
                            return (<Geography
                                style={{
                                    hover: {
                                        fill: "#222222",
                                    }
                                }}
                                key={geo.rsmKey}
                                geography={geo}
                                stroke="#000000"
                                fill={isHighlighted ? "#6c6eec" : "#111111"}
                            />)
                        })
                    }
                </Geographies>
                {city.map(({name, coordinates, link}) => (<>
                    <Marker key={name} coordinates={coordinates} style={{width: "4px", height: "4px"}}>
                        <circle r="2" fill="#ffc917"/>
                    </Marker>
                    <Annotation key={name} subject={coordinates} dx={-90} dy={-30}
                    connectorProps={{
                        stroke: "#888888",
                        strokeWidth: 1,
                        strokeLinecap: "round"
                    }}
                >
                    {link && <a href={link}>
                        <text x="-8"
                              textAnchor="end"
                              alignmentBaseline="middle"
                              style={{
                                  fontFamily: "Afacad",
                                  fontSize: "12px",
                                  fill: "#dddddd",
                                  letterSpacing: 0
                              }}>
                            {name}
                        </text>
                    </a>}
                    {!link && <text x="-8"
                          textAnchor="end"
                          alignmentBaseline="middle"
                          style={{
                              fontFamily: "Afacad",
                              fontSize: "12px",
                              fill: "#dddddd",
                              letterSpacing: 0
                          }}>
                        {name}
                    </text>}
                </Annotation>
                </>))}
        </ComposableMap>
        <Footer/>
    </main>);
};

export default Travels;
