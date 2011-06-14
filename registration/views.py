from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import Context, Template
from django.template.loader import get_template
from django.contrib.auth.models import User, Permission, Group
from django.shortcuts import render_to_response
from django.contrib.auth import logout
from django.template import RequestContext
from registration.forms import *
from registration.models import *
from django import template
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_protect

	
def user_page(request,username):
	try:
		user = CustomUser.objects.get(username=username)
	except User.DoesNotExist:
		raise Http404(u'Requested user not found!')
		
	variables = RequestContext(request,{
		'username':username,
	})
	return render_to_response('user_page.html',variables)

def logout_page(request):
	logout(request)
	return HttpResponseRedirect('/')

@csrf_protect
def register_page(request):
	if request.method == 'POST':
		form = RegistrationForm(request.POST)
		if form.is_valid():
			user = CustomUser.objects.create(
				username = form.cleaned_data['username'],
				password = form.cleaned_data['password1'],
				email = form.cleaned_data['email'],
				)
			user.is_band = form.cleaned_data['bandQ']
			user.first_name = form.cleaned_data['first_name']
			user.last_name = form.cleaned_data['last_name']
			user.save()
			
			#autologin after register
			username = form.cleaned_data['username']
			password = form.cleaned_data['password1']
			reguser = authenticate(username=username, password=password)
			login(request, reguser)
			
			return HttpResponseRedirect('/')
	else:
		form = RegistrationForm()
	variables = RequestContext(request,{'form':form})
	return render_to_response('registration/register.html',variables)


	
