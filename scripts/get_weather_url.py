import sys
import json

def get_weather_url(district_id):
    """Get weather URL for a specific district based on its ID."""
    try:
        district_id = int(district_id)
        
        # Map district ID to weather URL
        weather_urls = {
            1: "https://weather.com/en-IN/weather/today/l/11.14,79.08?par=google&temp=c",  # Ariyalur
            2: "https://weather.com/en-IN/weather/today/l/12.68,79.99?par=google&temp=c",  # Chengalpettu
            # Add more URLs as needed
        }
        
        return weather_urls.get(district_id, "")
        
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        district_id = sys.argv[1]
        result = get_weather_url(district_id)
        print(result)
    else:
        print("Error: No district ID provided") 