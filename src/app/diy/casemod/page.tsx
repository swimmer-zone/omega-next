import { JSX } from 'react';
import { Metadata } from 'next';
import { Footer, Menu, Carousel, Hexagons } from '../../../components';
import '../../_scss/_page.scss';
import '../../_scss/diy.scss';

export const metadata: Metadata = {
    title: 'Ω - Case DIY Project',
    description: '',
};

export default function Casemod(): JSX.Element {
    return(<main>
        <Menu active="diy"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Casemod</h1>
            <p>
                For a long time I was lurking on the Casemodding forum of Tweakers.net and watched a lot of great cases
                coming by, that I finally decided to start one of my own. I have had a design before, but that one did
                not allow for any upgrades in the future. This design is a bit more straight forward and it fits my
                previous made table and audio cabinet. It will be 369mm high, 206mm wide and a depth of 600mm. The
                materials I am going to use are MDF, which I will paint black. The windows and parts of the front panel
                will be a black acrylic. You can not see through unless the lights in the case are on.
            </p>
            <p>
                Other materials are a 140mm fan, magnets for the side panels. An SD card reader with an eject mechanism
                which I pulled out of an MP3 player, and feet, that came off my amplifier, for my stereo installation to
                fit the audio cabinet.
            </p>
            <p>
                I made slides to fit 5 hard drives without any screws and sew some holes out of the acrylic panel for
                air intake. The side panels will be held by 4 magnets, which I will fitt seamlessly into the wood. I
                do not know yet if this experiment will succeed. I bought a modular PSU, so that I do not have any
                cables in the case that I do not use.
            </p>
            <p>
                At the DIY store they were not able to saw pieces smaller than 100mm, but then the front HDD slide would
                be in the way. It would be nice if all drives are visible through the window. Upside is that the drives
                are further away from the PSU and its magnetic field.
            </p>
            <p>
                The optical drive is a Plextor PX-716AL, with a slot-in mechanism, so I only have to make a hole big
                enough to fit a DVD.
            </p>
            <p>
                One week after the Sziget festival, I received a package. It contains an on-button, reset-button and the
                acrylic panels. I had to do some research to find out how the buttons have to be connected (5 pins: +
                and - for the LED, a Common, a Normally Open and a Normally Closed pin) and the pin layout of the header
                on the main board, but in the end this all was no problem. I had to remove the molex connector of the
                fan controller and solder the connection to the PSU directly on it, here it is also nice to have a
                modular PSU. I had some trouble with the GPU though, I did not get any signal on my monitor, but the GPU
                is a new one and I did not get any beeps from the main board. I tried my old GPU, but no signal either.
                I was afraid the main board was broken, that has happened before, but after some searching it became
                clear that it all was because of a loose memory strip.
            </p>
            <Carousel directory="diy/casemod" num={4}/>

            <h2>Some other projects</h2>
            <Carousel directory="diy/other" num={10}/>
        </div>
        <Footer/>
    </main>);
}