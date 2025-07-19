import Head from 'next/head';
import './_scss/app.scss';
import localFont from 'next/font/local';

const afacad = localFont({
  	src: [{
      	path: '../../public/fonts/afacad.ttf',
      	weight: '400'
	}, {
		path: '../../public/fonts/afacad-bold.ttf',
      	weight: '700'
    }],
  	variable: '--font-afacad'
});

const MyApp = ({ Component, pageProps }) => {
	return (<>
		<main className={`${afacad.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	</>);
}

export default MyApp;
