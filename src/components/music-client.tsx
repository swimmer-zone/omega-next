'use client';

import React, { useEffect, useRef, useState } from 'react';
import './music.scss';
import type { Section } from './music';
import { STORAGE_URL } from '@/lib/api';

function formatTime(seconds: number | null): string {
    if (seconds == null || Number.isNaN(seconds)) return '';

    return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}

function countDown(duration: number | null, time: number | null): string {
    if (time == null || duration == null || Number.isNaN(time)) return '';

    return formatTime(duration - time);
}

type Props = {
    sections: Section[];
};

export default function MusicClient({ sections }: Props) {
    const player = useRef<HTMLAudioElement | null>(null);
    const contentRefs = useRef<Record<number, HTMLElement | null>>({});

    const [currentTrack, setCurrentTrack] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState<number | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [currentSectionId, setCurrentSectionId] = useState<number | null>(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
    const [openSectionId, setOpenSectionId] = useState<number | null>(sections[0]?.id ?? null);

    useEffect(() => {
        const audio = player.current;
        if (!audio) return;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', updateTime);

        return () => audio.removeEventListener('timeupdate', updateTime);
    }, []);

    useEffect(() => {
        const audio = player.current;
        if (!audio || !currentTrack) return;

        audio.src = currentTrack;
        audio.play().catch(() => {});
    }, [currentTrack]);

    useEffect(() => {
        if (!currentTrack || currentSectionId === null || currentTrackIndex === null) {
            document.title = 'Ω';
            return;
        }

        const section = sections.find((item) => item.id === currentSectionId);
        const track = section?.tracks[currentTrackIndex];

        if (track) {
            document.title = `Ω - ${track.title}`;
        }
    }, [currentTrack, currentSectionId, currentTrackIndex, sections]);

    useEffect(() => {
        const audio = player.current;
        if (!audio) return;

        const handleEnded = () => {
            if (currentSectionId === null || currentTrackIndex === null) return;

            const section = sections.find((item) => item.id === currentSectionId);
            if (!section) return;

            const nextIndex = currentTrackIndex + 1;
            const nextTrack = section.tracks[nextIndex];

            if (nextTrack) {
                setCurrentTrack(STORAGE_URL + '/' + nextTrack.file);
                setCurrentTrackIndex(nextIndex);
            }
        };

        audio.addEventListener('ended', handleEnded);

        return () => audio.removeEventListener('ended', handleEnded);
    }, [currentSectionId, currentTrackIndex, sections]);

    useEffect(() => {
        sections.forEach((section) => {
            const el = contentRefs.current[section.id];
            if (!el) return;

            el.style.maxHeight = openSectionId === section.id ? `${el.scrollHeight}px` : '0px';
        });
    }, [openSectionId, sections]);

    useEffect(() => {
        const handleResize = () => {
            if (openSectionId === null) return;

            const el = contentRefs.current[openSectionId];
            if (el) {
                el.style.maxHeight = `${el.scrollHeight}px`;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [openSectionId]);

    const handleTrackClick = (sectionId: number, trackIndex: number, fileUrl: string) => {
        setCurrentTrack(fileUrl);
        setCurrentSectionId(sectionId);
        setCurrentTrackIndex(trackIndex);
    };

    const toggleAccordion = (sectionId: number) => {
        setOpenSectionId((previous) => previous === sectionId ? null : sectionId);
    };

    const timeLeft = countDown(duration, currentTime);

    return (
        <section className="music music-home" id="music">
            {sections.map((section) => {
                const isOpen = openSectionId === section.id;
                const isSectionPlaying = currentSectionId === section.id && duration;

                const sectionProgress = isSectionPlaying && currentTime != null
                    ? (currentTime / duration) * 100
                    : 0;

                return (
                    <article key={section.id} id={`section_${section.id}`}>
                        <div className="track-list" data-set={section.id}>
                            <h2
                                style={{ ['--progress' as string]: `${sectionProgress}%` }}
                                className={isOpen ? 'open' : ''}
                            >
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={`tracks_${section.id}`}
                                    className="accordion-toggle"
                                    onClick={() => toggleAccordion(section.id)}
                                >
                                    <span className="arrow" aria-hidden>
                                        {isOpen ? '▲' : '▼'}
                                    </span>

                                    <span className="title-text">{section.title}</span>

                                    <span className="title-num">
                                        {section.tracks.length} tracks
                                    </span>
                                </button>
                            </h2>

                            <div
                                id={`tracks_${section.id}`}
                                ref={(el) => {
                                    contentRefs.current[section.id] = el;
                                }}
                                className={`collapsible ${isOpen ? 'open' : ''}`}
                            >
                                {section.intro && (
                                    <p className="album-intro">{section.intro}</p>
                                )}

                                <ul>
                                    {section.tracks.map((track, index) => {
                                        const isPlaying = currentTrack === STORAGE_URL + '/' + track.file && currentTime != null;

                                        return (
                                            <li key={track.id}>
                                                <span className="a">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleTrackClick(section.id, index, STORAGE_URL + '/' + track.file)}
                                                        data-permalink={track.slug}
                                                        className={isPlaying ? 'track-button playing' : 'track-button'}
                                                    >
                                                        {track.title}

                                                        {track.remark && (
                                                            <small className="remark">
                                                                ({track.remark})
                                                            </small>
                                                        )}
                                                    </button>
                                                </span>

                                                <span className="duration" data-seconds={track.duration}>
                                                    {isPlaying ? timeLeft : formatTime(track.duration)}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </article>
                );
            })}

            <audio ref={player} />
        </section>
    );
}