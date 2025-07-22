'use client';
import Head from 'next/head';
import { Footer, Hexagons, Menu, Carousel } from '../../Components';
import '../_scss/home.scss';
import '../_scss/travels.scss';

const Vietnam = () => {
    return (<main>
        <Head>
            <title>Ω - Travels to Vietnam</title>
        </Head>
        <Menu active="travels"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Vietnam</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#hanoi">Hanoi</a></li>
                <li><a href="#ho-chi-minh">Ho Chi Minh</a></li>
                <li><a href="#nha-trang">Nha Trang</a></li>
                <li><a href="#da-nang-and-hoi-an">Da Nang &amp; Hoi An</a></li>
                <li><a href="#hue">Hue</a></li>
                <li><a href="#dong-hoi">Dong Hoi</a></li>
                <li><a href="#phong-nha">Phong Nha</a></li>
                <li><a href="#ninh-binh">Ninh Binh</a></li>
                <li><a href="#ha-long-bay">Ha Long Bay</a></li>
                <li><a href="#back-in-hanoi">Back in Hanoi</a></li>
                <li><a href="#ha-giang">Ha Giang</a></li>
                <li><a href="#back-in-hanoi-again">Back in Hanoi again</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/images/vietnam/map.png" alt="Route"/></p>
            <p>
                At Saturday morning we arrived in Hanoi after making a quick stop in Taipei, I hoped to see
                the 101 tower but no such luck. I thought
                Thailand was a culture shock with the traffic, but Hanoi was utter chaos, cars and scooters
                everywhere. The sidewalk was a parking
                space for scooters and sometimes even cars, so pedestrians also use the road. When
                manouvring the sidewalks you could end up in the
                middle of a terrace or even a dishwashing tray, the people live on the streets in front of
                their home. There is a lot of
                <a href="https://tuoitrenews.vn/news/audio/20140414/vietnamese%E2%80%99s-bad-habits-honking-horns-in-saigon/25383.html#:~:text=To%20me%2C%20honking%20a%20horn,as%20you%20pass%20an%20acquaintance">honking</a>
                going on during the day, usually this is quite annoying but with the sharp corners in the
                mountains you're glad that you can count
                on people honking before they pass by.
            </p>
            <Carousel directory="vietnam/00_hanoi" num="12"/>
            <h2 id="hanoi">Hanoi</h2>
            <p>
                After one night in Hanoi we took the plane to Ho Chi Minh and then travel up north and visit
                Hanoi once more at the end. The first
                food experience was a nightmare, I ordered fried beef and vegetables and got cows
                intestines, I guess you could also see that as fried
                beef. It's pretty hard to find a good meal here, they eat absolutely anything. Nothing like
                Thailand, where anything you could order
                would taste good. Next stop is Nhà Tráng, a city at the beach, an 8 hour train ride which is
                an attraction in itself.
            </p>
            <Carousel directory="vietnam/01_ho-chi-minh" num="12"/>
            <h2 id="hoi-chi-minh">Ho Chi Minh</h2>
            <p>
                We stayed in Ho Chi Minh for 2 nights, got a hotel in District 1 which is more or less the
                old town. We didn't do too much there, walking
                around town for a bit.
            </p>
            <Carousel directory="vietnam/02_nha-trang" num="25"/>
            <h2 id="nha-trang">Nha Trang</h2>
            <p>
                After the second night in Ho Chi Minh we had to wake up early to take the train to Nhà Tráng
                at 6am. We enjoyed our first bowl of
                <a href="https://www.phopalace.menu/product-category/pho/">pho</a> there, we also walked
                around for a bit, got a speedboat ferry to
                the island at the island there was an amusement park and a swimming paradise. Wouldn't have
                been my first choice, but the sky wheel
                was very nice, it offered a nice view over the skyline of Nhà Tráng. The second day we
                rented a scooter for the first time, which was
                way too scary in Hanoi or Ho Chi Minh, we climbed a mountain with the scooter and climbed
                the other half to the lookout point, where
                we enjoyed the view of the other side of town.
            </p>
            <p>
                On the first day someone tried to sell us something on the streets, it was a tour of a
                couple of hours including a mountain and waterfalls,
                maybe some swimming, but also making our own rice paper and having a good meal with those.
                It's a custom to put dry rice paper on the tabel,
                so you could roll your own spring roll. When dipping in soy sauce or some other watery
                sauce, the rice paper became soft.
            </p>
            <p>
                They sell a lot on the streets, often sunglasses. I got some sandals on a market and got a
                Vietnamese cap for free. Another guy on the
                beach tried to sell us
                <a href="https://www.google.com/search?q=Vietnamese+painting&amp;prmd=isvn&amp;source=lnms&amp;tbm=isch&amp;sa=X&amp;ved=2ahUKEwix1Nr03I77AhWvplYBHQ6uALsQ_AUoAXoECAIQAQ&amp;biw=393&amp;bih=720&amp;dpr=2.75#imgrc=vhI7Z-amq2zJvM&amp;imgdii=ENUZC1fkigDVOM">silk
                    paintings</a>
                which were beautiful, but unfortunately a bit of a drag to haul around for 3 weeks.
            </p>
            <p>
                Unfortunately we didn't make it to the tour on the second day due to sickness and the plan
                was to leave to Da Nang on the third day, the
                evening after I went for a dive at the other side of that island.
            </p>
            <Carousel directory="vietnam/03_da-nang" num="27"/>
            <h2 id="da-nang-and-hoi-an">Da Nang &amp; Hoi An</h2>
            <p>
                Da Nang was similar to Nhà Tráng (although much less like a resort) so we combined it with a
                scooter trip to Hoi An, which is an old
                town. Everything was preserved because of Unesco world heritage. We took a boat tour there
                and it was very nice to see. I felt the
                Vietnam vibe here more than before, I think it would have been even more beautiful at night
                with the many lanterns hanging everywhere.
                The next day we went to <a
                href="https://en.m.wikipedia.org/wiki/Marble_Mountains_(Vietnam)">marble mountains</a>. The
                five mountains
                are named after the five elements: Kim (metal), Thuy (water), Moc (wood), Hoa (fire) and Tho
                (earth). From above they would resemble a
                hand. All of the mountains have cave entrances and numerous tunnels. Several Buddhist
                sanctuaries can be found there.
            </p>
            <Carousel directory="vietnam/04_hoi-an" num="5"/>
            <Carousel directory="vietnam/05_hue" num="16"/>
            <h2 id="hue">Hue</h2>
            <p>
                One thing we noticed throughout the journey is the outdoorsy lifestyle they have here, half
                of the living room is outside, they
                don't even bother putting in a front wall. Often the living room is used as a store, a
                restaurant, a massage salon, barbershop or
                even a garage for a scooter rental. Also a lot of people have a little shrine in the middle
                of their living room. Restaurants use
                the sidewalks to do the dishes in huge tubs. It needs some getting used to, but it just
                works here. Even in little alleys where a
                person could barely walk they have these stores. They manage to squeeze their scooters
                through. I don't think I will ever get used
                to the menu though.
            </p>
            <Carousel directory="vietnam/06_dong-hoi" num="4"/>
            <h2 id="dong-hoi">Dong Hoi</h2>
            <p>
                From Da Nang we took a sleeper train to Dong Hoi, it was during the day and took only 3
                hours, but a sleeper is so much more
                comfortable and it barely costs more.
            </p>
            <Carousel directory="vietnam/07_phong-nha" num="48"/>
            <h2 id="phong-nha">Phong Nha</h2>
            <p>
                We didn't really had anything planned for Dong Hoi, but we needed to go there to be able to
                go on to Phòng Nhà. Phòng meaning
                wind and Nhà meaning teeth, referring to stalactites and stalagmites. There are kilometers
                of cave to be found there, though the
                biggest one would cost about 3000 USD to explore. But there were a lot of alternatives. We
                chose to explore Paradise Cave and
                Phòng Nhà cave. First one was by foot and the second one by boat. The day before that we
                rented a scooter to explore around the
                village. We slept at a home stay and it was very nice, they arranged everything for us. The
                brother of the hostess brought us
                back to Dong Hoi, where we could take the sleeper train to Ninh Binh.
            </p>
            <Carousel directory="vietnam/08_ninh-binh" num="10"/>
            <h2 id="ninh-binh">Ninh Binh</h2>
            <p>
                The sleeper train arrived at 3am, so we spent the rest of the night in a hotel. Ninh Binh
                was recommended for the scenery, but it couldn't
                compete with Phòng Nhà. Something that is worth mentioning however, is that we rented a
                scooter to explore and we ordered a coffee half
                way. We were given a <a href="https://www.cremashop.eu/en/shop-by-brand/trung-nguyen">Vietnamese
                coffee</a> with a
                <a href="https://www.tokogembira.nl/nl/trung-nguyen-vietnamese-koffiefilter.html">tiny
                    filter</a>. She said she could have given us ready
                made coffee, but she gave us this so we could enjoy the scenery while waiting.
            </p>
            <p>
                At the end of our road trip it started raining, at a certain point we were soaking wet and
                it wouldn't stop raining, so at the end of the
                day we took the bus to Ha Long Bay.
            </p>
            <Carousel directory="vietnam/09_ha-long-bay" num="28"/>
            <h2 id="ha-long-bay">Ha Long Bay</h2>
            <p>
                In Ha Long Bay we booked a 5-star hotel which was on a hilltop, it had a lot of facilities
                and offered a nice view over the city and the
                bay. Also there was an all you can eat breakfast so we made good use of that. It was also
                the busiest hotel so far, which was quite nice.
                Most of the hotels we booked were empty, still suffering from the consequences of COVID-19.
            </p>
            <p>
                The second day we booked a cruise through the bay, which is more or less a must when you go
                to Ha Long. We were the only 2 on the boat, so
                it was more or less a private cruise. We walked through another cave and we also rented a
                canoe to be able to see yet another cave.
            </p>
            <Carousel directory="vietnam/10_hanoi" num="8"/>
            <h2 id="back-in-hanoi">Back in Hanoi</h2>
            <p>
                The first time we were in Hanoi we missed the
                <a href="https://www.tripadvisor.com/Attraction_Review-g293924-d15190048-Reviews-Train_Street-Hanoi.html">train
                    street</a>, although in
                hindsight we noticed that our hotel was just one street away. This time around we booked a
                hotel in the same area, we wanted to be in
                the old town again and old town Hanoi isn't too big. When we went to our room and sat down
                on the balcony, we noticed a train passing
                by, so we booked a hotel next to train street by accident.
            </p>
            <p>
                At first it was a happy accident, but every 30 minutes a train came passing by. Because
                people are living on train street and use the
                tracks as their terrace, the train always passes by with a lot of loud honking to notice the
                people that they have to move their stuff
                inside. This left us with not a lot of sleep.
            </p>
            <Carousel directory="vietnam/11_ha-giang" num="75"/>
            <h2 id="ha-giang">Ha Giang</h2>
            <p>
                We went to the far north of Vietnam to do the <a
                href="https://vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip">Ha Giang
                loop tour</a>, it is a route of around 450 kilometers in total. Usually people do that on a
                bike or they choose to be driven by a guide
                (an easy rider). We also chose to be driven, but in our case we chose a car. I don't really
                like to be on the back of a bike, I'd rather
                drive myself, but I'm not really comfortable driving a non-automatic bike. This choice was
                quite fortunate, because the second day it was
                really foggy and rainy. With a view of around 5 meters it's quite scary drive alongside
                cliffs. We were in a group with 3 others, who chose
                to go by bike.
            </p>
            <p>
                It was a really nice tour, in total it took 3 days, including meals and spending nights in
                home stays. In the home stays we met other
                people who also did the tour, we did a lot of karaoke, drank 'happy water' which is called
                rượu Vietnam, had great meals like we didn't
                have before and spent time between the locals. It was like being really submerged in the
                culture. I'm glad we started in the south and went
                up north, because everything became increasingly beautiful.
            </p>
            <Carousel directory="vietnam/12_hanoi" num="16"/>
            <h2 id="back-in-hanoi-again">Back in Hanoi again</h2>
            <p>
                We had to go back to Hanoi again, because our plane left from Hanoi airport. This time we
                decided to go to a hotel in a newer part of
                town, it was a 5-star hotel but it had absolutely no facilities and it was empty, I don't
                have a clue why this hotel ever got 5 stars.
                There wasn't anything going on in the neighbourhood either, so we decided to get up early
                and go back to the old town again to explore
                some more and to get some souvenirs on the market.
            </p>
        </div>
        <Footer/>
    </main>);
}

export default Vietnam;
