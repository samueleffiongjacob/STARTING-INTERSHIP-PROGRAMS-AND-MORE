# Generated by Django 3.2.3 on 2021-07-02 14:23

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0016_alter_passwordresettoken_expiry_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passwordresettoken',
            name='expiry_date',
            field=models.DateTimeField(default=datetime.datetime(2021, 7, 2, 14, 33, 48, 752296, tzinfo=utc)),
        ),
    ]