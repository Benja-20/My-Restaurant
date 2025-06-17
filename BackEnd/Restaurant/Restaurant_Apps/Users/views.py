'''Users app's views'''
from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, UserSerializer
from django.shortcuts import render


# Create your views here.
User = get_user_model()


@method_decorator(csrf_exempt, name='dispatch')
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


@method_decorator(csrf_exempt, name='dispatch')
class LogoutView(APIView):
    '''Endpoint for user logout'''
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        '''Handle user logout by blacklisting the refresh token'''
        refresh_token = request.data.get('refresh')
        if not refresh_token:
            return Response({'detail': 'Refresh token is required.'},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception:
            return Response({'detail': "Invalid or expired token"},
                            status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_205_RESET_CONTENT)
