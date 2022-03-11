from django.shortcuts import render
from django.contrib.auth import logout
from django.contrib.auth.views import LoginView
from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, FormView, TemplateView,View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import FormMixin
# Create your views here.
# Create your views here.


class Map(TemplateView):

    template_name = 'front/index.html'