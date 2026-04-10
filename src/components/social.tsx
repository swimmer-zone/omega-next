import { JSX } from 'react';
import './social.scss';
import { social } from '../json';

type Props = {
    location: string
};

export default function Social({ location }: Props): JSX.Element {
    let pathKey = 0;

    return (
        <div className={'social ' + location}>
            {social.header.map((icon, key) => {

                return (
                    <a id={'social_' + key} key={'social_' + key} href={icon.url} title={icon.title}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={icon.class}>
                            {icon.paths.map(path => {
                                pathKey++;
                                return (<path key={'path_' + pathKey} d={path} />)
                            })}
                        </svg>
                    </a>
                );
            })}
        </div>
    );
}