# Generated by Django 3.2.3 on 2021-09-21 08:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0007_auto_20210921_1230'),
    ]

    operations = [
        migrations.RenameField(
            model_name='program',
            old_name='choices',
            new_name='choice',
        ),
    ]