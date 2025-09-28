import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './_scss/music.scss';
import { albums } from '../json';

function countDown(duration, time) {
    if (!isNaN(time) && duration != null) {
        const timeLeft = duration - time;
        return Math.floor(timeLeft / 60) + ':' + ('0' + Math.floor(timeLeft % 60)).slice(-2);
    }
    return '';
}

const Music = ({ archive }) => {
    const player = useRef(null);
    const [state, setState] = useState({
        currentTrack: null,
        currentTime: null,
        duration: null
    });

    const albumKeys = Object.keys(albums || {});
    const [openKey, setOpenKey] = useState(albumKeys[0] ?? null); // first open by default
    const contentRefs = useRef({}); // map key -> DOM node

    // single timeupdate listener (added once)
    useEffect(() => {
        const audio = player.current;
        if (!audio) return;
        const updateTime = (e) => {
            setState(prev => ({ ...prev, currentTime: e.target.currentTime, duration: e.target.duration }));
        };
        audio.addEventListener('timeupdate', updateTime);
        return () => audio.removeEventListener('timeupdate', updateTime);
    }, []);

    // load & play when currentTrack changes
    useEffect(() => {
        const audio = player.current;
        if (!audio) return;
        if (state.currentTrack) {
            audio.src = state.currentTrack;
            audio.play().catch(() => { /* ignore play promise rejection */ });
        }
    }, [state.currentTrack]);

    // adjust maxHeight to scrollHeight for open/close (synchronously before paint)
    useLayoutEffect(() => {
        albumKeys.forEach(key => {
            const el = contentRefs.current[key];
            if (!el) return;
            if (openKey === key) {
                // set to scrollHeight so the CSS transition animates
                el.style.maxHeight = el.scrollHeight + 'px';
            } else {
                el.style.maxHeight = '0px';
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openKey, albumKeys.join('|')]); // albumKeys join used to silence exhaustive-deps in a simple way

    // on window resize, recompute the open section height
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

    const handleTrackClick = (scName) => {
        const audio = player.current;
        setState(prev => {
            if (prev.currentTrack === scName) {
                // same track: toggle play/pause
                if (audio) {
                    if (audio.paused) audio.play().catch(() => {});
                    else audio.pause();
                }
                return prev;
            }
            // different track: keep other state fields
            return { ...prev, currentTrack: scName };
        });
    };

    const timeLeft = countDown(state.duration, state.currentTime);
    const progressWidth = state.duration ? (state.currentTime / state.duration) * 100 : 0;

    return (
        <section className="music music-home" id="music">
            {albumKeys.map(key => {
                const album = albums[key];
                const isOpen = openKey === key || key === "0";
                return (
                    <article key={key} id={`album_${key}`}>
                        <div className="tracklist" data-set={key}>
                            {album.title && (
                                <h2>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`tracks_${key}`}
                                        className="accordion-toggle"
                                        onClick={() => toggleAccordion(key)}
                                    >
                                        <span className="title-text">{album.title}</span>
                                        <span className="arrow" aria-hidden>
                                            {isOpen ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
                                                <path fill="#6c6eec" d="M0 10c0-5.523 4.477-10 10-10s10 4.477 10 10v0c0 5.523-4.477 10-10 10s-10-4.477-10-10v0zM10 18c4.418 0 8-3.582 8-8s-3.582-8-8-8v0c-4.418 0-8 3.582-8 8s3.582 8 8 8v0zM10.7 7.46l3.55 3.54-1.41 1.41-2.84-2.81-2.83 2.8-1.41-1.4 4.24-4.24 0.7 0.7z"></path>
                                            </svg> :
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
                                                <path fill="#6c6eec"
                                                    d="M20 10c0 5.523-4.477 10-10 10s-10-4.477-10-10v0c0-5.523 4.477-10 10-10s10 4.477 10 10v0zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8v0c4.418 0 8-3.582 8-8s-3.582-8-8-8v0zM9.3 12.54l-3.55-3.54 1.41-1.41 2.84 2.81 2.83-2.82 1.41 1.42-4.24 4.24-0.7-0.7z"></path>
                                            </svg>}
                                        </span>
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
                                    {Object.keys(album.tracks).map(trackKey => {
                                        const track = album.tracks[trackKey];
                                        const scName = '/audio/' + track.local + '.mp3';
                                        const playTime = Math.floor(track.playtime / 60) + ':' + ('0' + Math.floor(track.playtime % 60)).slice(-2);
                                        const showingCountdown = state.currentTrack === scName && state.currentTime != null;
                                        return (
                                            <li key={`${key}_${track.local}`}>
                                                <span className="a">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleTrackClick(scName)}
                                                        data-permalink={track.title}
                                                        className="track-button"
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

            {state.currentTrack && (
                <div id="progress" style={{ width: `${progressWidth}vw` }} />
            )}

            <audio ref={player} />
        </section>
    );
};

export default Music;
