'''Reservations' App urls'''
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationsViewSet


# Create a router and register our viewset with it.
router = DefaultRouter()
router.register(r'', ReservationsViewSet, 'reservations')

urlpatterns = [
    path('', include(router.urls)),
]
