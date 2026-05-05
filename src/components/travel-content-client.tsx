'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Carousel from './carousel';

type Gallery = {
    slug: string;
    images: string[];
};

type Props = {
    source: string;
    galleries: Gallery[];
};

export default function TravelContentClient({ source, galleries }: Props) {
    const parts = source.split(/(\[carousel\s+folder="[^"]+"\])/g);

    return (
        <>
            {parts.map((part, index) => {
                const match = part.match(/\[carousel\s+folder="([^"]+)"\]/);

                if (match) {
                    const folder = match[1];
                    const gallery = galleries.find((gallery) => gallery.slug === folder);

                    return gallery ? (
                        <Carousel key={index} images={gallery.images} />
                    ) : null;
                }

                return (
                    <ReactMarkdown key={index} remarkPlugins={[remarkGfm]}>
                        {part}
                    </ReactMarkdown>
                );
            })}
        </>
    );
}