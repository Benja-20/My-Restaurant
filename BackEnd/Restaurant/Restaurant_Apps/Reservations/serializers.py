'''Reservations' serializer'''
from rest_framework import serializers
from .models import Reservations


class ReservationsSerializer(serializers.ModelSerializer):
    '''Reservations' serializer for the API'''

    class Meta:
        '''Meta class for the serializer'''
        model = Reservations
        fields = ('id', 'user', 'date', 'time', 'guests',)
        read_only_fields = ('id', 'user',)
        extra_kwargs = {
            'date': {'required': True},
            'time': {'required': True},
            'guests': {'required': True, 'min_value': 1}
        }
