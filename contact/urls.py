from django.conf.urls.defaults import *
from contact.views import contact_form
from django.views.generic.simple import direct_to_template


urlpatterns = patterns('', 
						url(r'^$', 
							contact_form, 
							name='contact_form'), 
							
						url(r'^sent/$', 
							direct_to_template, 
							{ 'template': 'contact_form/contact_form_sent.html' }, 
							name='contact_form_sent'),)