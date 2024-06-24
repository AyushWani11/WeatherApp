import React, { useState, useEffect } from 'react';
import AppLogo from './images/icon-removebg-preview.png';

const Header = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options);
        setDate(formattedDate);

        const changeTime = () => {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const newTime = now.toLocaleTimeString(undefined, timeOptions);
            setTime(newTime);
        };

        changeTime();

        const timer = setInterval(changeTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return ( 
        <header>
            <div className='logo'>
                <img src={ AppLogo } alt="" />
                <h1>Weather Buddy</h1>
            </div>
            <div>
                <span>{ date }</span>
                <span>{ time }</span>
            </div>
        </header>
     );
}
 
export default Header;