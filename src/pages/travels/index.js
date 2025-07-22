'use client';
import Head from 'next/head';
import {Footer, Hexagons, Menu} from '../../Components';
import '../_scss/home.scss';
import '../_scss/travels.scss';
import React from "react";

// 2024-01-08
// 2023-02-20
// ?
// 2022-11-28
// 2021-11-28
// 2018-08-31
// 2008-05-19

const Travels = () => {
    const travels = [
        {
            "title": "Italy",
            "destination": "italy",
            "images": 223,
            "posted": "May 2008",
            "description": ""
        },
        {
            "title": "Cape Verde",
            "destination": "cape-verde",
            "images": 286,
            "posted": "January 2025",
            "description": ""
        },
        {
            "title": "Iceland",
            "destination": "iceland",
            "images": 159,
            "posted": "August 2024",
            "description": ""
        },
        {
            "title": "Georgia",
            "destination": "georgia",
            "images": 367,
            "posted": "January 2024",
            "description": ""
        },
        {
            "title": "Aurora",
            "destination": "aurora",
            "images": 51,
            "posted": "February 2023",
            "description": ""
        },
        {
            "title": "United Kingdom & Ireland",
            "destination": "uk",
            "images": 24,
            "posted": "ongoing",
            "description": " - includes a database of all my whisky tastings"
        },
        {
            "title": "Vietnam",
            "destination": "vietnam",
            "images": 286,
            "posted": "November 2022",
            "description": ""
        },
        {
            "title": "Thailand",
            "destination": "thailand",
            "images": 87,
            "posted": "November 2021",
            "description": ""
        },
        {
            "title": "Boom",
            "destination": "boom",
            "images": 206,
            "posted": "August 2018",
            "description": " - includes 4 visits to Boom festival and a visit to Sziget and Dour"
        },
        {
            "title": "Europe",
            "destination": "europe",
            "images": 176,
            "posted": "May 2008",
            "description": " - about my Eurotrip through 15 countries"
        }
    ];

    let totalImages = 0;

    Object.keys(travels).map(key => {
        let travel = travels[key];

        totalImages += travel.images;
    })

    return (<main className="travel-overview-background">
        <Head>
            <title>Ω - Travels</title>
        </Head>
        <Menu active="travels"/>
        <Hexagons />
        <div className="content-column">
            <h1>Travels</h1>
            <p>
                This is a list of all my travels in descending order. Cutting back on the amount of images wass
                quite a challenge. Especially Georgia, where we had a total of more than 2000 images. The total
                amount of images is currently {totalImages}.
            </p>

            {Object.keys(travels).map(key => {
                let travel = travels[key];

                return (<a href={'travels/' + travel.destination} className="banner"
                           style={{'backgroundImage': 'url(/images/travels/' + travel.destination + '/panorama.jpeg)'}}>
                    <h2>{travel['title']}</h2>
                    <small>Posted: {travel.posted} {travel.description}<br/>{travel.images} images</small>
                </a>);
            })}
        </div>
        <Footer/>
    </main>);
}

export default Travels;
