'use client';
import { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { zoom, zoomIdentity } from 'd3-zoom';

type Props = {
    children: React.ReactNode,
    minZoom?: number,
    maxZoom?: number,
};

export default function Zoomable({ children, minZoom = 1, maxZoom = 8 }: Props) {
    const svgRef = useRef<SVGGElement | null>(null)
    const containerRef = useRef<SVGGElement | null>(null)

    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return

        const zoomBehavior = zoom<SVGGElement, unknown>()
            .scaleExtent([minZoom, maxZoom])
            .on('zoom', (event) => {
                select(containerRef.current).attr('transform', event.transform)
            })

        select(svgRef.current).call(zoomBehavior).call(zoomBehavior.transform, zoomIdentity)

    }, [minZoom, maxZoom])

    return (
        <g ref={svgRef}>
            <g ref={containerRef}>
                {children}
            </g>
        </g>
    );
}