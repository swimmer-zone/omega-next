'use client'
import React from "react";
import Head from "next/head";
// import { Footer, Hexagons, Menu, Music } from '../components';
import { Footer, Hexagons, Menu } from '../components';
import './_scss/_page.scss';

const Home = () => {
    return (<main className="home">
        <Head>
          <title>Ω</title>
        </Head>
        <Menu active="home"/>
        <Hexagons />
        <div className="content-column">
            <h1>Hey all</h1>
            <p>
                Welcome to my website, I'm Omega. Listen to my music below, I tried my best to sort them by genre,
                starting off with my personal top 5, my latest creation and a live set. Most of the tracks are created
                with Ableton. I'm sure there is something that you will like!
            </p>
            <p>
                Also make sure to <span className="mobile-hidden">try out the yellow hexagon menu on the left to</span>
                visit my blogs about travelling or DIY projects.
            </p>
            {/*<Music/>*/}
        </div>
        <Footer/>
    </main>);
}

Home.displayName = "Home";

export default Home;