from django.shortcuts import render
from django.http import JsonResponse


def getRoutes(request):
    routes = [
        {
            'Endpoint': '/vuilder/id/delete',
            'method': 'DELETE',
            'body': None,
            'description': "Deletes vuilder"
        }
    ]
    return JsonResponse(routes, safe=False)