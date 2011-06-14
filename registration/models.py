from django.db import models
from django.contrib.auth.models import User, UserManager
from django.contrib import admin
import re

	
class CustomUser(User):
	band_name = models.CharField(max_length=30)
	is_band = models.BooleanField()
	# We setup a manager here.. not really sure this is useful
	objects = UserManager()
	
	votelistfield = models.CommaSeparatedIntegerField(max_length=10000)
	
	def getvotelist(self):
		votelist = eval('['+self.votelistfield+']')
		return votelist
		
	def upvote(self, song_id):
		votelist = self.getvotelist()
		votelist[song_id]=1
		votestring=','.join(str(n) for n in votelist)
		self.votelistfield=votestring
		self.save()
		return
		
	def downvote(self, song_id):
		votelist = self.getvotelist()
		votelist[song_id]=-1
		votestring=','.join(str(n) for n in votelist)
		self.votelistfield=votestring
		self.save()
		return
	
	
	def __unicode__(self):
		return self.username

		
	# In the save function, we implement our own password
	# management. If the password is already hashed in the form
	# we just dont change anything otherwise we call the set_password()
	def save(self, *args, **kwargs):
		password = ""
		r = re.compile('sha1\$.*')
		if not r.match(self.password):
			password = self.password
			self.set_password(self.password)
		super(CustomUser, self).save(*args, **kwargs)	


def ma():
	list=[]
	for user in CustomUser.objects.all():
		votelist = user.getvotelist()
		for song in range(len(user.getvotelist())):
			list.append((user.id, song, votelist[song]))
	return list