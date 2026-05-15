import { JSX } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { API_URL } from '@/lib/api';
import type { Blog } from '@/types/all';
import '../../_scss/travels.scss';
import { Hexagons, Menu } from '@/components';

export const metadata: Metadata = {
    title: 'Ω - Travels',
    description: 'A list of all my travels in descending order.',
};

async function getTravels(): Promise<Blog[] | null> {
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
        (total: number, travel: Blog) => total + (travel.image_count || 0),
        0
    );

    return (<main className="travel-overview-background overview-background">
        <Menu active="travels" />
        <Hexagons />

        <div className="content-column">
        <h1>Travels</h1>
        <p>
            This is a list of all my travels in descending order. I&#39;m still trying to cut back on the amount of images,
            but that is quite a challenge. Especially Georgia, where we had a total of more than images. So for now
            those are still a work in progress. The total amount of images is currently {totalImages}.
        </p>

        {travels.map((travel: Blog, index: number) => (
            <Link key={index} href={travel.slug} className="banner" style={{ 'backgroundImage': 'url(' + travel.panorama + ')' }}>
                <h2>{travel.title}</h2>
                <small>Posted: {new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }).format(new Date(travel.published_at))} {travel.description}<br />{travel.image_count || 0} images</small>
            </Link>)
        )}</div>
    </main>);
}