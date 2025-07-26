import { useState, useEffect, useRef } from 'react';
import './_scss/music.scss';
import { albumsArchive } from '../json';

function countDown(duration, time) {
    if (!isNaN(time)) {
        var timeLeft = duration - time;
        return (
            Math.floor(timeLeft / 60) + ":" + ("0" + Math.floor(timeLeft % 60)).slice(-2)
        );
    }
}

const MusicArchive = () => {
    const player = useRef(null);
    const [ state, setState ] = useState({
        currentTrack: null,
        currentTime: null,
        duration: null
    });

    let timeLeft = countDown(state.duration, state.currentTime);

    useEffect(() => {
        if (state.currentTrack) {
            player.current.src = state.currentTrack;
            player.current.play();
        }
        player.current.addEventListener('timeupdate', e => {
            setState(prevState => ({
                currentTime: e.target.currentTime,
                duration: e.target.duration,
                currentTrack: prevState.currentTrack
            }));
        });
    }, [state.currentTrack]);
	
  	return (
		<section className="music" id="music">
            {Object.keys(albumsArchive).map(key => {
                let album = albumsArchive[key];
                let timer;

                return(
                    <article key={"album_" + key} id={"album_" + key}>
                        <div className="tracklist" data-set={key} key={"tl_" + key}>

                            {album.title && <h2 key={"h2_" + key}>
                                {album.title}
                            </h2>}

                            {album.intro && <p key={"p_" + key}>{album.intro}</p>}

                            <ul key={"ul_" + key}>
                                {Object.keys(album.tracks).map(trackKey => {
                                    let track = album.tracks[trackKey];
                                    let scName = '/audio/old/' + track.local + '.mp3';
                                    let playTime = Math.floor(track.playtime / 60) + ":" + ("0" + Math.floor(track.playtime % 60)).slice(-2);

                                    if (state.currentTime && state.currentTrack === scName) {
                                        timer = <span key={key + '_timer_' + track.local} className="duration">{timeLeft}</span>
                                    }
                                    else {
                                        timer = <span
                                                key={key + '_timer_' + track.local}
                                                data-seconds="{track.playtime}"
                                                className="duration">{playTime}</span>
                                    }

                                    return (<li key={key + '_li_' + track.local}>
                                        <span className="a" key={key + '_span_' + track.local}>
                                            <button key={key + '_btn_' + track.local}
                                                data-permalink={track.title}
                                                onClick={() => {
                                                    if (state.currentTrack === scName && !player.current.paused) {
                                                        player.current.pause();
                                                    } else if (state.currentTrack === scName && player.current.paused) {
                                                        player.current.play();
                                                    } else {
                                                        setState({currentTrack: scName});
                                                    }
                                                }}>
                                                {track.title}


                                                {track.remark && <small key={"s_" + key}>({track.remark})</small>}
                                            </button>
                                        </span>
                                        {timer}
                                    </li>);
                                })}
                            </ul>
                        </div>
                    </article>
                )
            })}
			{state.currentTrack && <div id="progress" style={{width: ((state.currentTime / state.duration) * 100) + 'vw'}}></div>}
			<audio ref={player} />
		</section>
  	);
};

export default MusicArchive;
