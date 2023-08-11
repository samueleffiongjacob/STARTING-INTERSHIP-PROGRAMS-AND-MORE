# Generated by Django 3.2.3 on 2022-01-03 14:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0064_auto_20211007_2032'),
    ]

    operations = [
        migrations.CreateModel(
            name='SMSOtpModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, null=True)),
                ('phone_number', models.IntegerField(blank=True, default=None, null=True)),
                ('otp', models.CharField(blank=True, default=None, max_length=512, null=True)),
                ('otp_expiry', models.DateTimeField(blank=True, default=None, null=True)),
                ('otp_status', models.BooleanField(default=False)),
                ('user', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='sms_otp', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
