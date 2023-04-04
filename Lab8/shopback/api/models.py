from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(default="")
    count = models.IntegerField(default=0)
    is_active = models.BooleanField()


class Category(models.Model):
    name = models.CharField(max_length=255)
