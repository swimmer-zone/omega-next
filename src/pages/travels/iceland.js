'use client';
import Head from 'next/head';
import {Footer, Menu, Carousel, Hexagons} from '../../Components';
import '../_scss/home.scss';
import '../_scss/travels.scss';

const Iceland = () => {
    return (<main>
        <Head>
            <title>Ω - Travels to Iceland</title>
        </Head>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Aurora</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#reykjavik">Reykjavik</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/images/iceland/map.png" alt="Route"/></p>
            <p>
                We went to Iceland, this time it's not a very long holiday and getting there takes a lot of
                time. The plane to Iceland left from London Stansted airport and I decided to take the Flix
                bus including a ferry across the canal, because booking a flight with the right timing was
                impossible. Turned out that the bus was not the most convenient option either, because
                delays are a common thing as well as missing the ferry because of it. Luckily all went well
                and with a short stop in London I managed to get to Reykjavik within 24 hours.
            </p>
            <Carousel directory="iceland/00_antwerp" num="99"/>
            <h2 id="reykjavik">Reykjavik</h2>
            <p>
                Finally in Reykjavik we found a nice hostel which was quite big. We had a lot of daylight,
                Iceland is not quite in the arctic circle, but still the sun almost didn't set, so that
                gave us a lot of time to do stuff during the day. Two must-do's were to swim in a lagoon and
                to climb a volcano, so we booked 2 guided tours. The first tour included a trip to a
                <a href="https://en.wikipedia.org/wiki/Caldera">caldera</a> which now is a lake. We went to
                Geysir, which is where the word geyser actually originates from. It erupted every couple of
                minutes to a height of around 50 metres. It was recommended by the locals to visit Secret
                Lagoon instead of Blue Lagoon, this was included in the trip so we went for a dip. The
                sulfuric water is proven to be very healthy, the temperature of the pool was between 30 and
                40 degrees, depending on where you were. It became hotter in the proximity of the geysers.
            </p>
            <Carousel directory="iceland/01_reykjavik" num="99"/>
            <p>
                On the second tour we went for a hike around the Eyjafjallajökull volcano and we could
                actually say "the floor is lava". It was very black and very visible that the rock had been
                liquid. I managed to bring home a sample of lava stone. The other thing we visited on this
                tour was the bridge between the Eurasian and American continental plates. Iceland has a lot
                of geothermal activity because these plates are drifting apart. This is why there is a
                volcanic eruption every once in a while, but it also serves the citizens, because they can
                use it to generate electricity and heat. Every house has a connection to the geothermal
                heating system of which you see a lot of pipes along the roads. This is why every citizen
                has to pay only 10 euro's a month for energy, which is more like a service fee, because the
                energy itself is free. Short story, loads of pictures.
            </p>
            <Carousel directory="iceland/02_reykjavik" num="60"/>
        </div>
        <Footer/>
    </main>);
}

export default Iceland;
