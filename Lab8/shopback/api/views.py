from django.http.response import JsonResponse
from django.shortcuts import render

from api.models import Product, Category


def products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    for pj in products_json:
        if pj['id'] == id:
            return JsonResponse(pj)
    return JsonResponse({'error': 'Product not found!'})


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, id):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    for cj in categories_json:
        if cj['id'] == id:
            return JsonResponse(cj)
    return JsonResponse({'error': 'Category not found!'})


def category_products_list(request):
    pass
