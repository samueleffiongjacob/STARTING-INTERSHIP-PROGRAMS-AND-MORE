# Generated by Django 3.2.3 on 2021-08-05 17:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CallSchedule',
            fields=[
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, null=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('status', models.PositiveSmallIntegerField(choices=[(1, 'Active'), (2, 'Rescheduled'), (3, 'Canceled')], default=1)),
                ('start_time', models.DateTimeField(verbose_name='Starting time of call schedule in UTC from calendly')),
                ('end_time', models.DateTimeField(verbose_name='Ending time of call schedule in UTC from calendly')),
                ('is_active', models.BooleanField(default=True)),
                ('host_user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='call_schedules', to=settings.AUTH_USER_MODEL, verbose_name='RCIC or Account Manager')),
                ('visitor_user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='customer_call_schedules', to=settings.AUTH_USER_MODEL, verbose_name='Customer')),
            ],
            options={
                'db_table': 'call_schedule',
            },
        ),
    ]
