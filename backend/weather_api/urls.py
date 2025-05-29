from django.urls import path
from . import views

urlpatterns = [
    path('weather/history/', views.weather_history, name='weather-history'),
    path('weather/<str:city>/', views.weather_view, name='weather'),
]
