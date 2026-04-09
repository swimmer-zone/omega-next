import { Metadata } from 'next';
import Link from "next/link";
import { Footer, Menu, Carousel, Hexagons } from '../../../components';
import '../../_scss/_page.scss';
import '../../_scss/travels.scss';

export const metadata: Metadata = {
    title: 'Ω - Travel to Thailand',
    description: '',
};

const Thailand = () => {
    return (<main>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Thailand</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><Link href="#introduction">Introduction</Link></li>
                <li><Link href="#phuket">Phuket</Link></li>
                <li><Link href="#chiang-mai">Chiang Mai</Link></li>
                <li><Link href="#pai">Pai</Link></li>
                <li><Link href="#bangkok">Bangkok</Link></li>
                <li><Link href="#pattaya">Pattaya</Link></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p>
                <img src="/images/travels/thailand/map.png" alt="Route"/>
            </p>
            <h2 id="phuket">Phuket</h2>
            <p>
                Back home again from our Thailand trip, so it's time to post some pictures. It was my first
                time outside of Europe and also the
                first time I took a plane, and what a difference it was. You notice the open way of living
                right away, often homes or restaurants
                didn't have doors or windows, cats and dogs and even chickens were everywhere on the
                streets. Powerlines everywhere, giant knots
                and even loose cables, so watch out :) In Phuket we went for a diving course, rented a
                scooter, got a Thai massage and of course
                went out on Bangla Road. We had to stay here for 7 days because of Covid restrictions, but
                it was a great resort with a pool and
                spa, so it was no punishment at all.
            </p>
            <Carousel directory="travels/thailand/00_phuket" num="29"/>
            <p>
                The first day of diving was in a pool in the south of Phuket, but on the second and third
                day we went to Koh Racha Yai, for 6
                seperate dives in Marina Bay, Camera Bay and Bay One. During this course we had to do some
                studying, but me and Robbert both got
                our PADI. We now are certified to dive up until 18 metres deep. During those dives we saw
                quite a few different creatures and
                coral, but we plan to do a lot more diving, most likely in Egypt, but I also plan to go back
                to Thailand and get the second PADI
                certificate up until 30 metres in Koh Tao.
            </p>
            <Carousel directory="travels/thailand/01_koh-racha-yai" num="20"/>
            <h2 id="chiang-mai">Chiang Mai</h2>
            <p>
                From Phuket we took the plane to Chiang Mai, we went to a hostel which Robbert had visited
                before on his previous trip, but this
                time we were the only guests, so we went for a VIP room instead of a dorm. After walking
                around and getting some food (the food
                was always very good, I mostly liked the green curry soup), we noticed pretty soon that
                Chiang Mai was pretty dead. After 9pm
                the sale of alcohol was prohibited and most bars were already closed, even in the main area
                no single soul was to be found.
                Thankfully we found some underground parties that were going on through dating apps, so
                after all we had a great time.
            </p>
            <p>
                The preparations for the lantern festival (Loy Krathong) were in full swing, everywhere
                paper lanterns were hanging and monks
                were busy decorating the temples. Unfortunately we had to miss this festival. In Chaing Mai
                lots of lanterns would have been
                released in the air and in Bangkok little decorated boats with candles were released in the
                Chao Phraya river.
            </p>
            <Carousel directory="travels/thailand/02_chiang-mai" num="9"/>
            <h2 id="pai">Pai</h2>
            <p>
                From Chiang Mai we took a bus to Pai. It took about 3 hours, at first I wanted to rent a
                scooter to go this route, but in
                hindsight I'm glad I didn't do this. It was quite a long and curvy road with a lot of height
                differences, but it was a
                beautiful route which I also enjoyed looking through a window. Though Chiang Mai was pretty
                dead, it is also a city. Pai
                is a little village and considering that most tourists that choose to go to Chiang Mai also
                go to Pai, Pai was quite busy.
                We rented a scooter to see some of the surroundings and we went to a lookout and we also
                found a Chinese settlement, a tiny
                village with only a couple of houses spread around the scene. When we got back, the main
                street of Pai which was pretty quiet
                during the day, was filled with people during the evening and there was a market going on.
                When the bars closed at around
                11pm, a couple of kilometers uphill, in the middle of nowhere, a party was going on in a
                hippy/jungle bar. It was a great
                way to celebrate my birthday, it was quite a surprise. There were about 6 other people also
                celebrating their birthdays.
                The next day we tried to find hot springs, but unfortunately those were dried out. We heard
                that there were several puddles
                going from the hottest above (where you could cook an egg) to going colder downwards. Down
                this road we ran into some
                elephants, often you hear stories about the treatment of the elephants, but we found out
                that these were taken to the river
                every day, where they can play in the mud. In the afternoon we took the bus back to Chiang
                Mai, where we spent another night
                and from where we took the night train to Bangkok the day after.
            </p>
            <Carousel directory="travels/thailand/03_pai" num="12"/>
            <h2 id="bangkok">Bangkok</h2>
            <p>In Bangkok we booked a luxury hotel in the middle of Khao San Road, which was quite expensive
                but was less luxury than the regular hotels we booked the nights before. It didn't even have
                coffee or a balcony. Khao San should have been the main area for backpackers though, so we
                sticked to it for the first 2 nights. Some bars were open and they all had some visitors,
                but they all closed at 10pm so we asked around for some after parties. Some people pointed
                us to a club, but when we got there, it seemed to be raided by the police, so back to the
                drawing board. We ran into a tuk tuk who wanted to drive us to a club and said we didn't
                have to pay if there wasn't a party going on, so we went with it. When we came there, the
                police was there as well, so the tuk tuk drove another circle and when we got there again,
                the police was gone but the party was gone as well. The second night in that hotel we
                decided to catch up some sleep and go to Pattaya the next day.</p>
            <p>When we got back from Pattaya we booked a hotel near Sukhumvit Road, which was the main area
                for the locals to go out. This time it actually was a luxury hotel with a room on the 17th
                floor and a pool and spa on the 9th floor. From there we discovered that area, went to the
                (not so) floating market, found some underground parties and before our flight home we went
                to a rooftop bar on top of a building with 50 floors.</p>
            <p>I forgot my sweater in a hotel in Pattaya, so in the last picture you see how I eventually
                arrived home</p>
            <Carousel directory="travels/thailand/04_bangkok" num="10"/>
            <h2>Pattaya</h2>
            <p>From Bangkok we went to Pattaya for one night, it was said to be beautiful and the night life
                would be better than Bangkok. It was beautiful, but everything on the main road was closed,
                so we got a couple of bottles of Sang Som (rum) and enjoyed the view on the beach. A bit
                later in the evening a taxi driver on a scooter tried to sell us marijuana. We weren't
                interested, but asked him if he knew if there was any party going on. He took us to a food
                court where everyone gathered that night to enjoy some social life. It was ok, but not
                enough to keep us from going to bed eventually to get up early and go back to Bangkok.</p>
            <Carousel directory="travels/thailand/05_pattaya" num="7"/>
        </div>
        <Footer/>
    </main>);
}

export default Thailand;
