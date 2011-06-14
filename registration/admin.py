from registration.models import *
from django.contrib import admin
from django.db import models
from django.contrib.auth.models import User, UserManager
from django.contrib.auth.admin import UserAdmin

admin.site.register(CustomUser,UserAdmin)
