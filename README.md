# Weather App

A real-time weather forecasting web application built with Django, ReactJS, and SQLite.

---

## Overview

This Weather App fetches and displays current weather data including temperature, humidity, wind speed, and weather conditions for any city. The backend is powered by Django with a SQLite database, while the frontend uses ReactJS for a dynamic user experience.

---

## Technologies Used

- **Backend:** Django (Python)
- **Frontend:** ReactJS, JavaScript, CSS
- **Database:** SQLite (default Django database)
- **APIs:** Integrated with external weather APIs for live weather data

---

## Features

- User-friendly interface with ReactJS
- Fetches real-time weather data for user-specified locations
- Displays temperature, humidity, wind speed, and weather conditions
- Responsive design using CSS for seamless experience on all devices
- Persistent data management with SQLite

---

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
   
2. **Create a virtual environment and activate it:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install backend dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

5. **Run Django migrations:**
   ```bash
   cd ..
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Start the development servers:**

   ***Start backend Django server:***
   ```bash
   python manage.py runserver
   ```
   
   ***Start React frontend server (in another terminal):***
   ```bash
   cd frontend
   npm start
   ```
---

## Usage

- Open the React app in your browser (usually at http://localhost:3000).
- Enter the city name to get the current weather.
- The app will display temperature, humidity, wind speed, and weather conditions.

---

## Sample Output

- City: New York
- Temperature: 25°C
- Humidity: 60%
- Wind Speed: 15 km/h
- Condition: Clear Sky

---

## Contact
*For any questions or suggestions, please contact:*

Sushmitha R S

Email: sushmithars5992@gmail.com

GitHub: sushmitha9380
