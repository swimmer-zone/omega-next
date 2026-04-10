'use client';

import { JSX } from 'react';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { Carousel } from './';

export default function TravelContentClient({ source }: { source: string }): JSX.Element {
    return (
        <MDXRemote
            source={source}
            components={{ Carousel }}
            options={{
                mdxOptions: {
                    remarkPlugins: [
                        remarkGfm,
                        [remarkToc, { heading: 'Table of contents' }],
                    ],
                    rehypePlugins: [rehypeSlug],
                },
            }}
        />
    );
}