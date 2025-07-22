'use client';
import React from 'react';
import Async from 'react-async';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import {Footer, Hexagons, Menu} from '../Components';
import './_scss/home.scss';
import './_scss/common.scss';
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
            <p key="intro">
                Throughout the years I've collected a lot of bookmarks, which are too much to all keep them
                stored in my browser and most of them are also for sharing, so there you go!
            </p>
            <Async promiseFn={loadIntro}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Fulfilled>
                    {intro => {
                        return (<ReactMarkdown>{intro}</ReactMarkdown>)
                    }}
                </Async.Fulfilled>
                <Async.Rejected>
                    {error => `Something went wrong: ${error.message}`}
                </Async.Rejected>
            </Async>

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
