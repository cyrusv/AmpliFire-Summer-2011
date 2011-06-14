from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from contact.forms import ContactForm




def contact_form(request, form_class=ContactForm,
                 template_name='contact_form/contact_form.html',
                 success_url="/contact/sent/", extra_context=None,
                 fail_silently=False):
				 
	if request.method == 'POST':
		form = form_class(data=request.POST, files=request.FILES, request=request)
		if form.is_valid():
			form.save(fail_silently=fail_silently)
			return HttpResponseRedirect(success_url)
	else:

		form = form_class(request=request)

	context = RequestContext(request)
    
	return render_to_response(template_name,
                              { 'form': form },
                              context_instance=context)
