'use client';
import { Footer, Hexagons, Menu, MusicArchive } from '../Components';
import './_scss/_page.scss';
import React from "react";
import Head from "next/head";

const Home = () => {
    return (<main className="home">
        <Head>
            <title>Ω - Music Archive</title>
        </Head>
        <Menu active="home"/>
        <Hexagons />
        <div className="content-column">
            <h1>Music Archive</h1>
            <MusicArchive/>
        </div>
        <Footer/>
    </main>);
}

export default Home;
