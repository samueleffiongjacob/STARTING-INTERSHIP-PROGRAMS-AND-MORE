# Generated by Django 3.2.3 on 2021-11-15 13:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('questionnaire', '0003_customeranswers'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnsweredQuestionnaires',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, null=True)),
                ('answer', models.CharField(blank=True, default=None, max_length=512, null=True)),
                ('question', models.ForeignKey(default=None, on_delete=django.db.models.deletion.DO_NOTHING, to='questionnaire.question')),
                ('user', models.ForeignKey(default=None, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Option',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, null=True)),
                ('option', models.CharField(blank=True, default=None, max_length=512, null=True)),
                ('question', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='questionnaire.question')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.RemoveField(
            model_name='customeranswers',
            name='answer',
        ),
        migrations.RemoveField(
            model_name='customeranswers',
            name='question',
        ),
        migrations.RemoveField(
            model_name='customeranswers',
            name='user',
        ),
        migrations.DeleteModel(
            name='Answer',
        ),
        migrations.DeleteModel(
            name='CustomerAnswers',
        ),
    ]
