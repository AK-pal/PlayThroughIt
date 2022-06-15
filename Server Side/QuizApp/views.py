from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.http import HttpResponse

from QuizApp.models import Title , Ques
from QuizApp.serializers import TitleSerializer , QuesSerializer

# Create your views here.

@csrf_exempt
def titleApi(request,id=0):
    if request.method=='GET':
        title = Title.objects.all()
        title_serializer=TitleSerializer(title, many=True)
        return JsonResponse(title_serializer.data, safe=False)
    elif request.method=='POST':
        title_data=JSONParser().parse(request)
        title_serializer=TitleSerializer(data=title_data)
        if title_serializer.is_valid():
            title_serializer.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method=='PUT':
        title_data=JSONParser().parse(request)
        title=Title.objects.get(t_id=title_data['t_id'])
        title_serializer=TitleSerializer(title,data=title_data)
        if title_serializer.is_valid():
            title_serializer.save()
            return JsonResponse('Updated uccessfully', safe = False)
        return JsonResponse('Failed to Update')
    elif request.method=='DELETE':
        title=Title.objects.get(t_id=id)
        title.delete()
        return JsonResponse('deleted Successfully',safe=False)

@csrf_exempt
def quesApi(request,id=0):
    if request.method=='GET':
        ques = Ques.objects.all()
        ques_serializer=QuesSerializer(ques, many=True)
        return JsonResponse(ques_serializer.data, safe=False)
    elif request.method=='POST':
        ques_data=JSONParser().parse(request)
        ques_serializer=QuesSerializer(data=ques_data)
        if ques_serializer.is_valid():
            ques_serializer.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method=='PUT':
        ques_data=JSONParser().parse(request)
        ques=Ques.objects.get(question=ques_data['question'])
        ques_serializer=QuesSerializer(ques,data=ques_data)
        if ques_serializer.is_valid():
            ques_serializer.save()
            return JsonResponse('Updated uccessfully', safe = False)
        return JsonResponse('Failed to Update')
    '''elif request.method=='DELETE':
        ques=Ques.objects.get(question=id)
        title.delete()
        return JsonResponse('deleted Successfully',safe=False)'''