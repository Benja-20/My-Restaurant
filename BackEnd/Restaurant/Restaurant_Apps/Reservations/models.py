'''Reservastions' app models'''
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.


class Reservations(models.Model):
    '''Creatin Reservations models for users to reserve tables.'''
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    date = models.DateField(
        help_text='Select the date for the reservation.',
    )
    time = models.TimeField(
        help_text='Select the time for the reservation.',
    )
    guests = models.IntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(10)
        ],
    )

    def __str__(self):
        return (f'Dear {self.user.username},'  # ignore
                f'your reservation is for {self.guests} guests on {self.date} at {self.time}')
