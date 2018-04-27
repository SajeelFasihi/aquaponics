# Generated by Django 2.0.3 on 2018-04-20 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aqua', '0003_auto_20180420_1119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='status',
            name='Heater',
            field=models.BooleanField(choices=[(False, 'Off'), (True, 'On')], default=False),
        ),
        migrations.AlterField(
            model_name='status',
            name='LED',
            field=models.BooleanField(choices=[(False, 'Off'), (True, 'On')], default=False),
        ),
        migrations.AlterField(
            model_name='status',
            name='Motor',
            field=models.BooleanField(choices=[(False, 'Off'), (True, 'On')], default=False),
        ),
    ]
