# Generated by Django 3.2.3 on 2021-08-20 08:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Core', '0005_auto_20210811_1750'),
        ('authentication', '0054_auto_20210820_1351'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agentprofile',
            name='country',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='country_agent_profile', to='Core.country'),
        ),
        migrations.AlterField(
            model_name='customerqualifications',
            name='city',
            field=models.ForeignKey(blank=True, default=None, max_length=512, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='city_customer_qualification', to='Core.city'),
        ),
        migrations.AlterField(
            model_name='customerqualifications',
            name='country',
            field=models.ForeignKey(blank=True, default=None, max_length=512, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='country_customer_qualifcation', to='Core.country'),
        ),
        migrations.AlterField(
            model_name='customerqualifications',
            name='state',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='state_customer_qualification', to='Core.state'),
        ),
        migrations.AlterField(
            model_name='customerworkexperience',
            name='city',
            field=models.ForeignKey(blank=True, default=None, max_length=512, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='city_customer_experience', to='Core.city'),
        ),
    ]
