from django.conf.urls.defaults import *
from registration.views import *
from artist.views import *
import os
from django.views.generic.simple import direct_to_template
from contact.views import *
from django.conf import settings
from artist.models import *
from artist.views import *
from voting.views import vote_on_object
from django.views.generic.list_detail import object_list


from django.contrib import admin
admin.autodiscover()

site_media = os.path.join(
	os.path.dirname(__file__),'site_media'
)

urlpatterns = patterns('',
    
	(r'^$', main_page),
	(r'^login/$', 'django.contrib.auth.views.login'),
	(r'^logout/$', logout_page),
	(r'^site_media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': site_media}),
	(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
	
	
	(r'^users/(\w+)/$', user_page),
	(r'^register/$', register_page),
	(r'^register/success/$', direct_to_template, {'template':'registration/register_success.html'}),
    
	(r'^artist/', include('artist.urls')), 

	(r'^contact/', include('contact.urls')), 
	
	(r'^ajax/recommend/', ajaxrecommend), 
	(r'^get_top_ten/', get_top_ten), 
	
	# Generic view to list Song objects
	(r'^song/?$', object_list, dict(queryset=Song.objects.all(),
	        template_object_name='song', template_name='artist/song_list.html',
	        paginate_by=15, allow_empty=True)),

	# Generic view to vote on Song objects
	(r'^song/(?P<object_id>\d+)/(?P<direction>up|down|clear)vote/?$',
	        vote_on_object, dict(model=Song, template_object_name='song',
	            template_name='artist/song_confirm_vote.html',
	            allow_xmlhttprequest=True)),
	

    # Admin stuff:
 	(r'^admin/', include(admin.site.urls)),
	(r'^admin/doc/', include('django.contrib.admindocs.urls')),
)
