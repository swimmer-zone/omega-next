import React,{ JSX } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Footer, Menu, Hexagons } from '../../../components';
import '../../_scss/_page.scss';
import '../../_scss/diy.scss';
import { API_URL } from '@/lib/api';

export const metadata: Metadata = {
    title: 'Ω - Travels',
    description: 'A list of all my travels in descending order.',
};

type Travel = {
    title: string;
    slug: string;
    images: number;
    posted: string;
    description: string;
};

async function getTravels(): Promise<Travel[] | null> {
    const response = await fetch(`${API_URL}/travels`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch travels');
    }

    return response.json();
}

export default async function Travels(): Promise<JSX.Element> {
    const travels = (await getTravels()) || [];

    const totalImages: number = travels.reduce(
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
                    {travels.map((travel: Travel, index: number) => (
                        <li key={index}>
                            <Link href={travel.slug} title={travel.posted}>
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