import React from 'react';
import me from '../../public/images/me.png';
import meHover from '../../public/images/me-hover.png';

const Me = () => {
    return (<>
        <div className="me">
            <img src={me.src} alt="" />
            <img src={meHover.src} alt="" />
        </div>
    </>);
};

export default Me;
