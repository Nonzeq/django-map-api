from django.contrib import admin

# Register your models here.
from .models import Dot


class DotAdmin(admin.ModelAdmin):
    list_display = ['title']
admin.site.register(Dot, DotAdmin)

