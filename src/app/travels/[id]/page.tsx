import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Footer, Menu, Hexagons, TravelContentClient } from '../../../components';
import '../../_scss/_page.scss';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function TravelPage({ params }: Props) {
    const { id } = await params;

    const filePath = path.join(process.cwd(), 'src', 'content', 'travels', id + '.mdx');

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const source = fs.readFileSync(filePath, 'utf8');

    return (
        <main>
            <Menu active="travels" />
            <Hexagons />

            <div className="content-column">
                <TravelContentClient source={source} />
            </div>

            <Footer />
        </main>
    );
}