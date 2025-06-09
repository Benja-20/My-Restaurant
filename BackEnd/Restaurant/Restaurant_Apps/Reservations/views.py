'''Reservations' views'''
from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.exceptions import PermissionDenied
from .models import Reservations
from .serializers import ReservationsSerializer


# Create your views here.
class ReservationsViewSet(viewsets.ModelViewSet):
    '''Reservations for the API'''
    serializer_class = ReservationsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        '''Get the queryset for the reservations'''
        return Reservations.objects.filter(user=self.request.user).order_by('-date', '-time')

    def perform_create(self, serializer):
        '''Save the user in the reservation'''
        serializer.save(user=self.request.user)
