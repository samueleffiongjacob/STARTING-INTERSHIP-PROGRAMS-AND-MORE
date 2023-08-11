# Generated by Django 3.2.3 on 2021-09-21 07:28

import django.core.files.storage
from django.db import migrations, models
import keel.document.utils


class Migration(migrations.Migration):

    dependencies = [
        ('document', '0033_alter_documents_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='documents',
            name='avatar',
            field=models.FileField(blank=True, storage=django.core.files.storage.FileSystemStorage(), upload_to=keel.document.utils.upload_files_to, verbose_name='Documents'),
        ),
    ]
