from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import WeatherSearch
import requests
import os

@api_view(['GET'])
def weather_view(request, city):
    print("Inside weather_view with city:", city)
    if not city:
        return Response({'error': 'City not provided'}, status=400)

    api_key = os.getenv('OPENWEATHER_API_KEY') or 'deb28d8f6a7783246b080b2e0d11c844'
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}"

    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        weather_data = {
            'city': data['name'],
            'temperature': data['main']['temp'],
            'humidity': data['main']['humidity'],
            'description': data['weather'][0]['description'].title(),
            'icon': data['weather'][0]['icon'],
        }

        WeatherSearch.objects.create(**weather_data)
        return Response(weather_data)

    except requests.exceptions.RequestException:
        return Response({'error': 'City not found or API error'}, status=404)


@api_view(['GET'])
def weather_history(request):
    print("Inside weather_history view")
    searches = WeatherSearch.objects.all().order_by('-searched_at')[:10]
    history = [
        {
            'city': s.city,
            'temperature': s.temperature,
            'humidity': s.humidity,
            'description': s.description,
            'icon': s.icon,
            'searched_at': s.searched_at
        } for s in searches
    ]
    return Response({'history': history})
