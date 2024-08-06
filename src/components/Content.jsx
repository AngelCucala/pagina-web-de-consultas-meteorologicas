import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useOption } from '../context/OptionContext';
import axios from 'axios';
import WeatherForecast from './WeatherForecast'; // Importa el nuevo componente
import '../styles/Content.css'; // Importa el CSS

const apiUrls = {
  option1: 'https://api.openweathermap.org/data/2.5/forecast?lat=40&lon=0&appid=cdefe541d14ceba8731fdd40a4f89cde&units=metric',
  option2: 'https://api.openweathermap.org/data/2.5/forecast?lat=47.49835&lon=19.04045&appid=cdefe541d14ceba8731fdd40a4f89cde&units=metric',
  option3: 'https://api.openweathermap.org/data/2.5/forecast?lat=50.12&lon=8.68&appid=cdefe541d14ceba8731fdd40a4f89cde&units=metric'
};

function Content() {
  const { t } = useTranslation();
  const { selectedOption } = useOption();

  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedOption) {
      const apiUrl = apiUrls[selectedOption];

      axios.get(apiUrl)
        .then(response => {
          const data = response.data;
          setWeatherData(data);
          setCityName(data.city.name);
        })
        .catch(err => {
          setError(t('error'));
          console.error(err);
        });
    }
  }, [selectedOption]);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const nextSixPredictions = weatherData.list
    .filter(forecast => forecast.dt_txt > currentDateTime)
    .slice(0, 6);

    return (
      <div className="content">
     
        {error && <div>{error}</div>}
  
        <div>
          <h2>{t('weather-in')} {cityName}</h2>
          <div className="weather-forecast-container">
            {nextSixPredictions.map((forecast, index) => (
              <WeatherForecast key={index} forecast={forecast} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Content;
