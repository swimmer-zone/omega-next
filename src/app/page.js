'use client';
import { Footer, Hexagons, Menu, Music } from '../Components'; // Intro
import '../pages/_scss/home.scss';
import React from "react";

const Home = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

  	return (<main className="home">
		<div className="container">
            <Menu active="home"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
					<Hexagons />
                    {/*<Music />*/}
                    {/*<Intro />*/}
                    <Footer/>
				</div>
			</div>
		</div>
    </main>);
}

export default Home;
