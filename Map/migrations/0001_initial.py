# Generated by Django 4.0.2 on 2022-02-08 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300, verbose_name='Заголовов')),
                ('info', models.TextField(blank=True, verbose_name='Опис')),
                ('image', models.ImageField(upload_to='photos/%Y/%m/%d', verbose_name='Фотография')),
                ('xcoord', models.FloatField()),
                ('ycoord', models.FloatField()),
                ('time_created', models.DateTimeField(auto_now_add=True)),
                ('time_updete', models.DateTimeField(auto_now=True)),
                ('is_published', models.BooleanField(default=True, verbose_name='Публікація')),
            ],
        ),
    ]
