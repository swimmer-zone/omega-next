'use client';
import Head from 'next/head';
import {Footer, Hexagons, Menu} from '../../Components';
import '../_scss/_page.scss';
import '../_scss/diy.scss';
import React from "react";

const Travels = () => {
    const travels = [
        {
            "title": "Cape Verde",
            "destination": "cape-verde",
            "images": 286,
            "posted": "January 10th, 2025",
            "description": ""
        },
        {
            "title": "Iceland",
            "destination": "iceland",
            "images": 159,
            "posted": "July 28th, 2024",
            "description": ""
        },
        {
            "title": "Georgia",
            "destination": "georgia",
            "images": 367,
            "posted": "January 8th, 2024",
            "description": ""
        },
        {
            "title": "Aurora",
            "destination": "aurora",
            "images": 51,
            "posted": "February 20th, 2023",
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
            "posted": "November 28th, 2022",
            "description": ""
        },
        {
            "title": "Thailand",
            "destination": "thailand",
            "images": 87,
            "posted": "November 28th, 2021",
            "description": ""
        },
        {
            "title": "Boom",
            "destination": "boom",
            "images": 206,
            "posted": "August 31st, 2018",
            "description": " - includes 4 visits to Boom festival and a visit to Sziget and Dour"
        },
        {
            "title": "Europe",
            "destination": "europe",
            "images": 176,
            "posted": "May 19th, 2008",
            "description": " - about my Eurotrip through 15 countries"
        }
    ];

    let totalImages = 0;

    Object.keys(travels).map(key => {
        let travel = travels[key];

        totalImages += travel.images;
    })

    return (<main className="diy-overview-background">
        <Menu active="travels"/>
        <Hexagons />
        <div className="content-column">
            <Head>
                <title>Ω - Travels</title>
            </Head>
            <h1>My Travels</h1>
            <p>
                This is a list of all my travels in descending order. Cutting back on the amount of images wass quite a
                challenge. Especially Georgia, where we had a total of more than 2000 images. The total amount of images
                is currently {totalImages}.
            </p>
            <ul>

                {Object.keys(travels).map(key => {
                    let travel = travels[key];

                    return (
                        <li><a href={travel.destination} title={travel.posted}>{travel.title}</a>
                            {travel.description}
                            {/*<small>{travel.images} images</small>*/}
                        </li>
                    );
                })}
            </ul>
            <Footer/>
        </div>
    </main>);
}

export default Travels;
