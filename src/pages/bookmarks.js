'use client';
import React from 'react';
import Async from 'react-async';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import {Footer, Hexagons, Menu} from '../Components';
import './_scss/_page.scss';
import { bookmarks } from '../json';

const Bookmarks = () => {
    const loadIntro = () =>
        fetch('../../README.md')
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.text());

    return (<main>
        <Head>
            <title>Ω - Bookmarks</title>
        </Head>
        <Menu active="bookmarks"/>
        <Hexagons />
        <div className="content-column">
            <h1>Bookmarks</h1>
            <p>
                Throughout the years I've collected a lot of bookmarks, which are too much to all keep them
                stored in my browser and most of them are also for sharing, so there you go!
            </p>
            <p>
                I'm a minimalist; throughout the years everything has shrunk, including my website. I'm
                hosting my tracks myself again, after some issues with the SoundCloud API. You can still find my music 
                there though. The other half are blog posts, my portfolio and a couple of my favorite resources. Please 
                use the social media buttons to contact me about my music, blogs or any web-related topic. Of course 
                you could also e-mail me on <a href="mailto:info@swimmer.zone">info@swimmer.zone</a>.
            </p>
            <p>
                I've made a lot of websites throughout the years, a couple of which are still live 
                today: <a href="https://blackhole.voyage/">Black Hole</a> being a music project that I've 
                had with a couple of friends. A band website of a couple of friends, 
                called <a  href="https://index.swimmer.zone/">Index</a>. And a
                website that I made for a 
                friend: <a href="https://weerbaar.swimmer.zone/">Weerbaar Worden</a>.
            </p>
            <p>Some resources that I use on a daily basis: </p>
            <ul>
                <li><a href="https://tympanus.net/codrops/">Codrops</a></li>
                <li><a href="https://css-tricks.com/">CSS Tricks</a></li>
                <li><a href="https://caniuse.com/">Can I Use</a></li>
                <li><a href="https://www.smashingmagazine.com/">Smashing Magazine</a></li>
                <li><a href="https://blog.iusmentis.com/">Arnoud Engelfriet</a></li>
                <li><a href="https://tweakers.net/">Tweakers</a></li>
                <li><a href="https://gathering.tweakers.net/">Gathering of Tweakers</a></li>
                <li><a href="https://tweakblogs.net/">Tweakblogs</a></li>
                <li><a href="https://xkcd.com/">xkcd</a></li>
                <li><a href="https://what-if.xkcd.com/">What If?</a></li>
                <li><a href="https://neal.fun/">Neal.fun</a></li>
                <li><a href="https://speld.nl/">De Speld</a></li>
                <li><a href="https://www.yankodesign.com/">Yanko Design</a></li>
                <li><a href="https://freesound.org">Freesound</a></li>
                <li><a href="https://www.looperman.com/">Looperman</a></li>
                <li><a href="https://nextgtrgod.github.io/webaudio-synth/">Web Synth</a></li>
                <li><a href="http://psytranceguide.com/">Psytrance Guide</a></li>
                <li><a href="https://codepen.io/jcoulterdesign/full/ZxXbeP/">Solar System</a></li>
                <li><a href="https://www.goabase.net/">Goa Base</a></li>
                <li><a href="http://everynoise.com/">Every Noise</a></li>
                <li><a href="https://ektoplazm.com/section/free-music">Ektoplazm</a></li>
                <li><a href="https://www.w3schools.com/colors/colors_converter.asp">Color Converter</a></li>
            </ul>

            {Object.keys(bookmarks).map(key => {
                let bookmark_list = bookmarks[key];
                return (<>
                    <h2>{bookmark_list.title}</h2>
                    <ul>
                        {Object.keys(bookmark_list.links).map(bookmarkKey => {
                            let bookmark = bookmark_list.links[bookmarkKey];
                            return (<li><a href={bookmark.url}>{bookmark.title}</a></li>)
                        })}
                    </ul>
                </>)
            })}
        </div>
        <Footer/>
    </main>);
}

export default Bookmarks;
