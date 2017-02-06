# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0020_auto_20151118_1350'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='forks_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='role',
            name='open_issue_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='role',
            name='stargazers_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='role',
            name='watchers_count',
            field=models.IntegerField(default=0),
        ),
    ]
