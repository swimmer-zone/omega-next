'use client';
import { Footer, Hexagons, Menu, Music } from '../Components'; // Intro
import '../pages/_scss/home.scss';
import React from "react";

const Home = () => {
  	return (<main className="home">
		<Menu active="home"/>
		<Hexagons />
		<div className="content-column">
			<p>
				Hey all, I'm Omega. Listen to my music below! Also make sure to try out the
				yellow hexagon menu on the left to visit my blogs about travelling, DIY projects,
				or tutorials.
			</p>
			<Music/>
		</div>
		<Footer/>
	</main>);
}

export default Home;
