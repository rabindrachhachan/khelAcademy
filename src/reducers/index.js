import { combineReducers } from "redux";
import { persistReducer} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

import { reducer as network } from 'react-native-offline';
import loginReducer from "./onBoarding/reducer.login";



const persistConfigNetworkMonitor = {
    key: "networkMonitor",
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['isConnected']
}

const sensiveInfoPersistConfig = {
    key:"TOKEN",
    storage:storage,
    stateReconciler: autoMergeLevel2
}

const AppReducer = combineReducers({
    network: persistReducer(persistConfigNetworkMonitor, network),
    LoginReducer: persistReducer(sensiveInfoPersistConfig, loginReducer),

});

export default AppReducer;