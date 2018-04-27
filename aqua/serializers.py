from rest_framework.serializers import ModelSerializer
from aqua.models import reading
from aqua.models import status

class readingSerializer(ModelSerializer):
    class Meta:
        model= reading
        fields=('plant_temp','temp','humidity','ph')

class statusSerializer(ModelSerializer):
    class Meta :
        model= status
        fields=('Autonomous','Heater','Motor','LED')



