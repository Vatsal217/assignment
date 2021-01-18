
from rest_framework import serializers
from profile_backend.models import Profile_Model

class Profile_Serializers(serializers.ModelSerializer):
        class Meta:
                model = Profile_Model
                fields = "__all__"