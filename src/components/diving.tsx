import React, {JSX} from 'react';
import './diving.scss';
import diving from '../../public/images/diving.png';

export default function Diving(): JSX.Element {
    return (<>
        <div className="diving">
            <img src={diving.src} alt="" />
        </div>
    </>);
};