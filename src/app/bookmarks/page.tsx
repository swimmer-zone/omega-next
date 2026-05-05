import { JSX } from 'react';
import { Metadata } from 'next';
import { Footer, Hexagons, Menu } from '../../components';
import '../_scss/_page.scss';
import {API_URL} from "@/lib/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
    title: 'Ω - Bookmarks',
    description: '',
};

type Bookmarks = {
    content: string;
};

async function getBookmarks(): Promise<Bookmarks[] | null> {
    const response = await fetch(`${API_URL}/bookmarks`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch home text');
    }

    return response.json();
}

export default async function Bookmarks(): Promise<JSX.Element> {
    const bookmarks = await getBookmarks();

    return (<main>
        <Menu active="bookmarks"/>
        <Hexagons />
        <div className="content-column">
            <h1>Bookmarks</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {bookmarks ? bookmarks[0]?.content : 'No bookmarks available'}
            </ReactMarkdown>
            <a href="downloads/bookmarks.html" download>Click here to download the file</a>.
        </div>
        <Footer/>
    </main>);
}