import { Metadata } from "next";
import { Logo } from '../components';
import './_scss/not-found.scss';

export const metadata: Metadata = {
    title: "404 - Not found",
    description: "404 - Not found",
};

export default function NotFound() {
    return (<main>
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