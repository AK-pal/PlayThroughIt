from django.urls import path,re_path
from QuizApp import views

urlpatterns = [
    re_path(r'^title$',views.titleApi),
    re_path(r'^title/([0-9]+)$',views.titleApi),

    re_path(r'^ques$',views.quesApi),
    re_path(r'^ques/([0-9]+)$',views.quesApi)
]