'''Users app's views'''
from rest_framework import generics, permissions
from .serializers import RegisterSerializer, UserSerializer
from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.response import Response


# Create your views here.
User = get_user_model()


class RegisterView(generics.CreateAPIView):  # Implicitamente emplea POST
    '''Endpoint for user registration'''
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


class ProfileView(generics.RetrieveAPIView):  # Implicitamente emplea GET
    '''Endpoint for user profile'''
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
