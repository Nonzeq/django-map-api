from .models import *
from rest_framework import generics,serializers

from .serializers import *


class DotApiView(generics.ListCreateAPIView):
    queryset = Dot.objects.all().values()
    serializer_class = DotSerializer