# Generated by Django 3.2.3 on 2021-12-27 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionnaire', '0016_auto_20211227_1851'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checkboxmodel',
            name='score',
            field=models.BigIntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='dropdownmodel',
            name='score',
            field=models.BigIntegerField(blank=True, default=None, null=True),
        ),
    ]