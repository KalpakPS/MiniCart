from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=100)
    image = models.URLField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.title
