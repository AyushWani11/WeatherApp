import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import locationIcon from './images/location-dot.png';
import temperatureIcon from './images/temperature.png';
import humidityIcon from './images/humidity.png'
import getWeatherIcon from './weathericon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Interface = () => {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState(null);
    const [locKey, setLocKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true);
    const apiKey = "FbzFxyMRGyWV4fN6vSRV8Jfao3JshGV6";

    const notifyEmptyCityName = () => toast.error("Please enter a city name");
    const notifyInvalidCityName = () => toast.error("Please enter a valid city name");
    const notifyNetworkError = () => toast.error("Network error, please try again later");
    const notifyWeatherError = () => toast.error("Error fetching weather data");

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleShowWeather();
        }
    }

    const fetchLocation = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search`, {
                params: {
                    apikey: apiKey,
                    q: input
                }
            });
            if (response.data && response.data[0] && response.data[0].Key) {
                setLocKey(response.data[0]);
                fetchWeather(response.data[0].Key);
            } else {
                notifyInvalidCityName();
                setLoading(false);
            }
        } catch (error) {
            notifyNetworkError();
            console.error('Error fetching location data:', error);
            setLocKey(null);
            setWeather(null);
            setLoading(false);
        }
    }

    const fetchWeather = async (key) => {
        try {
            const response = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${key}`, {
                params: {
                    apikey: apiKey
                }
            });
            if (response.data && response.data.length > 0) {
                setWeather(response.data[0]);
            } else {
                notifyWeatherError();
            }
        } catch (error) {
            notifyWeatherError();
            console.error('Error fetching weather data:', error);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    }

    const handleShowWeather = () => {
        if (input.trim() === '') {
            notifyEmptyCityName();
            return;
        }
        setInitialLoad(false); 
        fetchLocation();
    }

    return (
        <div className='info'>
            <div className='search'>
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    id='city'
                />
                <button onClick={handleShowWeather}>Show Weather</button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {initialLoad && (
                <div className='welcome-message'>
                    <h1>Welcome!</h1>
                    <p>Enter the city name to get information about its weather.</p>
                </div>
            )}

            {!loading && weather && locKey && (
                <div className='display'>
                    <div className='wrapper'>
                        <h2>CURRENT WEATHER</h2>
                        <div className='wrapper2'>
                            <div className='information bounce'>
                                <img src={locationIcon} alt="location icon" />
                                <span>{locKey.EnglishName}, {locKey.Country.EnglishName}</span>
                            </div>
                            <div className='information grow'>
                                <img src={temperatureIcon} alt="temperature icon" />
                                <span>{weather.Temperature.Metric.Value}° {weather.Temperature.Metric.Unit}</span>
                            </div>
                            <div className='information fade-in-shake'>
                            {weather.WeatherIcon && (
                                    <img src={getWeatherIcon(weather.WeatherIcon)} alt="weather icon" />
                                )}
                                <span>{ weather.WeatherText }</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!loading && !weather && !error && !initialLoad && <p>Weather Information couldn't be found</p>}
            <ToastContainer
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </div>
    );
}

Interface.propTypes = {
    apiKey: PropTypes.string
};



export default Interface;
