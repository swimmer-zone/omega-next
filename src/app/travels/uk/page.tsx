import { Metadata } from 'next';
import Link from "next/link";
import { Footer, Menu, Carousel, Hexagons } from '../../../components';
import '../../_scss/_page.scss';
import '../../_scss/travels.scss';

export const metadata: Metadata = {
    title: "Ω - Travel to United Kingdom & Ireland",
    description: ""
};

const UK = () => {
    return (<main>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>United Kingdom & Ireland</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><Link href="#introduction">Introduction</Link></li>
                <li><Link href="#edinburgh">Edinburgh</Link></li>
                <li><Link href="#dublin">Dublin</Link></li>
                <li><Link href="#belfast">Belfast</Link></li>
                <li><Link href="#liverpool">Liverpool</Link></li>
                <li><Link href="#manchester">Manchester</Link></li>
                <li><Link href="#chester">Chester</Link></li>
                <li><Link href="#llandudno">LLandudno</Link></li>
                <li><Link href="#london">London</Link></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p key="intro">
                I went to the UK several times, in most of the cities I've been for quite a short while.
                Nonetheless it always was a nice experience and a common ground between all the trips has
                been paying a visit to a nice pub to at least drink a Guinness and one pint of beer that
                I've never tried before. Another common ground is always try a couple new whiskies and
                update my <a href="https://swimmer.zone/whisky">database with my tastings</a>.
            </p>
            <p><img src="/images/travels/uk/map.svg" alt="Regions" className="noshade"/></p>
            <h2 id="edinburgh">Edinburgh</h2>
            <p key="edinburgh">
                The first exposure that I had with whiskies was in 2022 in the Whisky Museum in Edinburgh.
                Of course I drank some before, but here I learned a lot of the history in Whisky making,
                which flavours there are and which techniques are used to create those flavours. Most of the
                whiskies I had so far were blends, but here I tried a single malt from every region in
                Scotland and learned that every region has its own characteristics. Other experiences we've
                had in Edinburgh were cemeteries, the park between old town and new town with a very nice
                view over the medieval structures and castles on top of the mountain. Partly climbed
                Albert's seat and tried to visit Cramond island, but it is only accessible during low tide.
            </p>
            <Carousel directory="travels/uk/00_edinburgh" num="24"/>
            <h2 id="belfast">Belfast</h2>
            <p key="belfast">
                In 2022 I've also been in Belfast, because that's where our plane took off when we went to
                Denmark. It flew to Oslo, so Belfast and Oslo were kind of a bonus. In this short stay I
                tried to go to the Titanic distillery, but bad luck. It was closed for reconstruction. I
                learned for the first time that the Titanic was built here and it would have been nice to
                visit the Titanic museum, but also that was closed for reconstruction. I did visit the
                Ulster museum, which was nice to learn about history and the wildlife in Belfast. Also I
                learned a lot about the separation between the republicans and the loyals on a guided tour
                with 2 ex-prisoners from either side. The first one dropped us off at the wall and left, a
                couple of minutes later the other one arrived to pick us up for the second half of the tour.
                The wall still closes off the two city halves after 9pm every evening, because the violence
                is still very present. Another nice experience, which is a British phenomenon, was to visit
                the comedy club.
            </p>
            <h2 id="dublin">Dublin</h2>
            <p key="dublin">
                The second actual exposure I had with whiskies was 2023 in Dublin, where I learned a lot
                about Irish whiskeys in the Irish Whisky Museum. Also visited a distillery for the first
                time, which was Teeling. Unfortunately the distillery itself was closed for maintenance, but
                I did learn how to make a proper Irish coffee. Other experiences that I had were the park
                and a very nice old school Irish pub with actual Irish folk music. I walked past the Temple
                Bar, but didn't actually visit it. If I ever go to Dublin again I will probably visit the
                Guinness brewery. I went to Dublin because our plane to Rovaniemi, Finland took off from
                there, so again this was quite a short stay.
            </p>
            <h2 id="liverpool">Liverpool</h2>
            <p key="liverpool">
                In 2023 I spent a week in Liverpool, which was a nice city where I leared a couple of things
                about the Beatles, about the history of Liverpool and the scouse. In 2024 I went for a
                revisit when I studied for my thesis in the university library, which was quite nice. Also
                went to a comedy club, which was... interesting. In a small and cosy basement pub we were
                lucky to have a private whisky tasting experience.
            </p>
            <h2 id="manchester">Manchester</h2>
            <p key="manchester">
                With Liverpool as the base, I spent a day in Manchester, where I visited the historical
                museum which was like a cathedral, and the museum of industry where steam engines and
                weaving machines were exposed. Also the chair and other relics of Stephen Hawking were
                exposed there. A third museum I've visited was the people museum, where several things were
                exposed that are related to people. Like fashion throughout the last couple centuries,
                designs of houses and interiors, linguistics and more. I liked the other museums more, but
                a great thing about the UK is that museums are usually free. Apart from that I just did some
                strolling through town, unfortunately it was quite drousy.
            </p>
            <h2 id="chester">Chester</h2>
            <p key="chester">
                Also we went to visit Chester for one day, which was a nice old British town, where we went
                to see the cathedral and planned to see some Lego structures. Unfortunately these were quite
                disappointing, because it had the size of something that could have fit in my cabinet.
            </p>
            <h2 id="llandudno">LLandudno</h2>
            <p key="llandudno">
                Another experience that we had this week was our visit of the Penderyn distillery where I
                finally got my first distillery tour. Also we did a tasting masterclass. We had to smell
                several little containers with a scent, this was quite hard because we had to guess which
                scent it contained. I didn't even get half of them right. A master blender has to guess them
                all right to be able to make good whisky blends. With this tour we tasted 8 different
                Penderyn whiskies.
                When we were in Wales, we also saw the smallest house in the UK.
            </p>
            <h2 id="london">London</h2>
            <p key="london">
                In september 2024 we went to The Whisky Event, which is an event of 3 days where hundreds of
                whisky manufacturers or bottlers expose a selection of their whiskies. I think more than
                2000 different whiskies could be tasted. In the last 3 years I've tasted a couple more than
                100 whiskies, within this event I doubled that. Of course I saw other landmarks in London,
                the event was in between Tower Bridge and London Bridge. I've seen Westminster Abbey and Big
                Ben, the London Eye, Buckingham Palace, Picadilly Circus and Trafalgar Square. We also
                wanted to visit Camden Town, but unfortunately we didn't have a lot of time between the
                event. I will probably visit London again to do that. Another thing that would be nice is to
                visit the oldest pub of the UK.
            </p>
        </div>
        <Footer/>
    </main>);
}

export default UK;
