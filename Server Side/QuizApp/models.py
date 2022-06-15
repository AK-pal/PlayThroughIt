from django.db import models

# Create your models here.
class Title(models.Model):
    t_name = models.CharField(max_length=50)
    t_id = models.CharField(max_length=50)
    t_desc = models.CharField(max_length=100)
    t_img = models.CharField(max_length=100)

    def __str__(self):
        return self.t_name


class Ques(models.Model) :
    question = models.CharField(max_length=200)
    ch1 = models.CharField(max_length=50)
    ch2 = models.CharField(max_length=50)
    ch3 = models.CharField(max_length=50)
    ch4 = models.CharField(max_length=50)
    r_ch = models.CharField(max_length=50)
    pub_date = models.DateField("date published")
    title = models.ForeignKey(Title, on_delete=models.CASCADE)

    def __str__(self):
        return self.question