import React,{ JSX } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Menu, Hexagons } from '../../../components';
import '../../_scss/_page.scss';
import '../../_scss/diy.scss';
import { travelsMobile } from '../../../json';

export const metadata: Metadata = {
    title: 'Ω - Travels',
    description: 'A list of all my travels in descending order.',
};

type Travel = {
    title: string;
    destination: string;
    images: number;
    posted: string;
    description: string;
};

export default function Travels(): JSX.Element {
    const totalImages: number = travelsMobile.reduce(
        (total: number, travel: Travel) => total + travel.images,
        0
    );

    return (
        <main className="diy-overview-background">
            <Menu active="travels" />
            <Hexagons />
            <div className="content-column">
                <h1>My Travels</h1>
                <p>
                    This is a list of all my travels in descending order. Cutting back on he amount of images was quite
                    a challenge. Especially Georgia, where we had a total of more than 2000 images. The total amount of
                    images is currently {totalImages}.
                </p>
                <ul>
                    {travelsMobile.map((travel: Travel, index: number) => (
                        <li key={index}>
                            <Link href={travel.destination} title={travel.posted}>
                                {travel.title}
                            </Link>
                            {travel.description}
                        </li>
                    ))}
                </ul>
                <Footer />
            </div>
        </main>
    );
}