# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0022_auto_20151118_1642'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='commit',
            field=models.CharField(max_length=256, blank=True),
        ),
        migrations.AddField(
            model_name='role',
            name='commit_message',
            field=models.CharField(max_length=256, blank=True),
        )
    ]
