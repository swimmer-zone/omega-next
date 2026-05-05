import { JSX } from 'react';
import { notFound } from 'next/navigation';
import { Footer, Menu, Hexagons, TravelContentClient } from '../../../components';
import '../../_scss/_page.scss';
import { API_URL } from '@/lib/api';

type Props = {
    params: Promise<{ id: string }>;
};

async function getTravel(id: string) {
    const response = await fetch(`${API_URL}/travels/${id}`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch travel blog');
    }

    return response.json();
}

export default async function TravelPage({ params }: Props): Promise<JSX.Element> {
    const { id } = await params;
    const travel = await getTravel(id);

    if (!travel) {
        return notFound();
    }

    return (
        <main>
            <Menu active="travels" />
            <Hexagons />

            <div className="content-column">
                <TravelContentClient
                    source={travel.body}
                    galleries={travel.galleries}
                />
            </div>

            <Footer />
        </main>
    );
}