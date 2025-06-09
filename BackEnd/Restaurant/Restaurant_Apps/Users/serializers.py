'''Users' app 's serializer'''
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser


class RegisterSerializer(serializers.ModelSerializer):
    '''Users' serializer for the API'''
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        """Meta class for the serializer"""
        model = CustomUser
        fields = ('username', 'email', 'first_name', 'last_name',
                  'phone_number', 'password', 'password2')

    def validate(self, attrs):
        '''Validate the serializer'''
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {'password': 'Passwords does not match'})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    '''Users' serializer for the API, used for retrieving user data'''
    class Meta:
        """Meta class for the serializer"""
        model = CustomUser
        fields = ('id', 'username', 'email', 'first_name',
                  'last_name', 'phone_number')
