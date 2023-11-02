import React from "react";
import { FaTemperatureHigh, FaTint, FaCloudRain, FaWind } from "react-icons/fa";
import styles from "../WeatherInfo.module.css";

const WeatherInfo = ({ temperature, humidity, precipitation, windSpeed }) => {
  return (
    <div className={styles.weatherInfo}>
      <div className={styles.infoItem}>
        <FaTemperatureHigh className={styles.infoIcon} />
        <span className={styles.infoLabel}>Temperatura: </span>
        <span className={styles.infoText}>{temperature}°C</span>
      </div>
      <div className={styles.infoItem}>
        <FaTint className={styles.infoIcon} />
        <span className={styles.infoLabel}>Humedad: </span>
        <span className={styles.infoText}>{humidity}%</span>
      </div>
      <div className={styles.infoItem}>
        <FaCloudRain className={styles.infoIcon} />
        <span className={styles.infoLabel}>Precipitación: </span>
        <span className={styles.infoText}>{precipitation} mm</span>
      </div>
      <div className={styles.infoItem}>
        <FaWind className={styles.infoIcon} />
        <span className={styles.infoLabel}>Velocidad del Viento: </span>
        <span className={styles.infoText}>{windSpeed} m/s</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
