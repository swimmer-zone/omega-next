import { Metadata } from 'next';
import { Footer, Map, Menu } from '../../components';

export const metadata: Metadata = {
    title: 'Ω - Travel Map',
    description: 'All the places I have visited in descending order.',
};

export default async function Travels() {
    return (
        <main>
            <Menu active="travels" />
            <Map />
            <Footer />
        </main>
    );
}