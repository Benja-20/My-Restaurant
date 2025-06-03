'''Models for the users authentication'''
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

# Create your models here.


class CustomUser(AbstractUser):
    '''Custom user model'''
    email = models.EmailField(
        max_length=255,
        unique=True,
        error_messages={
            'unique': "A user with that email already exists."
        })
    phone_number = models.CharField(
        max_length=15,
        blank=True,
        null=True,
        validators=[RegexValidator(
            regex=r'^\+?1?\d{9,15}$',
            message='Invalid number')]
    )

    def __str__(self):
        return (f'{self.username}, {self.first_name},{self.last_name},'
                f'{self.email}, {self.phone_number}')
