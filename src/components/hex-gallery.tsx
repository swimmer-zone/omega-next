'use client';

import Image from 'next/image';

import './hex-gallery.scss';

type Props = {
    images: string[];
};

export default function HexGallery({ images }: Props) {
    if (!images.length) return null;

    return (
        <section className="hexagon-gallery">
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={216}
                    height={238}
                    className="shade"
                    unoptimized
                />
            ))}
        </section>
    );
}