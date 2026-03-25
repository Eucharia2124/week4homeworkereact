import React from "react";
import "./Weather.css"


export default function Weather() {
    return (

        <div className="Weather">
            <form class="search-form" id="search-form">
            <input
                type="search"
                placeholder="Enter a city.."
                required
                id="search-form-input"
                className="search-form-input" />
            <input type="submit" value="search" className="search-form-button" />
        </form><main>
                <div className="weather-app-data">
                    <div>
                        <h1 className="weather-app-city" id="city"></h1>
                        <p className="weather-app-details">
                            <span id="time"></span> <span id="description"></span>
                            <br />
                            Humidity: <strong id="humidity"></strong>, Wind:
                            <strong id="wind-speed"></strong>
                        </p>
                    </div>
                    <div className="weather-app-temperature-container">
                        <div id="icon"></div>
                        <div className="weather-app-temperature" id="temperature"></div>
                        <div className="weather-app-unit">°C</div>
                    </div>
                </div>
                <div class="weather-forecast" id="forecast"></div>
            </main><footer>
                This project was coded by
                <a href="https://github.com/Eucharia2124" rel="noreferrer" target="_blank"> Obiageri Stöhr </a>,is <a href="https://github.com/Eucharia2124/Wetter" target="_blank"> open-sourced on GitHub</a>
                and <a href="https://wetter-app.netlify.app/" target="_blank">hosted on Netlify</a>
            </footer>
            </div>
    );
}



    

