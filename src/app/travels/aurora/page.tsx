import { Metadata } from 'next';
import Link from "next/link";
import { Footer, Menu, Carousel, Hexagons } from '../../../components';
import '../../_scss/_page.scss';
import '../../_scss/travels.scss';

export const metadata: Metadata = {
    title: 'Travel to find Aurora',
    description: '',
};

const Aurora = () => {
    return (<main>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Aurora</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><Link href="#introduction">Introduction</Link></li>
                <li><Link href="#dublin">Dublin</Link></li>
                <li><Link href="#rovaniemi">Rovaniemi</Link></li>
                <li><Link href="#belfast">Belfast</Link></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/images/travels/aurora/map.png" alt="Route"/></p>
            <p>
                We went to Rovaniemi in Finland to chase the aurora. Unfortunately we didn't manage to see
                it so I used an image downloaded from internet to function as the background. This story will
                be continued as we are planning to go on a cruise at some point in the future, which includes a money
                back guarantee if we don't manage to see it. Of course the background will then be replaced with the
                real thing.
            </p>
            <h2 id="dublin">Dublin</h2>
            <Carousel directory="travels/aurora/00_dublin" num={6}/>
            <h2 id="rovaniemi">Rovaniemi</h2>
            <Carousel directory="travels/aurora/01_rovaniemi" num={23}/>
            <h2 id="belfast">Belfast</h2>
            <Carousel directory="travels/aurora/02_belfast" num={23}/>
        </div>
        <Footer/>
    </main>);
}

export default Aurora;
