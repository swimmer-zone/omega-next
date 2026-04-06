import React from "react";
import { Metadata } from 'next';
import { Footer, Hexagons, Menu } from '../../components';
import '../_scss/_page.scss';
import '../_scss/diy.scss';

export const metadata: Metadata = {
    title: 'DIY Projects',
    description: '',
};

const DIY = () => {
    return (<main className="diy-overview-background">
        <Menu active="diy"/>
        <Hexagons />
        <div className="content-column">
            <h1>My DIY Projects</h1>
            <p>I have created some furniture, enjoy,</p>
            <ul>
                <li><a href="diy/cabinet" title="March 8th 2022">Cabinet</a></li>
                <li><a href="diy/casemod" title="July 17th 2009">Casemod</a></li>
            </ul>
            <Footer/>
        </div>
    </main>);
}

export default DIY;
