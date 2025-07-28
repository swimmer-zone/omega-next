'use client';
import Head from 'next/head';
import {Footer, Menu, Carousel, Hexagons} from '../../Components';
import '../_scss/_page.scss';
import '../_scss/travels.scss';

const Iceland = () => {
    return (<main style={{'backgroundImage': 'url(/images/travels/italy/panorama.jpeg)'}}>
        <Head>
            <title>Ω - Travel to Italy</title>
        </Head>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Italy</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#milan">Milan</a></li>
                <li><a href="#venice">Venice</a></li>
                <li><a href="#brindisi">Brindisi</a></li>
                <li><a href="#lecce">Lecce</a></li>
                <li><a href="#taranto">Taranto</a></li>
                <li><a href="#lamezia-terme">Lamezia Terme</a></li>
                <li><a href="#bologna">Bologna</a></li>
                <li><a href="#san-marino">San Marino</a></li>
                <li><a href="#rimini">Rimini</a></li>
                <li><a href="#bologna">Bologna</a></li>
                <li><a href="#parma">Parma</a></li>
                <li><a href="#modena">Modena</a></li>
                <li><a href="#oleggio">Oleggio</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/images/travels/italy/map.png" alt="Route"/></p>
            <p>
                We went to Italy.
            </p>
            <Carousel directory="italy/01_milan" num="18"/>
            <h2 id="milan">Milan</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/02_venice" num="2"/>
            <h2 id="venice">Venice</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/03_brindisi" num="15"/>
            <h2 id="brindisi">Brindisi</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/04_lecce" num="23"/>
            <h2 id="lecce">Lecce</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/05_taranto" num="1"/>
            <h2 id="taranto">Taranto</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/06_lamezia_terme" num="17"/>
            <h2 id="lamezia-terme">Lamezia Terme</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/07_bologna" num="24"/>
            <h2 id="bologna">Bologna</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/08_san_marino" num="99"/>
            <h2 id="san-marino">San Marino</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/09_rimini" num="4"/>
            <h2 id="rimini">Rimini</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/10_bologna" num="6"/>
            <h2 id="bologna">Bologna</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/11_parma" num="14"/>
            <h2 id="parma">Parma</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/12_modena" num="27"/>
            <h2 id="modena">Modena</h2>
            <p>
                ...
            </p>
            <Carousel directory="italy/13_oleggio" num="16"/>
            <h2 id="oleggio">Oleggio</h2>
            <p>
                ...
            </p>
        </div>
        <Footer/>
    </main>);
}

export default Iceland;

// 24-04 Flight: Amsterdam Schiphol - Milan Malpensa at 13:45 - 15:30 (easyJet)
// Spend the night in Milan Ostelzzz
// 25-04 Train: Milan - Venice 15:45 - 18:00
// Spend the night in Venice
// Storage: Bounce or LuggageHero
// 26-04 Flight: Venice - Brindisi at 06:10 - 07:35 (Ryanair)
// Spend the night in Brindisi
// 27-04 Brindisi - daytrip in Puglia
// Spend the night in Brindisi
// 28-04 Train/Bus: Brindisi - Lamezia at 20:18 - 04:00
// Spend the night in the train
// 29-04 Lamezia - daytrip in Calabria
// Spend the night in Lamezia
// 30-04 Flight: Lamezia - Bologna at 09:00 - 10:30 (Ryanair)
// Food Tour or Tour
// Spend the night in Bologna Farolfi
// 01-05 Bologna
// Daytrip to San Marino or Rimini
// Spend the night in Bologna Farolfi
// 02-05 Bologna - Modena - Parma
// Spend the night in Parma
// 04-05 Train: Parma - Milan Malpensa at 08:08 - 11:16
// Spend the night in Milan Malpensa
// 05-05 Flight: Milan Malpensa - Amsterdam Schiphol at 16:10 - 18:05
