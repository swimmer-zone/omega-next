import { JSX } from 'react';
import { Metadata } from 'next';
import { Footer, Hexagons, Menu, Music } from '../components';
import './_scss/_page.scss';

export const metadata: Metadata = {
    title: 'Ω - Home',
    description: 'Ω - My music',
    keywords: 'omega,water,phlegmatic,music,techno,ambient,minimal,lounge,blog,weblog,template,html,css,menu,responsive,travel,travels,travelblog,tutorials,diy,yupsie',
    authors: [{ name: 'Omega' }],
};

export default function Home(): JSX.Element {
    return (<main className="home">
        <Menu active="home"/>
        <Hexagons />
        <div className="content-column">
            <p>
                Welcome to my website, I am Omega. Listen to my music below, I tried my best to sort them by genre,
                starting off with my personal top 5, my latest creation and a live set. Most of the tracks are created
                with Ableton. Sure there is something that you will like!
            </p>
            <p>
                Also make sure to <span className="mobile-hidden">try out the yellow hexagon menu on the left to </span>
                visit my blogs about travelling or DIY projects.
            </p>
            <Music/>
        </div>
        <Footer/>
    </main>);
}