from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import Context
from django.template.loader import get_template
from django.contrib.auth.models import User
from django.shortcuts import render_to_response, get_object_or_404
from django.contrib.auth import logout
from django.template import RequestContext
from artist.forms import *
from artist.models import *
from django.core.context_processors import csrf
from django.forms.models import inlineformset_factory
from registration.forms import *
from registration.models import *
from voting.models import *
from django.core import serializers

def ajaxrecommend(request):
	if request.is_ajax():
		user = request.user
		num_users = len(User.objects.all())
		num_items = len(Song.objects.all())
		num_ratings = 3
		latent_dimension = 6
		noise = .25
		(ratings, true_o, true_d) = initialization(noise, num_users, num_items, num_ratings, latent_dimension)
		pmf = ProbabilisticMatrixFactorization(ratings, latent_d=6)
		rec = predicted_ratings(pmf.users, pmf.items, 1)
		songlist=[]
		for song_id in range(4):
			songlist.append(Song.objects.get(id=rec[song_id]))
		data = serializers.serialize("json", songlist)
		return HttpResponse(data, 'application/json')
	else:
		return HttpResponse("not ajax.")

def main_page(request):
	user = request.user
	songs = Song.objects.order_by('-score')[:3] #only displays latest 10 songs
	variables = RequestContext(request, {'songs': songs})
	return render_to_response("main_page.html", variables)

def get_top_ten(request):
	if request.is_ajax():
		top_ten_songs = Song.objects.order_by('-score')[:6] #only displays latest 10 songs
		top_ten_data = serializers.serialize("json", top_ten_songs, use_natural_keys=True)
		return HttpResponse(top_ten_data, 'application/json')
	else:
		return HttpResponse("not ajax")

def view_artist(request, artist_name):
	user = request.user
	try:
		artist = Artist.objects.get(artist_name = artist_name)
	except Artist.DoesNotExist:
		return render_to_response("artist/artist_doesnotexist.html", {"artist_name": artist_name})
	
	
	variables = RequestContext(request, {'artist': artist})
	
	return render_to_response("artist/artist_profile_view.html", variables)	

	
def edit_artist(request, artist_name):
	
	try:
		artist = Artist.objects.get(artist_name = artist_name)
	except Artist.DoesNotExist:
		return render_to_response("artist/artist_doesnotexist.html", {"artist_name": artist_name})
	user = request.user
	if request.method == 'POST':
		form = ArtistModelForm(request.POST, instance = artist)
		if form.is_valid():
			form.save()
			return HttpResponseRedirect('/artist/'+artist.artist_name+'/')
			
			
	form = ArtistModelForm(instance=artist)

	return render_to_response("artist/edit_artist.html", {"form": form, "artist": artist}, context_instance = RequestContext(request))	

	
def create_artist(request):
	user = request.user
	if request.method == 'POST':
		form = ArtistModelForm(request.POST)
		if form.is_valid():
			form.save()
			render_to_response('artist/upload_song.html', {}, context_instance = RequestContext(request))
	else:
		form = ArtistModelForm()
	return render_to_response('artist/create_artist.html', {'form': form}, context_instance = RequestContext(request))
	
	
	
def upload_song(request, artist_name):
	user = request.user
	
	try:
		artist = Artist.objects.get(artist_name = artist_name)
	except Artist.DoesNotExist:
		return render_to_response("artist/artist_doesnotexist.html", {"artist_name": artist_name}, context_instance = RequestContext(request))
		
	if request.method == "POST":
		form = SongUploadForm(request.POST, request.FILES)
		
		if form.is_valid():
			form.save()
			return HttpResponseRedirect('/artist/'+artist.artist_name+'/')
		
	else:
		form = SongUploadForm()
	return render_to_response('artist/upload_song.html', {'form': form}, context_instance = RequestContext(request))
	