from django.db import models

# Create your models here.
from django.urls import reverse


class Dot(models.Model):
    title = models.CharField(max_length=300, verbose_name='Заголовов')
    info = models.TextField(blank=True, verbose_name='Опис')
    image = models.ImageField(upload_to='photos/%Y/%m/%d', verbose_name='Фотография')
    xcoord = models.CharField(max_length=80, verbose_name='Координата Х')
    ycoord = models.CharField(max_length=80, verbose_name='Координата У')
    time_created = models.DateTimeField(auto_now_add=True)
    time_updete = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True, verbose_name='Публікація')

    def __str__(self):
        return self.title


