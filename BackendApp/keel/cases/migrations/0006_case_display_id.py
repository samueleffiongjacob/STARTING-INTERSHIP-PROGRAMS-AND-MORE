# Generated by Django 3.2.3 on 2021-08-09 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0005_merge_20210727_1938'),
    ]

    operations = [
        migrations.AddField(
            model_name='case',
            name='display_id',
            field=models.CharField(blank=True, default=None, max_length=5, null=True),
        ),
    ]