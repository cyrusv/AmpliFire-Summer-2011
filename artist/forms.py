from django import forms
import re
from django.contrib.auth.models import User
from django.forms import ModelForm
from artist.models import *
from django.forms.models import inlineformset_factory


class ArtistModelForm(ModelForm):
	class Meta:
		model = Artist
		exclude = ('user',)
		
class SongUploadForm(ModelForm):
	class Meta:
		model = Song
		exclude = ('score',)
		