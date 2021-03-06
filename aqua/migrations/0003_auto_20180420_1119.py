# Generated by Django 2.0.3 on 2018-04-20 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aqua', '0002_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='status',
            name='condition',
        ),
        migrations.RemoveField(
            model_name='status',
            name='device',
        ),
        migrations.AddField(
            model_name='status',
            name='Heater',
            field=models.CharField(choices=[(False, 'Off'), (True, 'On')], default=False, max_length=10),
        ),
        migrations.AddField(
            model_name='status',
            name='LED',
            field=models.CharField(choices=[(False, 'Off'), (True, 'On')], default=False, max_length=10),
        ),
        migrations.AddField(
            model_name='status',
            name='Motor',
            field=models.CharField(choices=[(False, 'Off'), (True, 'On')], default=False, max_length=10),
        ),
    ]
