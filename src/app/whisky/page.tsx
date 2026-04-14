import React, { JSX } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Footer, Hexagons, Menu, Rating } from '../../components';
import '../_scss/_page.scss';
import '../_scss/whisky.scss';
import { whiskyTasting } from '../../json';

export const metadata: Metadata = {
    title: 'Ω - Whisky',
    description: 'My whisky tastings.',
};

export default function Whisky(): JSX.Element {
    return (<main>
        <Menu active="whisky"/>
        <Hexagons />

        <div className="content-column">
            <h1>Whisky</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#whiskys">Whisky&apos;s</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p key="intro">
                My love for whisky began quite some time ago when I went to the liquor store and let them advise me a
                whisky that was not too peaty and I came home with the Tomatin Legacy, which was more of the spicy and
                fruity kind (vanilla and citrus). It really took off when I went
                to <Link href="/travels/uk#edinburgh">Edinburgh</Link> and visited the whisky museum. From that moment on I
                have tried {whiskyTasting.length} whisky&apos;s, starting with Scotch, but after visiting the Teeling
                distillery and the whiskey museum in <Link href="/travels/uk#dublin">Dublin</Link> my interest in Irish
                whiskey grew as well.
            </p>
            <p>A couple of resources to explore whisky</p>
            <ul>
                <li>
                    <a href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-one-a-beginners-guide/">
                        Whisky 101 - A beginner&apos;s guide
                    </a>
                </li>
                <li>
                    <a href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-two-whiskey-around-the-world/">
                        Whisky 101 - Whisk(e)y around the world
                    </a>
                </li>
            </ul>

            <h2 id="whiskys">Whisky&apos;s</h2>

            {whiskyTasting.map(tasting => {
                return (<React.Fragment key={tasting.id + '_fragment'}>
                    <div className="whisky-wrapper" key={tasting.id + '_wrapper'}>
                        <div className="whisky-header" key={tasting.id + '_header'}>
                            <h2 key={tasting.id + '_title'}>{tasting.brand}</h2>
                            <h3 key={tasting.id + '_name'}>{tasting.name}</h3>
                        </div>
                        <Rating value={tasting.rating}/>

                        <div className="specs">
                            Origin: {tasting.country} {tasting.region && <>&gt; {tasting.region}</>}<br/>
                            Type: <strong>{tasting.type}</strong><br/>
                            Cask Type: <strong>{tasting.cask_type}</strong><br/>
                            <strong>{tasting.strength}% abv</strong><br/>

                            Tasted
                            @ <strong>{tasting.location}</strong> (<strong>{tasting.date_of_tasting}</strong>)<br/>
                            Flavour: <strong>{tasting.flavour}</strong> with <strong>{tasting.finish}</strong> finish<br/>
                            {tasting.notes && <>Other notes: <strong>{tasting.notes}</strong><br/></>}<br/>
                        </div>
                        {tasting.region && <div className="whisky-map">
                            <Image src={"/vector/whisky/" + tasting.region + ".svg"} alt="" height={200} width={200}/>
                        </div>}
                    </div>
                </React.Fragment>);
            })}
        </div>
        <Footer/>
    </main>);
}