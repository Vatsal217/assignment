from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import serializers
from profile_backend.models import Profile_Model
from django.views.generic.detail import DetailView
from django.core.cache import cache
from profile_backend.api.serializers import Profile_Serializers
"This is UserCreateAPI View all the create user request will come here"





class ProfileCreateAPIView(APIView):

    def get(self, request):
        
        articles = Profile_Model.objects.all()
        serializer = Profile_Serializers(articles, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = Profile_Serializers(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ProfileDetailAPIView(APIView):

    def get_object(self, pk):
        profile = get_object_or_404(Profile_Model, pk=pk)
        return profile

    def get(self, request, pk):
        profile = self.get_object(pk)
        print(profile)
        if pk:
            url='127.0.0.1:8000/api/Profiles/'+ str(pk)
            if not cache.get(url):
                cache.set(url, profile)
        serializer = Profile_Serializers(profile)
        return Response(serializer.data)

    def put(self, request, pk):
        profile = self.get_object(pk)
        serializer=Profile_Model.objects.filter(id=pk).update(name=request.data['name'], age=request.data['age'], skill=request.data['skill'], post_image=request.data['post_image'])
        return Response(serializer, status=status.HTTP_200_OK)
    

    
   



   


