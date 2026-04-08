import { JSX } from 'react';
import Image from 'next/image';
import me from '../../public/images/me.png';
import meHover from '../../public/images/me-hover.png';

export default function Me(): JSX.Element {
    return (<>
        <div className="me">
            <Image width={360} height={480} src={me.src} alt="" />
            <Image width={360} height={480} src={meHover.src} alt="" />
        </div>
    </>);
}