'use client';
import Head from 'next/head';
import { Footer, Hexagons, Menu, Rating } from '../../Components';
import '../_scss/_page.scss';
import '../_scss/whisky.scss';
import  {
    whisky_cask_type,
    whisky_country,
    whisky_finish,
    whisky_flavour,
    whisky_region,
    whisky_tasting,
    whisky_type
} from '../../json';
import React from "react";

const Whisky = () => {
    return (<main>
        <Head>
            <title>Ω - Whisky</title>
        </Head>
        <Menu active="whisky"/>
        <Hexagons />
        <div className="content-column">
            <h1>Whisky</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#whiskys">Whisky's</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p key="intro">
                My love for whisky began quite some time ago when I went to the liquor store and let them
                advise me a whisky that was not too peaty and I came home with the Tomatin Legacy, which was
                more of the spicy and fruity kind (vanilla and citrus). It really took off when I went to
                <a href="/travels/uk#edinburgh">Edinburgh</a> and visited the whisky museum. From that
                moment on I've tried {whisky_tasting.length} whisky's, starting with Scotch, but after
                visiting the Teeling distillery and the whiskey museum in
                <a href="/travels/uk#dublin">Dublin</a> my interest in Irish whiskey grew as well.
            </p>
            <p>A couple of resources to explore whisky</p>
            <ul>
                <li><a
                    href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-one-a-beginners-guide/">Whisky
                    101 - A beginner's guide</a></li>
                <li><a
                    href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-two-whiskey-around-the-world/">Whisky
                    101 - Whisk(e)y around the world</a></li>
            </ul>

            <h2 id="whiskys">Whisky's</h2>

            {whisky_tasting.map(tasting => {
                return (<>
                    <div className="title">
                        <h2 key={tasting.id + '_title'}>{tasting.brand}</h2>
                        <h3 key={tasting.id + '_name'}>{tasting.name}</h3>
                        <Rating value={tasting.rating}/>
                    </div>

                    <div className="whisky-wrapper" key={tasting.id + '_wrapper'}>
                        <div className="whisky">
                            Origin: {tasting.country} {tasting.region && <>&gt; {tasting.region}</>}<br/>
                            Type: <strong>{tasting.type}</strong><br/>
                            Cask Type: <strong>{tasting.cask_type}</strong><br/>
                            <strong>{tasting.strength}% abv</strong><br/>

                            Tasted
                            @ <strong>{tasting.location}</strong> (<strong>{tasting.date_of_tasting}</strong>)<br/>
                            Flavour: <strong>{tasting.flavour}</strong> with <strong>{tasting.finish}</strong> finish<br/>
                            {tasting.notes && <>Other notes: <strong>{tasting.notes}</strong><br/></>}<br/>
                            <a href={tasting.url} className="buy">Buy</a>
                        </div>
                        {tasting.region && <div className="whisky-map">
                            <img src={"/images/whisky/" + tasting.region + ".svg"} alt="" height="200"
                                 className="map"/>
                        </div>}
                        {!tasting.region && <div className="whisky-map">
                            <img src={"/images/whisky/" + tasting.country + ".svg"} alt="" height="200"
                                 className="map"/>
                        </div>}
                    </div>
                </>);
            })}
        </div>
        <Footer/>
    </main>);
}

export default Whisky;
