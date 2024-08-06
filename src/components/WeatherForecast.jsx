import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';

function WeatherForecast({ forecast }) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'es' ? es : enUS;
  const formattedDate = format(new Date(forecast.dt_txt), 'eeee, HH:mm', { locale });

  return (
    <div className="weather-forecast">
      <div className="date-container">
        <p>{formattedDate}</p>
        <img 
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} 
          alt={forecast.weather[0].description} 
        />
      </div>
      <p><strong>{t('description')}:</strong> {t(forecast.weather[0].description)}</p>
      <p><strong>{t('temperature')}:</strong> {forecast.main.temp}°C</p>
      <p><strong>{t('minTemperature')}:</strong> {forecast.main.temp_min}°C</p>
      <p><strong>{t('maxTemperature')}:</strong> {forecast.main.temp_max}°C</p>
      <p><strong>{t('windSpeed')}:</strong> {forecast.wind.speed} m/s</p>
      <p><strong>{t('windDirection')}:</strong> {forecast.wind.deg}°</p>
      <p><strong>{t('feelsLike')}:</strong> {forecast.main.feels_like}°C</p>
    </div>
  );
}

export default WeatherForecast;
