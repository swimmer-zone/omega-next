'use client';
import { Footer, Hexagons, Menu, Music } from '../Components';
import '../pages/_scss/_page.scss';
import React from "react";
import Head from "next/head";

const Home = () => {
  	return (<main className="home">
		<Head>
			<title>Ω</title>
		</Head>
		<Menu active="home"/>
		<Hexagons />
		<div className="content-column">
			<h1>Hey all</h1>
			<p>
				Welcome to my website, I'm Omega. Listen to my music below! Also make sure to try out the
				yellow hexagon menu on the left to visit my blogs about travelling or DIY projects.
			</p>
			<Music/>
		</div>
		<Footer/>
	</main>);
}

export default Home;
