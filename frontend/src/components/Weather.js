import { useState } from 'react';
import axios from 'axios';
import '../components/Weather.css';

function Weather() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      setData(null);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const baseUrl = process.env.REACT_APP_WEATHER_API_URL;
      const res = await axios.get(`${baseUrl}/${city}/`);
      setData(res.data);
    } catch {
      setError('City not found or server error');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') getWeather();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow text-center" style={{ maxWidth: '500px', width: '100%' }}>
        <h2>🌤️ Weather App</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={getWeather}>
            Search
          </button>
        </div>

        {loading && <div className="mt-3">Loading...</div>}

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        {data && (
          <div className="weather-result mt-4">
            <h3>{data.city}</h3>
            <p>{new Date().toLocaleString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${data.icon || '01d'}@2x.png`}
              alt="Weather Icon"
            />
            <p>🌡️ Temperature: {data.temperature} °C</p>
            <p>💧 Humidity: {data.humidity}%</p>
            <p>🌥️ {data.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
