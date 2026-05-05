import { JSX } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Timeline from './timeline';
import { Footer, Portrait, Menu, Hexagons } from '../../components';
import '../_scss/_page.scss';
import '../_scss/resume.scss';

export const metadata: Metadata = {
    title: 'Ω - Resume',
    description: '',
};

export default function Resume(): JSX.Element {
    return (<main>
        <Menu active="resume"/>
        <Hexagons />
        <div className="content-column">
            <svg display="none">
                <symbol id="arrow">
                    <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="2"/>
                </symbol>
            </svg>
            <h1><span>Resume</span> <span>of</span> <span>Sander Hartman</span></h1>
            <Portrait/>
            <Timeline />

            <h2>About Me</h2>
            <p>
                About 20 years ago I wrote my first HTML and later on also CSS came by, these became HTML5 and CSS3.
                But I wanted more than just a static website and when PHP 4.0 was released, I enrolled into creating
                dynamic websites, some of which you can still find on my <Link href="/">homepage</Link>.
            </p>
            <p>
                I started programming procedurally and while PHP grew up, I got more into object oriented programming
                (OOP). As of version 7.0, my website was built onto a Model-View-Controller (MVC) architecture. After
                that, I moved on to using CodeIgniter as a framework and later on Laravel, connecting to the SoundCloud
                API to show off my music productions.
            </p>
            <p>
                Currently this is the 22nd version of my website, this includes major design overhauls, migrating
                to other frameworks or platforms, also migrating from shared hosting to a VPS. The previous version ran
                on React and currently it is running on Next.js using Typescript on serverless hosting at Vercel.
            </p>
            <h2>Ambitions</h2>
            <p>
                I would like to work on more React / NextJS projects, as well as Laravel projects. This can be in a
                standalone setup, but also a headless / composable setup with React based frontend. The backend could be
                Laravel or a web based database / CMS.
            </p>
            <h2>Hobbies</h2>
            <p>
                My hobbies include web development, both front- and backend because I really like to deliver a complete
                product. I like to get to know the latest technologies in development, including hardware, frameworks,
                the newest trends in PHP and CSS, Typography. Furthermore I like woodworking, creating music and I am
                volunteering as a swimming instructor, which I started right after I got my swimming certificates for a
                total of 18 years.
            </p>
            <h2>Portfolio</h2>
            <p>
                I have made a lot of websites during my life, a couple of which are still live today:
            </p>
            <ul>
                <li>
                    <a href="https://swimmer.ome.gs">Swimmer</a> my previous website where my current site is heavily
                    based on. Most of the sections have moved to my current website, but left a couple behind.
                </li>
                <li>
                    <a href="https://blackhole.ome.gs">Black Hole</a> being a music project that I have had with a
                    couple of friends.
                </li>
                <li>
                    <a href="https://index.ome.gs">Index</a> is band website of a couple of friends.
                </li>
                <li>
                    <a href="https://weerbaar.ome.gs">Weerbaar Worden</a> a website that I made for a friend, which was
                    meant to be child friendly.
                </li>
            </ul>
            <h2>Skills</h2>
            <div className="tags">
                <span className="tag"><img src="/images/logos/alpine-js.svg" title="AlpineJS"/></span>
                <span className="tag"><img src="/images/logos/apache.svg" title="Apache"/></span>
                <span className="tag"><img src="/images/logos/composer.svg" title="Composer"/></span>
                <span className="tag"><img src="/images/logos/css3.svg" title="CSS 3"/></span>
                <span className="tag"><img src="/images/logos/docker.svg" title="Docker, inlcuding Lando"/></span>
                <span className="tag"><img src="/images/logos/git.svg" title="Git, which also includes GitHub, GitLab, Bitbucket and CI/CD"/></span>
                <span className="tag"><img src="/images/logos/jetbrains.svg" title="JetBrains PHPStorm, WebStorm etc."/></span>
                <span className="tag"><img src="/images/logos/jira.svg" title="Jira and other Atlassian tools, like Confluence"/></span>
                <span className="tag"><img src="/images/logos/jquery.svg" title="jQuery"/></span>
                <span className="tag"><img src="/images/logos/laravel.svg" title="Laravel"/></span>
                <span className="tag"><img src="/images/logos/linux.svg" title="Linux"/></span>
                <span className="tag"><img src="/images/logos/magento.svg" title="Magento / Adobe Commerce"/></span>
                <span className="tag"><img src="/images/logos/mysql.svg" title="MySQL"/></span>
                <span className="tag"><img src="/images/logos/next-js.svg" title="Next JS"/></span>
                <span className="tag"><img src="/images/logos/nginx.svg" title="Nginx"/></span>
                <span className="tag"><img src="/images/logos/node-js.svg" title="Node JS & NPM"/></span>
                <span className="tag"><img src="/images/logos/photoshop.svg" title="Photoshop"/></span>
                <span className="tag"><img src="/images/logos/php.svg" title="PHP"/></span>
                <span className="tag"><img src="/images/logos/postgressql.svg" title="PostgreSQL"/></span>
                <span className="tag"><img src="/images/logos/react.svg" title="React"/></span>
                <span className="tag"><img src="/images/logos/slack.svg" title="Slack"/></span>
                <span className="tag"><img src="/images/logos/ssh.svg" title="SSH"/></span>
                <span className="tag"><img src="/images/logos/symfony.svg" title="Symfony"/></span>
                <span className="tag"><img src="/images/logos/arduino.svg" title="Arduino"/></span>
                <span className="tag"><img src="/images/logos/c-plus-plus.svg" title="C++"/></span>
                <span className="tag"><img src="/images/logos/c-sharp.svg" title="C#"/></span>
                <span className="tag"><img src="/images/logos/codeigniter.svg" title="Codeigniter"/></span>
                <span className="tag"><img src="/images/logos/cypress.svg" title="Cypress"/></span>
                <span className="tag"><img src="/images/logos/debian.svg" title="Debian"/></span>
                <span className="tag"><img src="/images/logos/filezilla.svg" title="Filezilla"/></span>
                <span className="tag"><img src="/images/logos/html5.svg" title="HTML 5"/></span>
                <span className="tag"><img src="/images/logos/javascript.svg" title="JavaScript"/></span>
                <span className="tag"><img src="/images/logos/json.svg" title="JSON"/></span>
                <span className="tag"><img src="/images/logos/markdown.svg" title="Markdown"/></span>
                <span className="tag"><img src="/images/logos/ms-dos.svg" title="MS DOS"/></span>
                <span className="tag"><img src="/images/logos/nano.svg" title="Nano"/></span>
                <span className="tag"><img src="/images/logos/oh-my-zsh.svg" title="Oh My zsh"/></span>
                <span className="tag"><img src="/images/logos/powershell.svg" title="PowerShell"/></span>
                <span className="tag"><img src="/images/logos/putty.svg" title="Putty"/></span>
                <span className="tag"><img src="/images/logos/python.svg" title="Python"/></span>
                <span className="tag"><img src="/images/logos/raspberry-pi.svg" title="Raspberry PI"/></span>
                <span className="tag"><img src="/images/logos/sass.svg" title="SASS"/></span>
                <span className="tag"><img src="/images/logos/stack-overflow.svg" title="Stack Overflow"/></span>
                <span className="tag"><img src="/images/logos/swagger.svg" title="Swagger"/></span>
                <span className="tag"><img src="/images/logos/tailwind-css.svg" title="Tailwind"/></span>
                <span className="tag"><img src="/images/logos/ubuntu.svg" title="Ubuntu"/></span>
                <span className="tag"><img src="/images/logos/vs-code.svg" title="VS Code"/></span>
                <span className="tag"><img src="/images/logos/xml.svg" title="XML"/></span>
                <span className="tag"><img src="/images/logos/yaml.svg" title="YAML"/></span>
            </div>
            <h2>Languages</h2>
            <ul>
                <li>Dutch (mother tongue)</li>
                <li>English (fluent)</li>
                <li>German (a bit)</li>
                <li>Portuguese (studying)</li>
            </ul>
        </div>
        <Footer/>
    </main>);
}