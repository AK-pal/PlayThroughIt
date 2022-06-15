from rest_framework import serializers
from QuizApp.models import Ques , Title

class TitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Title
        fields = ('t_name','t_id', 't_desc', 't_img')

class QuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ques
        fields = ('question','ch1','ch2','ch3','ch4','r_ch','pub_date','title')