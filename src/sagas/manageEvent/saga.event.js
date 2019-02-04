import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import * as types from "../../actions/types";
import { callAPI } from "../apiSaga";
import * as ManageEventAPI from "../../api/api.manageEvent";


export function* createEvent(action) {
    let response = yield callAPI(ManageEventAPI.createEvent, action.payload, types.CREAT_EVENT_FAILURE);
    if (response) {
        yield put({ type: types.CREAT_EVENT_SUCCESS, payload: response.data })
    }
}

export function* watchManageEvent() {
    yield takeEvery(types.CREAT_EVENT_REQUEST,createEvent);   
}