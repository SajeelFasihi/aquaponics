"""aquaponics URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
import aqua.views
from rest_framework.urlpatterns import format_suffix_patterns
from aqua.views import home,dashboard,signup
from django.contrib.auth.views import login as auth_login, logout as auth_logout

urlpatterns = [
    url(r'^$',aqua.views.home, name='home'),

    url(r'^reading/$', aqua.views.reading_list),
    url(r'^controlp/$', aqua.views.status_list),
    #url(r'^api-auth/', include('rest_framework.urls')),
    #url(r'reading/',aqua.views.ReadingList.as_view()),
    url(r'^chart/$',aqua.views.Canvas),
    #url(r'^control/$',aqua.views.blinker),
    #url(r'^status/(?P<pk>[0-9]+)/$',aqua.views.statusList.as_view()),
    url(r'^control/$',aqua.views.Form),
    url(r'^$', home,name='home'),
    url(r'login/$', auth_login,{'template_name': 'login/login.html'},name='login'),
	url(r'logout/$', auth_logout, {'next_page': '/'}, name='logout'),
    url(r'dashboard/$', dashboard,name='dashboard' ),

    url(r'signup/$', signup,name='signup' ),

]

urlpatterns = format_suffix_patterns(urlpatterns)