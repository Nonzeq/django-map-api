from rest_framework import serializers

from .models import *


class DotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dot
        fields = ('title', 'info', 'xcoord', 'ycoord')