from django.http import JsonResponse
import requests

def get_weather(request):
    location = request.GET.get('location', '')
    api_key = '34ded7895edec47f8ca97e6a678ae5cd'  # Replace with your API key
    api_url = f'http://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}&units=metric'
    
    try:
        response = requests.get(api_url)
        data = response.json()
        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': 'Failed to fetch weather data.'}, status=500)
