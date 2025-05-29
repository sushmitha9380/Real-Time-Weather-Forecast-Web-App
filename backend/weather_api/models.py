from django.db import models

class WeatherSearch(models.Model):
    city = models.CharField(max_length=100)
    temperature = models.FloatField()
    humidity = models.IntegerField()
    description = models.CharField(max_length=255)
    icon = models.CharField(max_length=10)
    searched_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.city} at {self.searched_at}"
