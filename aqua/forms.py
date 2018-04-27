from django import forms
from aqua.models import status
from django.utils.translation import gettext_lazy as _
from django.forms import ModelForm


class Control(ModelForm):
    class Meta:
        model = status
        fields = ('Heater','Motor','LED','Autonomous')

        labels = {
            'Heater': _('Heater'),
            'Motor': _('Pump'),
            'LED': _('LED'),
            'Autonomous': _('Autonomous'),
        }

        widget = {
            'Heater': forms.Select(attrs={'data-role': 'slider'}),
            'Motor': forms.Select(attrs={'data-role': 'slider'}),
            'LED': forms.Select(attrs={'data-role': 'slider'}),
            'Autonomous': forms.Select(attrs={'data-role': 'slider'}),
        }





