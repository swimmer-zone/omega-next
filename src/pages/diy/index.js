'use client';
import Head from 'next/head';
import {Footer, Hexagons, Menu} from '../../Components';
import '../_scss/_page.scss';
import '../_scss/diy.scss';
import React from "react";

const DIY = () => {
    return (<main className="diy-overview-background">
        <Menu active="diy"/>
        <Hexagons />
        <div className="content-column">
            <Head>
                <title>Ω - DIY Projects</title>
            </Head>
            <h1>My DIY Projects</h1>
            <p>I've created some furniture, enjoy,</p>
            <ul>
                <li><a href="diy/cabinet" title="March 8th 2022">Cabinet</a></li>
                <li><a href="diy/casemod" title="July 17th 2009">Casemod</a></li>
            </ul>
            <Footer/>
        </div>
    </main>);
}

export default DIY;
