from django.shortcuts import render
from django.template.response import TemplateResponse
from django.core import serializers
from django.http import HttpResponse
from aqua.models import reading
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.urlpatterns import format_suffix_patterns
from aqua.serializers import readingSerializer
from static.FC.fusioncharts import fusioncharts
from django.shortcuts import render,redirect
from django.http import HttpResponse
from aqua.models import status
from rest_framework import generics
from aqua.serializers import statusSerializer
from aqua.forms import Control
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login,authenticate



def reading_list(request, format= None):
    if request.method == 'GET':
        readings = reading.objects.only()
        serializer = readingSerializer(readings, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = readingSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def status_list(request, format= None):
    if request.method == 'GET':
        statuses = status.objects.all()
        serializer = statusSerializer(statuses, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = statusSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)



#class statusList(generics.RetrieveUpdateDestroyAPIView):
    #queryset = status.objects.all()
   #serializer_class = statusSerializer


#class statusDetail(generics.RetrieveUpdateDestroyAPIView):
    #queryset = status.objects.all()
    #serializer_class = statusSerializer





def home(request):
    data = reading.objects.last()

    return TemplateResponse(request, 'index.html', {'data': data})


def list(request):
    queryset = reading.objects.only()
    queryset = serializers.serialize('json', queryset)
    return HttpResponse(queryset, content_type="application/json")



def Canvas(request):
    return TemplateResponse(request, 'chart.html')

def Form(request):
    form= Control(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
    context = {
        "form": form,
    }
    return render(request, "controlpage.html",context)




def home(request):
    template_name = 'login/home.html'
    return render(request, template_name)


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('login')

    else:
        form = UserCreationForm()

    return render(request, 'signup.html', {'form': form})


@login_required
def dashboard(request):
    template_name = 'login/dashboard.html'
    return render(request, template_name)

#def blinker(request):
#    if 'on' in request.POST:
#        GPIO.output(18, 1)
#    elif 'off' in request.POST:
#        GPIO.output(18, 0)
#    return render(request, 'controlpage.html')