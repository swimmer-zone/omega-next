'use client';
import Head from 'next/head';
import {Footer, Menu, Carousel, Hexagons} from '../../Components';
import '../_scss/home.scss';
import '../_scss/travels.scss';

const CapeVerde = () => {
    return (<main>
        <Head>
            <title>Ω - Travels to Cape Verde</title>
        </Head>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Cape Verde</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#lisbon">Lisbon</a></li>
                <li><a href="#praia">Praia</a></li>
                <li><a href="#cidade-velha">Cidade Velha</a></li>
                <li><a href="#tarrafal">Tarrafal</a></li>
                <li><a href="#assomada">Assomada</a></li>
                <li><a href="#lisbon">Lisbon</a></li>
                <li><a href="#sintra">Sintra</a></li>
                <li><a href="#cascais">Cascais</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p>
                We went to Cape Verde, the original plan was to go to China, we had a ticket to Beijing, but
                unfortunately (or fortunately) that flight got canceled. We both wanted to see another
                continent and Cape Verde was an option. However, they don't consider themselves to be
                Africans, so that is to be continued...
            </p>
            <h2 id="lisbon">Lisbon</h2>
            <p>
                We arrived in Praia at 2am, which makes it 1,5 nights without sleep, because I had to go to
                Lisbon first to get to Praia. The plane to Lisbon left around 7am, so I had to cycle to the
                airport during night. I arrived pretty early in Lisbon and Thais told me to explore, so I
                did. After a terrible breakfast (I just walked away, paying only partly. I ordered a
                croissant and a croquette, the croquette was cold and the croissant tasted like it sat there
                for days) I went to the "elevador" to get a nice view of the river mounding into the ocean.
            </p>
            <Carousel directory="cape-verde/05_lisbon" num="35"/>
            <h2 id="praia">Praia</h2>
            <p>
                Because of the two previous nights we were destroyed so we didn't do a lot on the first day,
                on the second day we booked a free tour through the city centre and he told us several
                things, like the Cape Verdians don't see themselves as Africans, that Cape Verde has a lot
                in common with Brazil, because back then the islands were used as an in between stop for
                Portugal to colonize Brazil and to ship slaves. So it shares a lot of the foods and also
                because of the similar climate, they tend to grow the same fruits and vegetables.
            </p>
            <Carousel directory="cape-verde/00_praia" num="6"/>
            <h2 id="cidade-velha">Cidade Velha</h2>
            <p>
                Our guide strongly recommended not to get off the beaten path, which meant to keep on the
                main roads. Not the worst thing, because the road we mainly used was right along the beach.
                Most of Praia is considered a slum and getting robbed was quite a risk. So it was very nice
                to go to Cidade Velha, which is a tiny village a couple of kilometres north west of Praia.
                The people there were quite friendly and of course there was the beach, but also a church,
                a convent and a fort. Cidade Velha is Portuguese for 'old city' and it was the previous
                capital of Cape Verde.
            </p>
            <Carousel directory="cape-verde/01_cidade_velha" num="26"/>
            <h2 id="tarrafal">Tarrafal</h2>
            <p>
                We decided to go to Tarrafal for new year's eve. We heard it had white beaches with blue
                water, unlike the beaches with the black sand in Praia and Cidade Velha. We booked a hotel
                for two nights while we left our stuff at the guesthouse in Praia. We went there with a
                minivan, just like we did for Cidade Velha. There are several minivans lined up at the
                pickup point and whenever it filled up, it left. They tried to fit as much people as
                possible to get the most out of it, so it was quite crammed. All in all it took about 2
                hours to get to Tarrafal. It turned out to be a good choice, because they organised a new
                year's party at the hotel we booked. It included an all you can eat buffet with several
                local dishes and after that there was a party at the rooftop with unlimited drinks for a
                fixed price. It was a bit of an old people's party, but it was fun nevertheless.
            </p>
            <Carousel directory="cape-verde/02_tarrafal" num="37"/>
            <h2 id="assomada">Assomada</h2>
            <p>
                After Tarrafal we went back to Praia and we had four days left, so we decided to visit
                another town, which was Assomada where we drove past on the way to Tarrafal. They told us
                it was a historical town with its own market. So we left in the morning at 9am and it took
                us to
            </p>
            <Carousel directory="cape-verde/03_assomada" num="2"/>
            <h2 id="praia2">Praia</h2>
            <Carousel directory="cape-verde/04_praia" num="52"/>
            <h2 id="tarrafal">Lisbon</h2>
            <Carousel directory="cape-verde/05_lisbon" num="35"/>
            <h2 id="tarrafal">Sintra</h2>
            <Carousel directory="cape-verde/06_sintra" num="56"/>
            <h2 id="tarrafal">Cascais</h2>
            <Carousel directory="cape-verde/07_cascais" num="47"/>
        </div>
        <Footer/>
    </main>);
}

export default CapeVerde;
