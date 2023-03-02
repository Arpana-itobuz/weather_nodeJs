function getWeatherData(){
    const weatherData= [{
        location : 'kolkata',
        lat: '22',
        lng:'12',
        condition : {
            feelslike_c: 29.8,
            feelslike_f: 85.6,
            pressure_in: 29.91,
            pressure_mb: 1013,
            temp_c: 32,
            temp_f: 89.6
        }
    }]

    console.log(weatherData.find(Element => Element.location == "kolkata"));
    const result = []
    return result ;
   
}

getWeatherData("Kolkata")


