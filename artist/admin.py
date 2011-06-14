from artist.models import *
from django.contrib import admin
from django.contrib.auth.models import User, UserManager

admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Song)
