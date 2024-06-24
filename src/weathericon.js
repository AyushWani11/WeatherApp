import rainIcon from './images/weather-icons/Rain.png';
import cloudyIcon from './images/weather-icons/Cloud.png';
import snowIcon from './images/weather-icons/Snow.png';
import fogIcon from './images/weather-icons/Fog.png';
import WindIcon from './images/weather-icons/Wind.png';
import ThunderIcon from './images/weather-icons/Thunder.png';
import SunCloudIcom from './images/weather-icons/Sun&Cloud.png';
import boltIcon from './images/weather-icons/Bolt.png';
import sunIcon from './images/weather-icons/Sun.png';
import sunRainIcon from './images/weather-icons/sun&rain.png';

const weatherIcons = {
    1: sunIcon,
    2: sunIcon,
    3: sunIcon,
    4: sunIcon,
    5: sunIcon,
    6: cloudyIcon,
    7: cloudyIcon,
    8: cloudyIcon,
    11: fogIcon,
    12: rainIcon,
    13: rainIcon,
    14: sunRainIcon,
    15: boltIcon,
    16: boltIcon,
    17: boltIcon,
    18: rainIcon,
    23: snowIcon,
    23: snowIcon,
    24: snowIcon,
    33: cloudyIcon,
    34: cloudyIcon,
    35: cloudyIcon,
    36: cloudyIcon,
    37: cloudyIcon,
    38: cloudyIcon,
    39: rainIcon,
    40: rainIcon,
    41: boltIcon,
    42: boltIcon

};


const getWeatherIcon = (weatherNum) => {
    
    if (weatherIcons[weatherNum]) {
        return weatherIcons[weatherNum];
    }

    
    return null;
};

export default getWeatherIcon;