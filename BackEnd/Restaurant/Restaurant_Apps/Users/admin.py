'''Users app configuration for the Restaurant application.'''
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

# Register your models here.


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    '''Custom User admin model'''
    model = CustomUser
    list_display = ('username', 'email', 'first_name',
                    'last_name', 'phone_number', 'is_staff')
    fieldsets = UserAdmin.fieldsets + (
        ('Información adicional', {'fields': ('phone_number',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Información adicional', {'fields': ('phone_number',)}),
    )
