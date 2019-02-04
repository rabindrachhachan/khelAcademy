import * as types from "./types";

export function createEvent() {
    return {
        type: types.CREAT_EVENT_REQUEST,
        payload: {

            "event": {
                "eventId": 0,
                "eventName": "Premi's Event",
                "eventType": 11,
                "date": "2019-12-24T21:47:32.972Z",
                "status": 0,
                "description": "string",
                "eventVenue": "string",
                "eventCity": "string",
                "eventCityId": 11,
                "eventImgUrl": "https://res.cloudinary.com/parc-india/image/upload/v1538149574/gm5y7uvkxgdlmxqhqygb.jpg",
                "prices": {
                },
                "sponsers": [
                    "string"
                ],
                "organizers": [
                    "string"
                ],
                "timings": "string",
                "phone": "string",
                "city": "string",
                "price": 0
            },
            "prices": [
                {
                    "priceId": 0,
                    "priceAmount": 0,
                    "desc": "string",
                    "currency": "string",
                    "category": 0,
                    "name": "string"
                }
            ]

        }
    }
}