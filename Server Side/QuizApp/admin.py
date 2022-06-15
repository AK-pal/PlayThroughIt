from django.contrib import admin

# Register your models here.
from .models import Title , Ques

admin.site.register(Title)
admin.site.register(Ques)