'''Registing Reservations' models on admin's page'''
from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Reservations

# Register your models here.


@admin.register(Reservations)
class ReservationsAdmin(ModelAdmin):
    '''Reservations admin model'''
    list_display = ('user', 'date', 'time', 'guests')
    search_fields = ('user__username', 'date', 'time')
    list_filter = ('date', 'time')
    ordering = ('-date', '-time')

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.select_related('user')
