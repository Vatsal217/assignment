from django.urls import path, include
from profile_backend.api.input_api import ProfileCreateAPIView,ProfileDetailAPIView
from rest_framework.routers import DefaultRouter




urlpatterns = [
    path("Profiles/", ProfileCreateAPIView.as_view(), name="CreateProfile_APIView"),
    path("Profiles/<int:pk>/", ProfileDetailAPIView.as_view(), name="CreateProfile_APIView")


]
