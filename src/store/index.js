import themeReducer from './reducers/theme.reducer'
import calculatorReducer from './reducers/calculator.reducer'
import {
    configureStore,
    combineReducers,
} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";


const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    theme: themeReducer,
    calculator: calculatorReducer,
});

// react-persist configs
const persistConfig = {
    key: "root",
    storage,
};

// react-persist configs
const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore() {
    return configureStore({
        reducer: persistedReducer,
        devTools: true,
        middleware: (
            getDefaultMiddleware // react-persist and redux-toolkit configs
        ) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },

            }),
    });
}

export const store = makeStore();

// react-persist configs
export const persistor = persistStore(store);