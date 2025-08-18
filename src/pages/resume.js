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
                <img className="tag" src="/logos/alpine-js.svg" title="AlpineJS"/>
                <img className="tag" src="/logos/apache.svg" title="Apache"/>
                <img className="tag" src="/logos/arduino.svg" title="Arduino"/>
                <img className="tag" src="/logos/bitbucket.svg" title="Bitbucket"/>
                <img className="tag" src="/logos/c-plus-plus.svg" title="C++"/>
                <img className="tag" src="/logos/c-sharp.svg" title="C#"/>
                <img className="tag" src="/logos/codeigniter.svg" title="Codeigniter"/>
                <img className="tag" src="/logos/composer.svg" title="Composer"/>
                <img className="tag" src="/logos/confluence.svg" title="Confluence"/>
                <img className="tag" src="/logos/css3.svg" title="CSS 3"/>
                <img className="tag" src="/logos/cypress.svg" title="Cypress"/>
                <img className="tag" src="/logos/debian.svg" title="Debian"/>
                <img className="tag" src="/logos/docker.svg" title="Docker"/>
                <img className="tag" src="/logos/drupal.svg" title="Drupal"/>
                <img className="tag" src="/logos/filezilla.svg" title="Filezilla"/>
                <img className="tag" src="/logos/git.svg" title="Git"/>
                <img className="tag" src="/logos/github.svg" title="Github"/>
                <img className="tag" src="/logos/github-actions.svg" title="Github Actions"/>
                <img className="tag" src="/logos/gitlab.svg" title="GitLab"/>
                <img className="tag" src="/logos/html5.svg" title="HTML 5"/>
                <img className="tag" src="/logos/javascript.svg" title="JavaScript"/>
                <img className="tag" src="/logos/jetbrains.svg" title="JetBrains"/>
                <img className="tag" src="/logos/jira.svg" title="Jira"/>
                <img className="tag" src="/logos/jquery.svg" title="jQuery"/>
                <img className="tag" src="/logos/json.svg" title="JSON"/>
                <img className="tag" src="/logos/knockout.svg" title="KnockoutJS"/>
                <img className="tag" src="/logos/laravel.svg" title="Laravel"/>
                <img className="tag" src="/logos/linux.svg" title="Linux"/>
                <img className="tag" src="/logos/magento.svg" title="Magento / Adobe Commerce"/>
                <img className="tag" src="/logos/markdown.svg" title="Markdown"/>
                <img className="tag" src="/logos/ms-dos.svg" title="MS DOS"/>
                <img className="tag" src="/logos/mysql.svg" title="MySQL"/>
                <img className="tag" src="/logos/nano.svg" title="Nano"/>
                <img className="tag" src="/logos/next-js.svg" title="Next JS"/>
                <img className="tag" src="/logos/nginx.svg" title="Nginx"/>
                <img className="tag" src="/logos/node-js.svg" title="Node JS"/>
                <img className="tag" src="/logos/npm.svg" title="NPM"/>
                <img className="tag" src="/logos/oh-my-zsh.svg" title="Oh My zsh"/>
                <img className="tag" src="/logos/photoshop.svg" title="Photoshop"/>
                <img className="tag" src="/logos/php.svg" title="PHP"/>
                <img className="tag" src="/logos/phpstorm.svg" title="PHP Storm"/>
                <img className="tag" src="/logos/postgressql.svg" title="PostgreSQL"/>
                <img className="tag" src="/logos/powershell.svg" title="PowerShell"/>
                <img className="tag" src="/logos/putty.svg" title="Putty"/>
                <img className="tag" src="/logos/python.svg" title="Python"/>
                <img className="tag" src="/logos/raspberry-pi.svg" title="Raspberry PI"/>
                <img className="tag" src="/logos/react.svg" title="React"/>
                <img className="tag" src="/logos/sass.svg" title="SASS"/>
                <img className="tag" src="/logos/slack.svg" title="Slack"/>
                <img className="tag" src="/logos/ssh.svg" title="SSH"/>
                <img className="tag" src="/logos/stack-overflow.svg" title="Stack Overflow"/>
                <img className="tag" src="/logos/swagger.svg" title="Swagger"/>
                <img className="tag" src="/logos/symfony.svg" title="Symfony"/>
                <img className="tag" src="/logos/tailwind-css.svg" title="Tailwind"/>
                <img className="tag" src="/logos/ubuntu.svg" title="Ubuntu"/>
                <img className="tag" src="/logos/vs-code.svg" title="VS Code"/>
                <img className="tag" src="/logos/webstorm.svg" title="Web Storm"/>
                <img className="tag" src="/logos/xml.svg" title="XML"/>
                <img className="tag" src="/logos/yaml.svg" title="YAML"/>
                <img className="tag" src="/logos/zend-framework.svg" title="Zend Framework"/>
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
