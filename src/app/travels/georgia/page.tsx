import React from 'react';
import { Metadata } from 'next';
import { Footer, Menu, Carousel, Hexagons } from '../../../components';
import '../../_scss/_page.scss';
import '../../_scss/travels.scss';

export const metadata: Metadata = {
    title: 'Travel to Georgia',
    description: '',
};

const Georgia = () => {
    return (<main>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Georgia</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#kutaisi">Kutaisi</a></li>
                <li><a href="#batumi">Batumi</a></li>
                <li><a href="#tbilisi">Tbilisi</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/images/travels/georgia/map.png" alt="Route"/></p>
            <h3>Departure from Charleroi</h3>
            <p>
                On December 19th we took the plane from Brussels to Kutaisi, a city in Georgia. I've never
                thought of
                going to Georgia before, but the flight was pretty cheap. The plan was to combine it with
                Armenia, but
                with the current situation that didn't seem feasible. I've heard many stories about Eastern
                Europe
                being beautiful and had already had a couple of experiences myself, so that promised to be a
                great
                holiday.
            </p>
            <h2 id="kutaisi">Kutaisi</h2>
            <p>
                So we started off in Kutaisi where we arrived at 3am, which was the second biggest city in
                Georgia
                before Batumi caught up. In Kutaisi we just spent one day and we booked one night in
                guesthouse Daisy's
                Home. Daisy was a very friendly lady, she absolutely wanted us to see every room for us to
                pick, to
                make it as comfortable as possible.
            </p>
            <Carousel directory="travels/georgia/00_kutaisi" num="4"/>
            <p>
                Because our return flight would depart from there so we would come back later. We
                had our first Georgian meal there, they sure like their bread and cheese. I had Khinkali,
                which is
                like dumplings, but in this case with cheese filling. They have their own cheese, called
                Sulguni. You
                can order a minimum of 5 Khinkali, there are other variants with mushroom, beef or potato
                fillings.
                They all contain a broth, you need to bite a hole and suck out the broth. Legend goes that
                the person
                that can eat the most Khinkali with spilling the least soup, must be the best kisser in
                town. Another
                dish that I had was again, cheese. This time mixed up with polenta to create some sort of
                pancake.
            </p>
            <p>
                Apart from some nice views, that was pretty much all we saw in Kutaisi.
            </p>
            <Carousel directory="travels/georgia/01_kutaisi" num="8"/>
            <h2 id="batumi">Batumi</h2>
            <p>
                The next day, on December 21st, we took a ride to Batumi, it's a coastal city with pebble
                beaches at
                the Black Sea. It is very touristy and it attracts a lot of Turks and Armenians, as it is
                close to
                the borders of those countries, that allowed it to outgrow Kutaisi and become the second
                largest city
                in Georgia. At first we went for some sightseeing along the beach promenade and downtown,
                where we saw
                the moving statue of Ali & Nino, a university building with a ferris wheel built into it
                what later on
                became a hotel, we've seen several churches, both orthodox and Catholic and a synagoge.
                Georgia is a
                mix between orthodox, Catholic, Jewish and Muslim people that live together peacefully.
            </p>
            <blockquote>
                Ali & Nino, The sculpture was created by famous Georgian artist and sculptor Tamar
                Kvesitadze. The
                monument has got the name of the novel "Ali and Nino" by famous Azerbaijan writer Kurban
                Said. The
                novel "Ali and Nino" tells about the tragic love story of Azerbaijan Muslim Ali Shirvashir
                and Georgian
                Christian Nino Kipiani. The events written in the book happened during the First World War
                in the
                Caucasus. The statue of Ali and Nino was created in 2010 and represents a symbol of love,
                despite
                nationality or belief.
            </blockquote>
            {/* <li>December 22th: Introduction of Batumi, sightseeing, Mary's Pub</li> */}
            <Carousel directory="travels/georgia/02_batumi" num="20"/>
            <p>
                The second day we went to Sarpi, even closer to the Turkish border, we went to see a
                waterfall, with a
                statue of apostle Andrew, the waterfall led to a tunnel that serves a purpose of being the
                path of
                enlightenment. Also we saw Gonio Fortress and Sarpi Rock.
            </p>
            <Carousel directory="travels/georgia/03_batumi" num="18"/>
            <p>
                Initially we booked 3 nights in Batumi, but because we didn't like Kutaisi that much, that
                would mean
                that we would have 15 days left to spend in Tbilisi. That's why we decided to book another 3
                nights
                in Batumi, it also seemed like a nice place to spend Christmas. There are both the Catholic
                and Orthodox
                religions in Georgia, but Christmas is celebrated on January 7th. They do celebrate New
                Years Eve
                at December 31th, but on January 14th they also celebrate Old New Year. One day of Christmas
                we decided
                to stay in and create our own meal based on Georgian ingredients. They pickle a lot of
                things and
                pomegranates are used in a variety of recipes. Of course there had to be cheese.
            </p>
            <Carousel directory="travels/georgia/04_batumi" num="5"/>
            <p>
                The second day of Christmas we wanted to go to the Botanical garden, we wanted to do that
                before, but
                there was a lot of rain. We spent an hour in the bus and two hours of walking, only to find
                out that
                the garden was closed. We were allowed to visit the beach, but there was trash literally
                everywhere.
            </p>
            <Carousel directory="travels/georgia/05_batumi" num="18"/>
            <p>
                After that we went to several pubs, they have a lot of artisan beers here, among which a
                tomato beer.
                My expectations were a bit too high, because to me it tasted like tomato juice with beer
                added. Same
                for all other types of fruity beer. So then we came to discover chacha, a byproduct of the
                way they
                make their wine in Georgia. I will elaborate on that in the Tbilisi chapter. There is plain
                chacha,
                chacha aged in oak and tarragon, peach and honey are also very popular. There are a lot of
                other
                flavours as well, like four chilies, chily-berry, garlic, ginger, orange-cloves, kiwi,
                anything you
                can think of. They put chacha with those ingredients in a big jar and let it age for a
                while. The
                ones that I found most interesting and also liked most were the chily one and the garlic
                one.
            </p>
            <Carousel directory="travels/georgia/06_batumi" num="16"/>
            <p>
                We stayed in Royal Orbi Hotel and for the second booking we needed to move from tower A to
                tower C. It
                was a very weird experience, every tower had it's own reception, but for our booking we
                needed to go
                to a reception on the floor itself, which was setup pretty sketchy in a hotel room. For the
                second
                booking there wasn't even a reception, we arrived on time for our appointment, but the owner
                wasn't
                there and he decided to call us after midnight, when we were going out downtown, to collect
                his money.
                When we arrived back in the hotel, he was waiting for us in the lobby to collect his cash.
                After
                payment, we went upstairs and our keycard appeared to be disabled. We could resolve the
                issue, but
                this was our first encounter with the weird Georgian customs. Both rooms looked the same
                (just
                mirrored), but one had a fridge and a hairdryer, the other had a washing machine and a
                microwave.
                Georgians seem very fond of toilet paper was only one role present, we had to go to the
                reception
                on each next day to pickup a new one and these weren't the last bookings where this was a
                thing.
            </p>
            <Carousel directory="travels/georgia/07_batumi" num="5"/>
            <h2 id="tbilisi">Tbilisi</h2>
            <p>
                On December 27th we took the train to Tbilisi, where we arrived in the weirdest hostel ever,
                called
                "Modely". The room was empty with only 2 camping beds with the mattresses covered in
                plastic, I
                think we should have been glad they were, to have some sense of hygiene. A weird contraption
                should
                have functioned as a shelving unit. If you put something on, it would collapse. The shower
                had only
                cold water, there was no toilet paper and the lobby was used for the owner to chill out with
                his
                friends.
            </p>
            <Carousel directory="travels/georgia/08_tbilisi" num="17"/>
            <p>
                This didn't feel right at all, so we decided to pay for the night and leave right away. We
                came across
                a guesthouse "Tents in Georgia", which was infinitely better. We slept in a tent inside the
                house,
                which was quite a nice concept. THe owner was very friendly and helpful and we ended up in a
                pubcrawl
                with them and other guests and people who live there.
            </p>
            <Carousel directory="travels/georgia/09_tbilisi" num="12"/>
            <p>
                {/* 28-12 & 29-12 */}
                The first full day we were in Tbilisi we booked a free tour through the city with David. He
                told us
                about Liberty Square, Europe Square, the Mother of Georgia statue on the top of the
                mountain. The
                Freedom Bridge, the Tamada statue and introduced us to the sulfur baths which are supposed
                to have
                healing capabilities. We gladly took those the next day. It is believed that it will bring
                intelligence
                if you rub the head of the Tamada statue, to bring prosperity if you rub his glass or to
                bring fertility
                if you rub his lap. If you sit on his lap you will be rewarded with all three.
            </p>
            <Carousel directory="travels/georgia/10_tbilisi" num="28"/>
            <p>
                We planned a day trip to Armenia, the original plan was to visit both countries and spend an
                equal
                amount of time in both Georgia and Armenia by flying from Tbilisi to Yerevan. But because
                there was
                some stuff going on between Azerbaijan and Armenia, we decided to stick to Georgia and do a
                day trip
                to some border villages in Armenia. This appeared to be a big adventure, because it's close
                to New
                Years Day and this was the time families get united.
            </p>
            <p>
                We visited three monasteries which all were located on top of mountains and offered great
                views. It was
                also near a copper factory which was still in use. We also went to a ghost town, the cable
                cars where
                still dangling in the air as it stopped mid-service. I believe that was because war was
                declared. Both
                Georgia and Armenia have been in wars a lot because of their strategical position, Silk Road
                goes
                right through them. Tbilisi is also very rough, because every time they built anything up
                again, some
                new war is declared.
            </p>
            <p>
                We also went to a family guest house, to have a typical Armenian lunch. The coffee is very
                similar to
                Turkish coffee and of course we had some booze, we could choose between wine and brandy.
                Back on the
                road we walked into a guy who had a market stand with souvenirs, but he also distilled his
                own chacha.
                Of course he didn't let us leave before we tasted some of his produce.
            </p>
            <p>
                The trip was a big adventure, on the border towards Armenia we were warned that it could
                take a while
                to get back to Georgia and she pointed to the line. On the way back the line seemed to be
                multiple
                kilometers long and if we had to wait it could have taken more than 10 hours to get back.
                Our tour
                guide Kat was great, because she was very knowledgeable and taught us a lot about the
                cultures and
                also was great with keeping the group together. She even managed to arrange alternative
                transport,
                a van that was waiting for us at the other side of the border. Without that we might even
                have needed
                to wait twice as long. I feel sorry for the driver, because he only got back home the next
                afternoon.
            </p>
            <Carousel directory="travels/georgia/11_tbilisi" num="52"/>
            <p>
                An off day to get some rest before celebrating new year's eve. We decided to sleep late and
                get some
                groceries to prepare dinner. If we woke up early we probably would have fainted half way
                through the
                celebrations. We had some pomegranate wine and some more exotic drinks that we got from our
                trip to
                Armenia. We watched fireworks at Freedom Square at midnight and after that we went for a pub
                crawl with
                the people from the hostel. We visited several pubs and afterwards I went to a funny place
                with some of
                the guys to play beer games. I really enjoyed although was really hung over afterwards.
            </p>
            <Carousel directory="travels/georgia/13_tbilisi" num="5"/>
            <p>
                Next day we took it at our own pace and decided to take the metro to the end station and
                slowly
                progressed towards the hostel, station by station. We saw a market which was very busy and
                of course
                a day is not complete without a Georgian meal. I tried all versions of the Khinkali:
                mushroom, cheese,
                minced meat, but I liked the mushroom one the most.
            </p>
            <Carousel directory="travels/georgia/12_tbilisi" num="14"/>
            <p>
                On January 2nd we did a wine tour to Telavi and Kakheti, where we also visited the Bodbe
                Monastery in
                Sighnaghi, which is also called the love city. We were welcomed at our first stop at 9:30am
                with a
                wine tasting, some chacha and we got to make some churchkhela.
            </p>
            <p>
                In Georgia they have their own way of wine making, which is way older than the French
                version. It dates
                to 6000 years BC and it is part of the Unesco world heritage. In France they only use the
                grape juice,
                but in Georgia they use the whole grape. They put it in a Kvevri clay jarunder ground where
                they let it
                sit to ferment. After a while they take the juice to another jar to ripen further, leaving
                the residu
                so that it can be used to distill chacha. This also leaves a residu, which is then boiled
                and used to
                create churchkhela. This is made by hanging nuts on a rope and dipping it in the cooking
                emulsion.
                Because it takes a very long time to go off, it was used to feed their armies. You can read
                a more
                detailed version of thie wine making process
                on <a href="https://en.wikipedia.org/wiki/Georgian_wine">Wikipedia</a>. I even started
                liking white
                wine again, the ones I liked most were the white Khikhvi and the red Saperavi. There are
                loads more
                to try though.
            </p>
            <Carousel directory="travels/georgia/14_tbilisi" num="52"/>
            <p>
                We wanted to see the Chronicles of Georgia, which were located on top of a hill, just
                outside of the
                city. This offered great views over the city and Tbilisi Sea and the Chronicles itself were
                huge. You
                can see on the photos where there are a few people as a reference. In the evening we went to
                Mtatsminda
                Park. This is an amusement park on top of a mountain right next to the city. We went up with
                a bus,
                only to discover that every single attraction was closed, except for bumper carts, where we
                were the
                only ones to enjoy. It did offer some nice views over Tbilisi by night, but apart from that
                it was
                quite a waste of time, shame that it wasn't mentioned anywhere.
            </p>
            <Carousel directory="travels/georgia/15_tbilisi" num="26"/>
            <p>
                We did another guided tour and went to the Highlights of Kaukasus Mountains, to the Jinvali
                water
                reservoir which had a castle on top. The story he told was very cool, it was about several
                towers
                which acted as beacons during war. If there was a war coming, a beacon was lit, sending the
                message
                to the next which was then lit and so on. It really gave a Lord of the Rings feel to it.
                Furthermore
                we went to Ananuri, Gudauri. We planned to go to Kazbegi but the road was closed because
                there might
                be avalanches. Georgia has a lot of micro climates, in Tbilisi it was around 15 degrees
                while it was
                snowing just several kilometres north. In Batumi we experienced tropical rain. Instead of
                Kazbegi
                we went to the old capital Mtskheta. Because of the very cold temperatures we experienced,
                it was
                very nice to enjoy another sulfur bath afterwards.
            </p>
            <Carousel directory="travels/georgia/16_tbilisi" num="30"/>
            <p>
                Today we went on another free city tour, did some more wine and chacha tasting which
                obviously
                couldn't be omitted. We were told some more about the wine traditions and the sulfur baths,
                it was
                a bit hard to follow for me because the tour was mainly in Spanish. Afterwards we went to a
                liquor
                store to get us some souvenirs and almost left those drunk, because we were somewhat forced
                to tasted
                several of them. All of the chacha flavours are home made, I took a kiwi one and an aged
                one. In the
                afternoon we went to the museum of illusions.
            </p>
            <Carousel directory="travels/georgia/17_tbilisi" num="16"/>
            <p>
                Last day, train back to Kutaisi, spent a night in Charleroi because of delays. Below are
                some random
                pictures. We arrived back home at January 7th.
            </p>
            <Carousel directory="travels/georgia/18_tbilisi" num="20"/>
        </div>
        <Footer/>
    </main>);
}

export default Georgia;
