import { call, put} from "redux-saga/effects";

function headers() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json',
    }
}

export function* callAPI(api, payload, failureType) {
    try {
        const header = headers();
        let response = yield call(api, payload, header);
        if (!response.status) {
            yield put({ type: failureType });
            return null;
        }
        return response;
    }
    catch (e) {
        console.log(e);
        yield put({ type: failureType });
    }
    return null;
}