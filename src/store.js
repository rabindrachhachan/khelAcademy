import { AsyncStorage, Platform, NetInfo } from "react-native";
import {
    createStore,
    applyMiddleware,
    compose
} from "redux";

import rootSaga from "./sagas";
import reducer from "./reducers";

import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createNetworkMiddleware, offlineActionTypes, checkInternetConnection } from "react-native-offline";
import { OFFLINE_ACTION_TYPES } from "./constants";
import Config from "react-native-config";

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const sagaMiddleware = createSagaMiddleware();
const networkMiddleware = createNetworkMiddleware({actionTypes: OFFLINE_ACTION_TYPES});

export default function configureStore(initialState, callback) {
    const enhancer = compose(
        applyMiddleware(
            sagaMiddleware,
            loggerMiddleware,
            networkMiddleware
        )
    );

    const store = createStore(reducer, initialState, enhancer);
    let persistor = persistStore(store, null, () => {
        checkInternetConnection(10000, Config.OFFLINE_TEST_PING_URL).then(isConnected => {
            console.log(" the connection is " + isConnected);
            store.dispatch({
                type: offlineActionTypes.CONNECTION_CHANGE,
                payload: isConnected,
            });
            callback(); // Notify our root component we are good to go, so that we can render our app
        });
    })

    sagaMiddleware.run(rootSaga);

    return {
        store,
        persistor
    };
}