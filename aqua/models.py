from django.db import models


class reading(models.Model):
    temp = models.IntegerField()
    plant_temp = models.IntegerField()
    humidity = models.CharField(max_length=10)
    ph = models.IntegerField()

class status(models.Model):
    SWITCH_CHOICES = ((False, 'Off'), (True, 'On'),)

    Heater = models.BooleanField(choices=SWITCH_CHOICES, default=False )
    Motor = models.BooleanField(choices=SWITCH_CHOICES, default=False )
    LED = models.BooleanField(choices=SWITCH_CHOICES, default=False )
    Autonomous = models.BooleanField(choices=SWITCH_CHOICES, default=False)

class reading_data(models.Model):
    temp = models.IntegerField()
    plant_temp = models.IntegerField()
    humidity = models.CharField(max_length=10)
    ph = models.IntegerField()


