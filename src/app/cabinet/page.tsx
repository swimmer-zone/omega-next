import { JSX } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Code, Footer, Hexagons, Menu } from '../../components';
import '../_scss/_page.scss';
import '../_scss/diy.scss';

export const metadata: Metadata = {
    title: 'Ω - Cabinet DIY Project',
    description: 'Arduino hexagon cabinet DIY project',
};

export default function Cabinet(): JSX.Element {
    return(<main>
        <Menu active="diy"/>
        <Hexagons/>
        <div className="content-column">
            <h1>Cabinet</h1>
            <p>Take a look at my other <Link href="/casemod">DIY projects</Link> as well.</p>
            <p><strong>This is a first concept of this post, updates are pending</strong></p>
            <p>
                I started off with this <a href="https://www.youtube.com/watch?v=EvRxQbhDxCo">basic tutorial from
                KamuiCosplay</a>.
            </p>
            <h2>Hexagons</h2>
            <p>
                This cabinet consists of 16 hexagons with sides of 320mm and a depth of 320mm, made of 18mm plywood.
            </p>
            <h2>Arduino</h2>
            <p>
                <Image src="/images/diy/cabinet/arduino.png" alt="Arduino board" width={800} height={600}/>
            </p>
            <h3>Getting started</h3>
            <ul>
                <li>Download the IDE from <a href="https://arduino.cc">the Arduino website</a> and install.</li>
                <li>
                    Go to <em>Sketch -&gt; Include Library -&gt; Manage Libraries</em> and search for
                    &#39;neopixel&#39;.
                </li>
                <li>Install <a href="https://github.com/adafruit/Adafruit_NeoPixel">Adafruit NeoPixel library</a>.</li>
                <li>Go to <em>Tools -&gt; Board</em> and select &#39;Arduino Uno&#39;.</li>
                <li>Go to <em>Tools -&gt; Programmer</em> and select &#39;Arduino as ISP&#39;.</li>
                <li>The port probably is already selected.</li>
            </ul>

            <p>I have Arduino 1.8.19 installed, above terms may vary depending on your version.</p>
            <p>
                My program is based on the strandtest included in this library: Open <em>File -&gt; Examples -&gt;
                Adafruit NeoPixel -&gt; strandtest</em> The original source is also included in this repository.
            </p>
            <p>Below are some comments that were included in that file:</p>
            <h3>Neopixel best practices</h3>
            <ul>
                <li>Add 1000 uF CAPACITOR between the + and - connections of the NeoPixel strip.</li>
                <li>Minimize wiring length between microcontroller board and first pixel.</li>
                <li>The DATA-IN of the NeoPixel strip should pass through a 300-500 Ω RESISTOR.</li>
                <li>
                    Avoid connecting NeoPixels on a live circuit. If you must, <strong>always</strong> connect
                    GROUND (-) first, then +, then data.
                    <Image src="/images/diy/cabinet/connect_strip.png" alt="Schema for connecting the strip"
                           width={800} height={600}/>
                </li>
            </ul>
            <p>
                A <a href="https://www.esdsite.nl/elektronica/kleurcode.html">Dutch manual</a> to calculate the
                resistance based on the color coding.
            </p>
            <p>
                For a polarized electrolytic capacitor as seen here, the negative (–) lead is usually indicated by a
                stripe and/or may be shorter than the + lead. Draw schemes like this with
                <a href="https://fritzing.org/download/">Fritzing</a>.
            </p>
            <p>
                Another useful source is the <a
                href="https://learn.adafruit.com/adafruit-neopixel-uberguide">Adafruit NeoPixel Überguide</a>.
            </p>
            <h3>How many NeoPixels are attached to the Arduino?</h3>
            <p>
                <code>LED_COUNT</code> is defined by 16 hexagons times 108 LEDs, considering 60 LEDs/meter, that would
                mean a total of <strong>1728</strong> LEDs.
            </p>
            <h3>Declare our NeoPixel strip object</h3>
            <ul>
                <li>Argument 1 = Number of pixels in NeoPixel strip</li>
                <li>Argument 2 = Arduino pin number (most are valid)</li>
                <li>
                    Argument 3 = Pixel type flags, add together as needed: <strong>NEO_KHZ800</strong> 800 KHz bitstream
                    (most NeoPixel products w/WS2812 LEDs)
                </li>
            </ul>
            <h3>Setup function runs once at startup</h3>
            <p>
                It is required to include <code>strip.begin();</code> in this setup function. This can be used to turn
                all LEDs of initially and set a brightness. Other functions related to the strip can be found in the <a
                    href="https://adafruit.github.io/Adafruit_NeoPixel/html/class_adafruit___neo_pixel.html">class
                    reference</a>.
            </p>
            <h3>Loop function runs repeatedly</h3>
            <p>
                In this function the animation functions can be called. The default ones included in the strandtest are
                <code>colorWipe()</code>, <code>theaterChase()</code>, <code>rainbow()</code> and
                <code>theaterChaseRainbow()</code>, you can find the documentation of these functions in the original
                strandtest.ino file. I added my own functions to it: <code>FX_hexCircle()</code>,
                <code>FXcolorWipeMulti()</code>
            </p>
            <h3>Remote</h3>
            <p>
                The light effects can be selected with a remote control, having a numpad and 4 arrows. However, I might
                be using the remote of my Dolby receiver, which has an unused numpad. Maybe I will be able to use the
                arrow buttons on that too. You may find some useful instructions in this
                <a href="https://www.youtube.com/watch?v=kZ1HZ6775Mg">Youtube video</a>.
            </p>
            <p>The plan is to program each of those numbers with its own effect. Example:</p>
            <ol>
                <li>Each hexagon is turning on one by one</li>
                <li>Each hexagon starts circling around</li>
                <li>Everything is quite dim, but with a motion sensor a single hexagon can light up if I come close</li>
                <li>Equalizer</li>
                <li>Circle around 6 hexagons</li>
                <li>Light up certain hexagons (use arrows to pick which)</li>
                <li>All off, except when approached</li>
                <li>Ableton with Max4Live control</li>
                <li>TBD</li>
                <li>...</li>
            </ol>
            <h3>Proximity sensors</h3>
            <p>
                Each hexagon contains a proximity sensor which can be used to light up a hexagon when something is
                grabbed from it. Because 16 of those sensors are needed, unfortunately an Arduino Uno is not
                sufficient, as it is impossible to connect that many things. That is why I included an Arduino Mega in
                the shopping list. This also gives me some extra memory capacity. The differences are visible in the
                table below:
            </p>
            <h3>The code I have so far</h3>
            <Code file={"cabinet.ino"} language="c-plus-plus" />

            <section className="hexagon-gallery">
                <Image src="/images/diy/cabinet/build/01.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/02.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/03.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/04.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/05.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/06.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/07.jpeg" alt="Build" width={216} height={238}/>
            </section>

            <table className="article">
                <thead>
                    <tr>
                        <th></th>
                        <th>Arduino Micro</th>
                        <th>Arduino Uno</th>
                        <th>Arduino Mega</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td className="right">€ 19,00</td>
                        <td className="right">€ 20,50</td>
                        <td className="right">€ 35,00</td>
                    </tr>
                    <tr>
                        <td>Dimension</td>
                        <td className="right">45 * 18 mm</td>
                        <td className="right">68.6 * 53.4 mm</td>
                        <td className="right">101.5 * 53.3 mm</td>
                    </tr>
                    <tr>
                        <td>Processor</td>
                        <td>ATMega328P</td>
                        <td>ATMega32U4</td>
                        <td>ATMega2560</td>
                    </tr>
                    <tr>
                        <td>Clock Speed</td>
                        <td className="right">16 MHz</td>
                        <td className="right">16 MHz</td>
                        <td className="right">16 MHz</td>
                    </tr>
                    <tr>
                        <td>Flash Memory</td>
                        <td className="right">32 kB</td>
                        <td className="right">32 kB</td>
                        <td className="right">256 kB</td>
                    </tr>
                    <tr>
                        <td>EEPROM</td>
                        <td className="right">1 kB</td>
                        <td className="right">1 kB</td>
                        <td className="right">4 kB</td>
                    </tr>
                    <tr>
                        <td>SRAM</td>
                        <td className="right">2.5 kB</td>
                        <td className="right">2 kB</td>
                        <td className="right">8 kB</td>
                    </tr>
                    <tr>
                        <td>Voltage Level</td>
                        <td className="right">5V</td>
                        <td className="right">5V</td>
                        <td className="right">5V</td>
                    </tr>
                    <tr>
                        <td>Digital I/O Pins</td>
                        <td className="right">20</td>
                        <td className="right">14</td>
                        <td className="right">54</td>
                    </tr>
                    <tr>
                        <td>Digital I/O with PWM Pins</td>
                        <td className="right">7</td>
                        <td className="right">6</td>
                        <td className="right">15</td>
                    </tr>
                    <tr>
                        <td>Analog Pins</td>
                        <td className="right">12</td>
                        <td className="right">6</td>
                        <td className="right">12</td>
                    </tr>
                    <tr>
                        <td>USB Connectivity</td>
                        <td>Micro USB</td>
                        <td>USB-A</td>
                        <td>USB-A</td>
                    </tr>
                    <tr>
                        <td>Shield Compatibility</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>

            <h3>Smartphone</h3>
            <p>
                Using <a href="https://remotexy.com">RemoteXY</a> you can create an app for your smartphone. However, I
                don't think I will be using this as it requires too much steps to open the app and control my lights.
                Watch this <a href="https://www.youtube.com/watch?v=2cjufbgOBYo">Youtube video</a> for further
                instructions on that. I put a WiFi receiver in the shopping list regardless.
            </p>
            <h3>Ableton</h3>
            <p>
                For Ableton Live there is a Max4Live plugin to control the Arduino, I am not sure how to set that up yet
                and some additional hardware might be needed. So this part will remain on the wish list until further
                notice.
            </p>

            <section className="hexagon-gallery">
                <Image src="/images/diy/cabinet/build/08.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/09.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/10.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/11.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/12.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/13.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/14.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/15.jpeg" alt="Build" width={216} height={238}/>
                <div></div>
                <Image src="/images/diy/cabinet/build/30.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/31.jpeg" alt="Build" width={216} height={238}/>
            </section>

            <h2>Shopping list</h2>
            <ul>
                <li>13x
                    <a href="https://www.hornbach.nl/shop/Massief-houten-verlijmd-timmerpaneel-grenen-2350-x-300-x-18-mm/8662246/artikel.html">
                        Solid wood glued panel pine 2350x300x18mm
                    </a> 21 320x320x18mm sections per slab € 24,75
                </li>
                <li>1x
                    <a href="https://www.hornbach.nl/shop/BISON-Houtlijm-750-gr/4138994/artikel.html">
                        Wood glue
                    </a> € 9,39
                </li>
                <li>1x
                    <a href="https://www.hornbach.nl/shop/GILDE-MEESTERS-Acryl-PU-lak-zijdeglans-blank-1-l/6240064/artikel.html">
                        Wood finish
                    </a> € 31,29
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/en/development-boards/microcontroller-boards/arduino-compatible/arduino-mega-2560-r3">
                        Arduino Mega 2560 R3
                    </a> € 35,00
                </li>
                <li>2x <a href="https://www.tinytronics.nl/shop/en/cables-and-connectors/cables-and-adapters/prototyping-wires/dupont-compatible-and-jumper/dupont-jumper-wire-male-female-20cm-10-wires">
                    DuPont Jumper wire Male-Female 20cm 10 wires</a> € 0,75
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/nl/componenten/condensatoren/1000uf-16v-elektrolytische-condensator">
                        1000uF 25V Elektrolytic Capacitor
                    </a> € 0,25
                </li>
                <li>6x
                    <a href="https://www.tinytronics.nl/shop/nl/verlichting/led-strips/led-strips/ws2812b-digitale-5050-rgb-led-strip-300-leds-5m">
                        WS2812B Digital 5050 RGB LED Strip - 300 LEDs 5m
                    </a> € 50,00
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/nl/gereedschap-en-montage/installatie-en-montagemateriaal/krimpkousen/krimpkous-2:1-%C3%B8-14mm-diameter-50cm">
                        Heat shrink tubing 2:1 - Ø 14mm diameter - 50cm
                    </a> € 1,15
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/nl/componenten/weerstanden/weerstanden/470%CF%89-weerstand">
                        470Ω resistor
                    </a> € 0,05
                </li>
                <li>2x
                    <a href="https://www.tinytronics.nl/shop/nl/power/voedingen/5v/mean-well-voeding-5v-26a-switching-power-supply-rs-150-5">
                        Mean Well Power Supply - 5V 26A - Switching Power Supply - RS-150-5
                    </a> € 30,00
                </li>
                <li>2x
                    <a href="https://www.tinytronics.nl/shop/nl/kabels-en-connectoren/kabels-en-adapters/netspanning/voedingskabels/standaard-230v-voedingskabel-1.8m-haakse-stekker">
                        Standard 230V Power supply cable - 1.8m - Angled plug
                    </a> € 4,00
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/nl/gereedschap-en-montage/installatie-en-montagemateriaal/krimpkousen/krimpkous-kit-zwart">
                        Heat shrink tubing Kit - Black
                    </a> € 4,00
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/nl/gereedschap-en-montage/solderen/soldeerbouten-en-stations/budget-soldeerstation-kit-zd-99-48w">
                        Budget Soldering Station Kit - ZD-99 - 48W
                    </a> € 25,00
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/nl/schakelaars/manuele-schakelaars/rotary-encoders/rotary-encoder-module">
                        Rotary Encoder Module
                    </a> € 1,50
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/nl/communicatie-en-signalen/draadloos/infrarood/ir-sensor-module-met-afstandsbediening-en-batterij-met-ir-led">
                        IR sensor module with remote and battery - With IR LED
                    </a> € 3,00
                </li>
                <li>16x
                    <a href="https://www.tinytronics.nl/shop/nl/sensoren/optisch/infrarood/object-detectie-sensor-module">
                        Object Detection Sensor Module
                    </a> € 2,00
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/en/tools-and-mounting/prototyping-supplies/breadboards/breadboard-170-points-black">
                        Breadboard 170 points - Black
                    </a> € 1,50
                </li>
                <li>20x
                    <a href="https://www.tinytronics.nl/shop/en/lighting/led-strips/accessories/jst-sm-3p-compatible-extension-cable-100cm">JST-SM
                        3p Compatible Extension Cable - 100cm
                    </a> € 2,50
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/en/communication-and-signals/wireless/wi-fi/modules/esp8266-wifi-module-esp-01-1mb">ESP8266
                        WiFi Module ESP-01 1MB
                    </a> € 5,00
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/en/displays/segments/segment-display-1-character-red">
                        Segment Display - 1 Character - Red
                    </a>
                </li>
                <li>1x
                    <a href="https://www.tinytronics.nl/shop/en/displays/lcd/lcd-display-16-2-characters-with-white-text-and-blue-backlight">
                        LCD Display 16 * 2 characters with white text and blue backlight
                    </a>
                </li>
                <li><a href="https://docs.arduino.cc/learn/electronics/lcd-displays">LCD Displays</a>
                </li>
                <li>
                    <a href="https://www.google.com/search?q=connect%20object%20sensor%20arduino#kpvalbx=_Mmb6YZ7dHMqwkwXBn7ngAg36">
                        Proximity sensor
                    </a>
                </li>
            </ul>
            <p><strong>Totals: € 891,38</strong></p>
            <h2>Other Arduino projects</h2>
            <p><a href="https://www.reddit.com/r/arduino/">Reddit: /r/arduino</a></p>
            <h2>TODO</h2>
            <ul>
                <li>Build the cabinet, cut up the LED strip in 16 pieces holding 108 LEDs each.</li>
                <li>Connect all to the Arduino and the power supply - determine how many power supplies
                    are needed.
                </li>
                <li>Include programming for the IR-sensor and the remote</li>
                <li>Include programming for the object detection</li>
                <li><a href="https://docs.arduino.cc/learn/electronics/lcd-displays">Tutorial for LCD usage</a></li>
            </ul>

            <section className="hexagon-gallery">
                <Image src="/images/diy/cabinet/build/16.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/17.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/18.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/19.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/20.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/21.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/22.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/23.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/24.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/25.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/26.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/27.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/28.jpeg" alt="Build" width={216} height={238}/>
                <Image src="/images/diy/cabinet/build/29.jpeg" alt="Build" width={216} height={238}/>
            </section>
        </div>
        <Footer/>
    </main>);
}