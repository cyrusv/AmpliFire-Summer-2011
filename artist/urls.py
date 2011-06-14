from django.conf.urls.defaults import *
from registration.views import *
from artist.views import *
import os
from django.views.generic.simple import direct_to_template
from contact.views import *

site_media = os.path.join(
	os.path.dirname(__file__),'site_media'
)

urlpatterns = patterns('',
	(r'^$', direct_to_template, {'template': 'artist/my_artist.html'}),
	(r'^create/$', create_artist), 
	(r'^(?P<artist_name>[^/]+)/$', view_artist),
	(r'^(?P<artist_name>[^/]+)/edit/$', edit_artist),
	(r'^(?P<artist_name>[^/]+)/upload/$', upload_song),
	(r'^success/$', direct_to_template, {'template': 'artist/artist_register_success.html'}),
	
)
