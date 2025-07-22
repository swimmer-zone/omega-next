'use client';
import Head from 'next/head';
import { Logo, Menu } from '../Components';
import '../pages/_scss/not-found.scss';

export default function NotFound() {
    return (<main>
        <Head>
            <title>Ω - 404</title>
        </Head>
        <div className="content-column">
            <div className="error">
                <div>
                    <Logo />
                </div>
                <div>
                    <h1>404</h1>
                    <p>Not found</p>
                </div>
            </div>
        </div>
    </main>);
}