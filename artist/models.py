from django.db import models
from django.contrib.auth.models import User

class Artist(models.Model):
	user = models.CharField(max_length=30)
	artist_name = models.CharField(max_length=30, unique=True)
	artist_website = models.URLField(blank=True, null=True)
	facebook_URL = models.URLField(blank=True, null=True)
	zipcode = models.IntegerField(max_length=10)
	members = models.ManyToManyField(User)
	def __unicode__(self):
		return self.artist_name
	def natural_key(self):
		return self.artist_name


class Album(models.Model):
	album_name = models.CharField(max_length=30)
	artist_name = models.ForeignKey(Artist)
	def __unicode__(self):
		return self.album_name		

class Song(models.Model):
	# album_name = models.ForeignKey(Album)
	artist_name = models.ForeignKey(Artist)
	song_name = models.CharField(max_length=30)
	GENRE_CHOICES = (
		(u'rock', u'rock'),
		(u'pop', u'pop'),
		(u'hiphop', u'hiphop'),
		(u'latin', u'latin'),
		(u'electronic', u'electronic'),
		(u'other', u'other'),
	)
	genre = models.CharField(max_length=10, choices=GENRE_CHOICES)
	
	def song_location(self):
		location = 'song_files/' + self.artist_name.artist_name
		return location
		
	def __unicode__(self):
		return self.song_name
		
	song_file = models.FileField(upload_to='songs/')
	created_on = models.DateTimeField(auto_now_add = True)
	score = models.IntegerField(default = 0,blank=True)

	
	def vote_difference(self):
		return int(self.up_votes.count()) - int(self.down_votes.count())
	
class Link(models.Model):
	None