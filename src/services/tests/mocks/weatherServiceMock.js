const dataMock = [{
    "coord": {
        "lon": -51.7216,
        "lat": 64.1835
    },
    "sys": {
        "country": "GL",
        "timezone": -7200,
        "sunrise": 1659941750,
        "sunset": 1660003758
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "main": {
        "temp": 5.34,
        "feels_like": 2.85,
        "temp_min": 4.93,
        "temp_max": 5.34,
        "pressure": 998,
        "humidity": 93
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.09,
        "deg": 320
    },
    "clouds": {
        "all": 100
    },
    "dt": 1660000158,
    "id": 3421319,
    "name": "Nuuk"
}]

const dataFormattedMock = [{
    "city": "Nuuk",
    "country": "GL",
    "temp": 5,
    "humidity": 93,
    "pressure": 998
}]

export {
    dataFormattedMock,
    dataMock
}