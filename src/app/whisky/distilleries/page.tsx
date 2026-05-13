'use client';
import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Marker,
    ZoomableGroup
} from '../../Components/Maps';
import { whisky_distillery } from '../../json';
import Head from 'next/head';
import '../_scss/whisky-distilleries.scss';
import { Footer, Menu } from '../../Components';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Distilleries = () => {
    const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

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
        <div className="container">
            <Menu active="whisky"/>
            <div className="content-wrap" onClick={toggleMenu}>
                <div className="content">
                    <Head>
                        <title>Swimmer ♬ Whisky Distilleries</title>
                    </Head>

                    <ComposableMap
                        width={800}
                        height={800}
                        projection="geoAzimuthalEqualArea"
                        projectionConfig={{
                            rotate: [-10.0, -53.0, 0],
                            scale: 500
                        }}
                    >
                        <ZoomableGroup center={[10, 45]} zoom={1}>
                            <Graticule stroke="#222222"/>
                            <Geographies geography={geoUrl}>
                                {({geographies}) =>
                                    geographies.map((geo) => {
                                        const isHighlighted = visited.includes(geo.properties.name);
                                        return (<Geography
                                            style={{
                                                hover: {
                                                    fill: "#aaaaaa",
                                                },
                                                pressed: {
                                                    fill: "#aaaaaa",
                                                },
                                            }}
                                            key={geo.rsmKey}
                                            geography={geo}
                                            stroke="#111111"
                                            fill={isHighlighted ? "#888888" : "#6c6eec"}
                                        />)
                                    })
                                }
                            </Geographies>
                            {whisky_distillery.map(({name, coordinates, markerOffset}) => (
                                <Marker key={name} coordinates={coordinates} style={{width: "4px", height: "4px"}}>
                                    <circle r="1" fill="#ffc917" />
                                    <text
                                        textAnchor="middle"
                                        y={markerOffset}
                                        style={{fontFamily: "Afacad", fontSize: "2px", fill: "#dddddd", letterSpacing: 0}}
                                    >
                                        {name}
                                    </text>
                                </Marker>
                            ))}
                        </ZoomableGroup>
                    </ComposableMap>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
};

export default Distilleries;