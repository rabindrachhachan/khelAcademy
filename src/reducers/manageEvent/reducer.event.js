import *as  types from "../../actions/types"


const initialState = {
    event: {

        "eventName": "",
        "description": "",

        "eventImgUrl": "",

        "eventCity": "",
        "eventCityId": 11,
        "eventVenue": "string",

        "eventId": 0,
        "eventType": 11,

        "startDate": "2019-12-24T21:47:32.972Z",
        "endDate": "",
        
        "sponsers": [
            "string"
        ],

        "organizers": [
            "string"
        ],

        "status": 0,

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

const manageEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREAT_EVENT_REQUEST:
            return {
                ...state,
                
            }

        case types.CREAT_EVENT_SUCCESS:
            return {
                ...state,

            }

        case types.CREAT_EVENT_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default manageEventReducer;