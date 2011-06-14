# Django settings for AmpliFire project.

DEBUG = True
TEMPLATE_DEBUG = DEBUG

import os 
import sys 
PROJECT_ROOT = os.path.dirname(__file__) 


ADMINS = (
     ('test', 'cordova.brad@gmail.com'),
)

MANAGERS = ADMINS



DATABASES = {
    'default': {
        'ENGINE': 'sqlite3', # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'database1.db',                      # Or path to database file if using sqlite3.
        'USER': '',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
TIME_ZONE = 'America/Chicago'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale
USE_L10N = True

# Absolute path to the directory that holds media.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = os.path.join(PROJECT_ROOT,"media")

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = 'http://amplifire.mobi/media/'

# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = '/admin-media/'

# Make this unique, and don't share it with anybody.
SECRET_KEY = '4_f)k=vq3kavxqj!xzgty3tv0kwr3=j@6hc0z^mt+$cn(ofy@y'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#     'django.template.loaders.eggs.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
	'django.middleware.csrf.CsrfResponseMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)


SESSION_ENGINE = "django.contrib.sessions.backends.cached_db"
#SESSION_COOKIE_DOMAIN = "http://0.0.0.0/admin/"


ROOT_URLCONF = 'AmpliFire.urls'

TEMPLATE_DIRS = (
    os.path.join(PROJECT_ROOT,"templates")
)

INSTALLED_APPS = (
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.sites',
	'django.contrib.messages',
    'django.contrib.admin',
    'django.contrib.admindocs',
	'registration',
	'artist',
	'contact',
	'voting',
)

LOGIN_REDIRECT_URL = PROJECT_ROOT


TEMPLATE_CONTEXT_PROCESSORS = (

      "django.contrib.auth.context_processors.auth",

      "django.core.context_processors.request",

      "django.core.context_processors.debug",

      "django.core.context_processors.i18n",

      "django.core.context_processors.media",

      "django.contrib.messages.context_processors.messages",

)


#AUTHENTICATION_BACKENDS = ( 'AmpliFire.authbackends.CustomUserModelBackend', )

CUSTOM_USER_MODEL = 'registration.CustomUser'
	

#AUTH_PROFILE_MODULE = 'registration.UserProfile'


EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'webmaster.jaycall@gmail.com'
EMAIL_HOST_PASSWORD = 'makemoney$'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
SERVER_EMAIL = EMAIL_HOST_USER
DEFAULT_FROM_EMAIL = 'webmaster.jaycall@gmail.com'


