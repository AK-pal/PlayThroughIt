# Generated by Django 4.0.4 on 2022-05-27 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('QuizApp', '0005_alter_title_t_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='title',
            name='t_desc',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]