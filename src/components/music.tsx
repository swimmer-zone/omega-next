'use client';
import React, { useState, useEffect, useRef } from 'react';
import './music.scss';
import { albums } from '../json';

function countDown(duration, time) {
    if (!isNaN(time) && duration != null) {
        const timeLeft = duration - time;
        return Math.floor(timeLeft / 60) + ':' + ('0' + Math.floor(timeLeft % 60)).slice(-2);
    }
    return '';
}

const Music = () => {
    const player = useRef(null);
    const [state, setState] = useState({
        currentTrack: null,
        currentTime: null,
        duration: null,
        currentAlbumKey: null,
        currentTrackIndex: null
    });
    const [pageTitle, setPageTitle] = useState('Ω');

    const albumKeys = Object.keys(albums || {});
    const [openKey, setOpenKey] = useState(albumKeys[0] ?? null);
    const contentRefs = useRef({});

    // Update the time
    // useEffect(() => {
    //     const audio = player.current;
    //     if (!audio) return;
    //     const updateTime = (e) => {
    //         setState(prev => ({ ...prev, currentTime: e.target.currentTime, duration: e.target.duration }));
    //     };
    //     audio.addEventListener('timeupdate', updateTime);
    //     return () => audio.removeEventListener('timeupdate', updateTime);
    // }, []);

    // Play track
    useEffect(() => {
        const audio = player.current;
        if (!audio) return;
        if (state.currentTrack) {
            audio.src = state.currentTrack;
            audio.play().catch(() => {});
        }
    }, [state.currentTrack]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (!state.currentTrack) {
            document.title = 'Ω';
            return;
        }

        const album = albums[state.currentAlbumKey];
        if (!album) return;

        const trackKey = Object.keys(album.tracks)[state.currentTrackIndex];
        const track = album.tracks[trackKey];
        if (!track) return;

        const titleText = `Ω - ${track.title}`;
        document.title = titleText;
    }, [state.currentTrack, state.currentAlbumKey, state.currentTrackIndex]);

    // Automatically skip to next track
    useEffect(() => {
        const audio = player.current;
        if (!audio) return;

        const handleEnded = () => {
            if (state.currentAlbumKey && state.currentTrackIndex != null) {
                const currentAlbum = albums[state.currentAlbumKey];
                const trackKeys = Object.keys(currentAlbum.tracks);
                const nextIndex = state.currentTrackIndex + 1;

                if (nextIndex < trackKeys.length) {
                    const nextTrack = currentAlbum.tracks[trackKeys[nextIndex]];
                    const nextScName = '/audio/' + nextTrack.local + '.mp3';
                    setState(prev => ({
                        ...prev,
                        currentTrack: nextScName,
                        currentTrackIndex: nextIndex
                    }));
                }
            }
        };

        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [state.currentAlbumKey, state.currentTrackIndex]);

    // Play track on click
    const handleTrackClick = (albumKey, trackIndex, scName) => {
        const audio = player.current;
        setState(prev => {
            if (prev.currentTrack === scName) {
                if (audio) {
                    if (audio.paused) audio.play().catch(() => {});
                    else audio.pause();
                }
                return prev;
            }
            return { ...prev, currentTrack: scName, currentAlbumKey: albumKey, currentTrackIndex: trackIndex };
        });
    };

    const timeLeft = countDown(state.duration, state.currentTime);
    const progressWidth = state.duration ? (state.currentTime / state.duration) * 100 : 0;

    // Accordion
    useEffect(() => {
        albumKeys.forEach(key => {
            const el = contentRefs.current[key];
            if (!el) return;
            el.style.maxHeight = openKey === key ? el.scrollHeight + 'px' : '0px';
        });
    }, [openKey, albumKeys.join('|')]);

    useEffect(() => {
        const handleResize = () => {
            if (!openKey) return;
            const el = contentRefs.current[openKey];
            if (el) el.style.maxHeight = el.scrollHeight + 'px';
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [openKey]);

    const toggleAccordion = (key) => setOpenKey(prev => (prev === key ? null : key));

    return (
        <section className="music music-home" id="music">
            {albumKeys.map(key => {
                const album = albums[key];
                const isOpen = openKey === key;

                // NEW:
                const isAlbumPlaying = state.currentAlbumKey === key && state.duration;
                const albumProgress = isAlbumPlaying
                    ? (state.currentTime / state.duration) * 100
                    : 0;

                return (
                    <article key={key} id={`album_${key}`}>
                        <div className="track-list" data-set={key}>
                            {album.title && (<h2
                                    style={{['--progress']: `${albumProgress}%`}}
                                    className={isOpen ? 'open' : ''}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`tracks_${key}`}
                                        className="accordion-toggle"
                                        onClick={() => toggleAccordion(key)}
                                    >
                                        <span className="arrow" aria-hidden>
                                            {isOpen ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                           viewBox="0 0 20 20">
                                                    <path fill="#6c6eec"
                                                          d="M0 10c0-5.523 4.477-10 10-10s10 4.477 10 10v0c0 5.523-4.477 10-10 10s-10-4.477-10-10v0zM10 18c4.418 0 8-3.582 8-8s-3.582-8-8-8v0c-4.418 0-8 3.582-8 8s3.582 8 8 8v0zM10.7 7.46l3.55 3.54-1.41 1.41-2.84-2.81-2.83 2.8-1.41-1.4 4.24-4.24 0.7 0.7z"></path>
                                                </svg> :
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path fill="#6c6eec"
                                                          d="M20 10c0 5.523-4.477 10-10 10s-10-4.477-10-10v0c0-5.523 4.477-10 10-10s10 4.477 10 10v0zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8v0c4.418 0 8-3.582 8-8s-3.582-8-8-8v0zM9.3 12.54l-3.55-3.54 1.41-1.41 2.84 2.81 2.83-2.82 1.41 1.42-4.24 4.24-0.7-0.7z"></path>
                                                </svg>}
                                        </span>
                                        <span className="title-text">{album.title}</span>
                                        <span className="title-num">{album.tracks.length} tracks</span>
                                    </button>
                                </h2>
                            )}
                            <div
                                id={`tracks_${key}`}
                                ref={(el) => (contentRefs.current[key] = el)}
                                className={`collapsible ${isOpen ? 'open' : ''}`}
                            >
                                {album.intro && <p className="album-intro">{album.intro}</p>}
                                <ul>
                                    {Object.keys(album.tracks).map((trackKey, idx) => {
                                        const track = album.tracks[trackKey];
                                        const scName = '/audio/' + track.local + '.mp3';
                                        const playTime = Math.floor(track.playtime / 60) + ':' + ('0' + Math.floor(track.playtime % 60)).slice(-2);
                                        const showingCountdown = state.currentTrack === scName && state.currentTime != null;
                                        const buttonClass = showingCountdown ? "track-button playing" : "track-button";
                                        return (
                                            <li key={`${key}_${track.local}`}>
                                                <span className="a">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleTrackClick(key, idx, scName)}
                                                        data-permalink={track.title}
                                                        className={buttonClass}
                                                    >
                                                        {track.title}
                                                        {track.remark && <small className="remark">({track.remark})</small>}
                                                    </button>
                                                </span>
                                                <span className="duration" data-seconds={track.playtime}>
                                                    {showingCountdown ? timeLeft : playTime}
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
};

export default Music;