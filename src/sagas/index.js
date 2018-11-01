import { all, fork } from 'redux-saga/effects';
import {watchUserOnBoarding} from "./onBoarding/saga.onBoarding";


//single entry point for all sagas
export default function* rootSaga() {
    yield all([
        watchUserOnBoarding(),
    ]);
}