# Generated by Django 3.2.3 on 2021-08-20 14:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Core', '0005_auto_20210811_1750'),
        ('authentication', '0055_auto_20210820_1405'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customerprofile',
            name='current_country',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='current_country_profile', to='Core.country'),
        ),
        migrations.AlterField(
            model_name='customerprofile',
            name='desired_country',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='desired_country_profile', to='Core.country'),
        ),
    ]