from django import forms
import re
from django.contrib.auth.models import User
from registration.models import *

class RegistrationForm(forms.Form):
	username = forms.CharField(label=u'Username',max_length = 30)
	email = forms.EmailField(label=u'Email')
	password1 = forms.CharField(
		label = u'Password',
		widget=forms.PasswordInput()
	)
	password2 = forms.CharField(
		label = u'Password (Again)',
		widget=forms.PasswordInput()
	)
	first_name = forms.CharField(label=u'First Name',max_length = 30)
	last_name = forms.CharField(label=u'Last Name',max_length = 30)
	bandQ = forms.BooleanField(
		label=u'I am apart of a sweet Band!',
		required = False
	)
	
	def clean_password2(self):
		if 'password1' in self.cleaned_data:
			password1 = self.cleaned_data['password1']
			password2 = self.cleaned_data['password2']
			if password1 == password2:
				return password2
			raise forms.ValidationError('Passwords do not match.')
	
	def clean_username(self):
		username = self.cleaned_data['username']
		if not re.search(r'^\w+$',username):
			raise forms.ValidationError('Username can only contain alphanumeric characters and the underscore')
		try:
			User.objects.get(username=username)
		except User.DoesNotExist:
			return username
		raise forms.ValidationError('Username is already taken.')
			