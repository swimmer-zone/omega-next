'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import {Footer, Portrait, Menu, Hexagons} from '../Components';
import './_scss/_page.scss';
import './_scss/resume.scss';

const Resume = () => {
    const [ expanded, setExpanded ] = useState(false);

    const handleSetExpanded = () => {
        setExpanded(!expanded)
    }

    return (<main>
        <Head>
            <title>Ω - Resume</title>
        </Head>
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
            <div id="timeline" className="timeline">
                <div className="btn-group">
                    <button className="btn timeline__collapse" type="button" onClick={handleSetExpanded}>Expand /
                        Collapse
                    </button>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2019-08">
                                <span className="tag">job</span> August 2019 - Now
                            </time><br/>
                            <strong className="timeline__title">
                                iO, Eindhoven
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                PHP Programmer, Development and maintenance Magento, Custom modules for clients
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2022-09">
                                <span className="tag">study</span> September 2022 - November 2024
                            </time><br/>
                            <strong className="timeline__title">
                                Avans+, Amsterdam [HBO Software Engineering]
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                Information Technology<br/>Bachelor's Degree
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2011-06">
                                <span className="tag">job</span> June 2011 - July 2019
                            </time><br/>
                            <strong className="timeline__title">
                                Medusa Media Usage Advice, Eindhoven
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                PHP Programmer, Development and maintenance custom CMS, Custom applications for clients
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2010-05">
                                <span className="tag">job</span>  May 2010 - June 2010
                            </time><br/>
                            <strong className="timeline__title">BliXem Internet, Nijmegen</strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                PHP Programmer, Development and maintenance of WordPress
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2004-09">
                                <span className="tag">study</span> September 2004 - June 2007
                            </time><br/>
                            <strong className="timeline__title">
                                Fontys, Venlo [HBO Mechatronics]
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                Informatica, Elektronics, Mechanics<br/>
                                Propaedeutic year's certificate (for masters degree)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2004-01">
                                <span className="tag">intern</span> January 2004 - June 2004
                            </time><br/>
                            <strong className="timeline__title">
                                Aluminium Delfzijl BV, Delfzijl
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                Process Operator
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2002-11">
                                <span className="tag">intern</span> November 2002 - January 2003
                            </time><br/>
                            <strong className="timeline__title">
                                Teijin Twaron BV, Delfzijl
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                Research, Maintenance
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2002-09">
                                <span className="tag">intern</span> September 2002 - November 2002
                            </time><br/>
                            <strong className="timeline__title">Sportcentrum Kardinge, Groningen</strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                Technical Service, Maintenance
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="2000-09">
                                <span className="tag">study</span> September 2000 - June 2004
                            </time><br/>
                            <strong className="timeline__title">
                                Noorderpoort College (Abel Tasman), Delfzijl [MBO Operational Technology]
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                Process Technology, Electronics, VAPRO B<br/>
                                Level 4 degree
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="1995-09">
                                <span className="tag">study</span> September 1995 - June 2000
                            </time><br/>
                            <strong className="timeline__title">
                                Ommelander College, Appingedam [HAVO]
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                Nature & Technology<br/>
                                MAVO degree
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="1982-11">
                                November, 1982
                            </time><br/>
                            <strong className="timeline__title">
                                Hello world
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">...</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__item">
                    <div className="timeline__item-header">
                        <button className={expanded ? 'timeline__arrow timeline__arrow--expanded' : 'timeline__arrow'}
                                type="button">
                            <svg className="timeline__arrow-icon" viewBox="0 0 24 24">
                                <use href="#arrow"/>
                            </svg>
                        </button>
                        <span className="timeline__dot"></span>
                        <span className="timeline__meta">
                            <time className="timeline__date" dateTime="1970-01">
                                January, 1970
                            </time><br/>
                            <strong className="timeline__title">
                                Unix Epoch
                            </strong>
                        </span>
                    </div>
                    <div
                        className={expanded ? 'timeline__item-body timeline__item-body--expanded' : 'timeline__item-body'}
                        role="region">
                        <div className="timeline__item-body-content">
                            <p className="timeline__item-p">
                                This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>About Me</h2>
            <p>
                About 20 years ago I wrote my first HTML and later on also CSS came by, these became HTML5 and CSS3.
                But I wanted more than just a static website and when PHP 4.0 was released, I enrolled into creating
                dynamic websites, some of which you can still find on my <a href="/">homepage</a>.
            </p>
            <p>
                I started programming procedurally and while PHP grew up, I got more into object oriented programming
                (OOP). As of version 7.0, my website was built onto a Model-View-Controller (MVC) architecture. After
                that, I moved on to using CodeIgniter as a framework and later on Laravel, connecting to the SoundCloud
                API to show off my music productions.
            </p>
            <p>
                Currently I'm already on the 20th version of my website, this includes major design overhauls, migrating
                to other frameworks or platforms, also migrating from shared hosting to a VPS. The previous version ran
                on React and currently it is running on Next.js on serverless hosting at Vercel.
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
                I've made a lot of websites during my life, a couple of which are still live today:
            </p>
            <ul>
                <li>
                    <a href="https://swimmer.ome.gs">Swimmer</a> my previous website where my current site is
                    heavily based on. Most of the sections have moved to my current website, but left a couple
                    behind.
                </li>
                <li>
                    <a href="https://blackhole.ome.gs">Black Hole</a> being a music project that I've had with a
                    couple of friends.
                </li>
                <li>
                    <a href="https://index.ome.gs">Index</a> is band website of a couple of friends.
                </li>
                <li>
                    <a href="https://weerbaar.ome.gs">Weerbaar Worden</a> a website that I made for a friend, which was
                    meant to be child friendly.
                </li>
                <li>
                    <a href="https://jacuzzi.ome.gs">Jacuzzi Taxi</a> Jacuzzi rental company, unfortunately never
                    made it past a wire frame.
                </li>
            </ul>
            <h2>Skills</h2>
            <div className="tags">
                <span className="tag"><img src="/logos/apache.svg" title="Apache"/></span>
                <span className="tag"><img src="/logos/composer.svg" title="Composer"/></span>
                <span className="tag"><img src="/logos/css3.svg" title="CSS 3"/></span>
                <span className="tag"><img src="/logos/docker.svg" title="Docker"/></span>
                <span className="tag"><img src="/logos/git.svg" title="Git"/></span>
                <span className="tag"><img src="/logos/jetbrains.svg" title="JetBrains"/></span>
                <span className="tag"><img src="/logos/jira.svg" title="Jira"/></span>
                <span className="tag"><img src="/logos/laravel.svg" title="Laravel"/></span>
                <span className="tag"><img src="/logos/linux.svg" title="Linux"/></span>
                <span className="tag"><img src="/logos/magento.svg" title="Magento / Adobe Commerce"/></span>
                <span className="tag"><img src="/logos/mysql.svg" title="MySQL"/></span>
                <span className="tag"><img src="/logos/next-js.svg" title="Next JS"/></span>
                <span className="tag"><img src="/logos/nginx.svg" title="Nginx"/></span>
                <span className="tag"><img src="/logos/photoshop.svg" title="Photoshop"/></span>
                <span className="tag"><img src="/logos/php.svg" title="PHP"/></span>
                <span className="tag"><img src="/logos/phpstorm.svg" title="PHP Storm"/></span>
                <span className="tag"><img src="/logos/postgressql.svg" title="PostgreSQL"/></span>
                <span className="tag"><img src="/logos/react.svg" title="React"/></span>
                <span className="tag"><img src="/logos/slack.svg" title="Slack"/></span>
                <span className="tag"><img src="/logos/ssh.svg" title="SSH"/></span>
                <span className="tag"><img src="/logos/symfony.svg" title="Symfony"/></span>
                {/*<span className="tag"><img src="/logos/alpine-js.svg" title="AlpineJS"/></span>*/}
                {/*<span className="tag"><img src="/logos/arduino.svg" title="Arduino"/></span>*/}
                {/*<span className="tag"><img src="/logos/bitbucket.svg" title="Bitbucket"/></span>*/}
                {/*<span className="tag"><img src="/logos/c-plus-plus.svg" title="C++"/></span>*/}
                {/*<span className="tag"><img src="/logos/c-sharp.svg" title="C#"/></span>*/}
                {/*<span className="tag"><img src="/logos/codeigniter.svg" title="Codeigniter"/></span>*/}
                {/*<span className="tag"><img src="/logos/confluence.svg" title="Confluence"/></span>*/}
                {/*<span className="tag"><img src="/logos/cypress.svg" title="Cypress"/></span>*/}
                {/*<span className="tag"><img src="/logos/debian.svg" title="Debian"/></span>*/}
                {/*<span className="tag"><img src="/logos/drupal.svg" title="Drupal"/></span>*/}
                {/*<span className="tag"><img src="/logos/filezilla.svg" title="Filezilla"/></span>*/}
                {/*<span className="tag"><img src="/logos/github.svg" title="Github"/></span>*/}
                {/*<span className="tag"><img src="/logos/github-actions.svg" title="Github Actions"/></span>*/}
                {/*<span className="tag"><img src="/logos/gitlab.svg" title="GitLab"/></span>*/}
                {/*<span className="tag"><img src="/logos/html5.svg" title="HTML 5"/></span>*/}
                {/*<span className="tag"><img src="/logos/javascript.svg" title="JavaScript"/></span>*/}
                {/*<span className="tag"><img src="/logos/jquery.svg" title="jQuery"/></span>*/}
                {/*<span className="tag"><img src="/logos/json.svg" title="JSON"/></span>*/}
                {/*<span className="tag"><img src="/logos/knockout.svg" title="KnockoutJS"/></span>*/}
                {/*<span className="tag"><img src="/logos/markdown.svg" title="Markdown"/></span>*/}
                {/*<span className="tag"><img src="/logos/ms-dos.svg" title="MS DOS"/></span>*/}
                {/*<span className="tag"><img src="/logos/nano.svg" title="Nano"/></span>*/}
                {/*<span className="tag"><img src="/logos/node-js.svg" title="Node JS"/></span>*/}
                {/*<span className="tag"><img src="/logos/npm.svg" title="NPM"/></span>*/}
                {/*<span className="tag"><img src="/logos/oh-my-zsh.svg" title="Oh My zsh"/></span>*/}
                {/*<span className="tag"><img src="/logos/powershell.svg" title="PowerShell"/></span>*/}
                {/*<span className="tag"><img src="/logos/putty.svg" title="Putty"/></span>*/}
                {/*<span className="tag"><img src="/logos/python.svg" title="Python"/></span>*/}
                {/*<span className="tag"><img src="/logos/raspberry-pi.svg" title="Raspberry PI"/></span>*/}
                {/*<span className="tag"><img src="/logos/sass.svg" title="SASS"/></span>*/}
                {/*<span className="tag"><img src="/logos/stack-overflow.svg" title="Stack Overflow"/></span>*/}
                {/*<span className="tag"><img src="/logos/swagger.svg" title="Swagger"/></span>*/}
                {/*<span className="tag"><img src="/logos/tailwind-css.svg" title="Tailwind"/></span>*/}
                {/*<span className="tag"><img src="/logos/ubuntu.svg" title="Ubuntu"/></span>*/}
                {/*<span className="tag"><img src="/logos/vs-code.svg" title="VS Code"/></span>*/}
                {/*<span className="tag"><img src="/logos/webstorm.svg" title="Web Storm"/></span>*/}
                {/*<span className="tag"><img src="/logos/xml.svg" title="XML"/></span>*/}
                {/*<span className="tag"><img src="/logos/yaml.svg" title="YAML"/></span>*/}
                {/*<span className="tag"><img src="/logos/zend-framework.svg" title="Zend Framework"/></span>*/}
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

export default Resume;
